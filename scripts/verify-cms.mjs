// Run against the production preview and a LOCAL/STAGING CMS, never sends mail.
// PREVIEW_URL=http://127.0.0.1:4173 CMS_API_URL=http://127.0.0.1:8000/api node scripts/verify-cms.mjs
import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const api=process.env.CMS_API_URL || 'http://127.0.0.1:8000/api';
const preview=process.env.PREVIEW_URL || 'http://127.0.0.1:4173';
const browser=await chromium.launch();
const results=[];
await fs.mkdir('test-results',{recursive:true});
try {
  for (const viewport of [{width:1440,height:900},{width:390,height:844}]) {
    const context=await browser.newContext({viewport,reducedMotion:'reduce'});
    const page=await context.newPage();
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.route('**/api/**', async route=>{
      const original=new URL(route.request().url());
      const target=api.replace(/\/$/,'')+original.pathname.replace(/^\/api/,'')+original.search;
      const response=await route.fetch({url:target});await route.fulfill({response});
    });
    for (const language of ['ru','en','kg']) {
      await page.addInitScript(lang=>{sessionStorage.setItem('splashAnimationShown','true');localStorage.setItem('siteLanguage',lang);},language);
      for (const path of ['/education','/education/student','/education/applicant']) {
        const response=await fetch(api+'/pages/by-path/?path='+encodeURIComponent(path)+'&lang='+language);
        assert.equal(response.status,200);
        const payload=await response.json();
        await page.goto(preview+path);
        await page.getByRole('heading',{name:payload.title,exact:true}).waitFor();
        assert.equal(await page.locator('h2').count(),payload.data.sections.length);
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth),true);
        assert.equal(await page.title(),payload.seo_title);
        const file=`test-results/cms-${path.split('/').at(-1)}-${language}-${viewport.width}.png`;
        await page.screenshot({path:file,fullPage:true});
        results.push({path,language,width:viewport.width,sections:payload.data.sections.length,pass:true});
      }
    }
    assert.deepEqual(errors,[]);
    await context.close();
  }
  console.log(JSON.stringify({checks:results.length,results},null,2));
} finally {await browser.close();}
