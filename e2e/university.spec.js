import { test, expect } from '@playwright/test';

const titles = {
  ru: {'/education':'Программы','/education/student':'Студенту','/education/applicant':'Абитуриенту','/contact':'Контакты'},
  en: {'/education':'Programs','/education/student':'For students','/education/applicant':'For applicants','/contact':'Contacts'},
  kg: {'/education':'Программалар','/education/student':'Студенттерге','/education/applicant':'Абитуриенттерге','/contact':'Байланыш'},
};

test.beforeEach(async ({page}) => {
  await page.addInitScript(() => sessionStorage.setItem('splashAnimationShown','true'));
  await page.route('**/api/**', async route => {
    const url = new URL(route.request().url());
    if (url.pathname.endsWith('/pages/by-path/')) {
      const path=url.searchParams.get('path'), lang=url.searchParams.get('lang') || 'ru';
      await route.fulfill({json:{path,title:titles[lang]?.[path] || 'Campus',seo_title:titles[lang]?.[path],body:'<p>Salymbekov University</p>',media:[],data:{render_mode:'structured',sections:[{title:lang==='ru'?'Полезная информация':lang==='en'?'Useful information':'Пайдалуу маалымат',body:'<p><a href="/contact">Salymbekov University</a></p>'}]}}});
    } else await route.fulfill({json:{links:[]}});
  });
});

test('new pages and anonymous form fit desktop and mobile', async ({page}, testInfo) => {
  const errors=[];page.on('pageerror', e=>errors.push(e.message));
  for (const path of ['/education/student','/education/applicant','/contact']) {
    await page.goto(path);
    await expect(page.getByRole('heading',{name:titles.ru[path],exact:true})).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.locator('#anonymous-subject').fill('Предложение');
  await page.locator('#anonymous-message').fill('Сообщение без имени и email');
  let attempts=0;
  await page.route('**/api/site/anonymous-message/', async route=>{
    attempts++;
    const payload=route.request().postDataJSON();
    expect(payload.name).toBe('');expect(payload.email).toBe('');
    await route.fulfill({status:attempts===1?503:200,json:{detail:'status'}});
  });
  await page.getByRole('button',{name:'Отправить сообщение',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Не удалось');
  await page.getByRole('button',{name:'Отправить сообщение',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Обращение отправлено');
  expect(attempts).toBe(2);expect(errors).toEqual([]);
  await page.screenshot({path:`test-results/${testInfo.project.name}-contacts.png`,fullPage:true});
});

test('old postgrad routes and contacts alias redirect', async ({page})=>{
  await page.goto('/education/postgrad/phd');await expect(page).toHaveURL(/\/education$/);
  await page.goto('/contacts');await expect(page).toHaveURL(/\/contact$/);
});

test('program navigation includes new pages and campus without postgrad',async ({page},testInfo)=>{
  await page.goto('/contact');
  if(testInfo.project.name==='mobile') {
    await page.getByRole('button',{name:'Toggle menu'}).click();
    await page.getByRole('button',{name:'Программы',exact:true}).click();
  } else await page.getByRole('button',{name:'Программы',exact:true}).hover();
  await expect(page.getByRole('link',{name:'Студенту',exact:true}).first()).toBeVisible();
  await expect(page.getByRole('link',{name:'Абитуриенту',exact:true}).first()).toBeVisible();
  if (testInfo.project.name==='mobile') {
    await page.getByRole('button',{name:'Нарын кампус',exact:true}).click();
    await expect(page.locator('a[href="/education/center"]:visible')).toBeVisible();
  } else await expect(page.getByRole('link',{name:'Нарын кампус',exact:true}).first()).toBeVisible();
  expect(await page.locator('a[href^="/education/postgrad"]').count()).toBe(0);
});


test('form and new page titles switch to English and Kyrgyz',async ({page},testInfo)=>{
  await page.goto('/contact');
  for (const [code,label,title] of [['en','English','Anonymous message'],['kg','Кыргызча','Анонимдүү кайрылуу']]) {
    if(testInfo.project.name==='mobile') await page.getByRole('button',{name:'Toggle menu'}).click();
    await page.locator('button[aria-haspopup="true"]:visible').first().click();
    await page.getByRole('button',{name:new RegExp(label)}).click();
    if(testInfo.project.name==='mobile') await page.keyboard.press('Escape').catch(()=>{});
    // Closing by navigation also preserves the selected language.
    await page.locator('a[href="/education/student"]').first().evaluate(el=>el.click());
    await expect(page.getByRole('heading',{name:titles[code]['/education/student'],exact:true})).toBeVisible();
    await page.locator('a[href="/contact"]').first().evaluate(el=>el.click());
    await expect(page.getByRole('heading',{name:title,exact:true})).toBeVisible();
    expect(await page.locator('body').innerText()).not.toContain('anonymousMessage.');
  }
});

test('required fields block empty messages and pending submission blocks duplicates',async ({page})=>{
  await page.goto('/contact');
  let requests=0;
  let finish;
  const pending=new Promise(resolve=>{finish=resolve;});
  await page.route('**/api/site/anonymous-message/',async route=>{
    requests++;await pending;
    await route.fulfill({status:429,json:{detail:'Too many requests'}});
  });
  const send=page.getByRole('button',{name:'Отправить сообщение',exact:true});
  await send.click();expect(requests).toBe(0);
  await page.locator('#anonymous-subject').fill('Тема');
  await page.locator('#anonymous-message').fill('Сообщение');
  await send.click();
  await expect(page.getByRole('button',{name:'Отправка…',exact:true})).toBeDisabled();
  await page.locator('form').evaluate(form=>form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));
  finish();
  await expect(page.getByRole('status')).toContainText('Слишком много обращений');
  expect(requests).toBe(1);await expect(send).toBeEnabled();
});
