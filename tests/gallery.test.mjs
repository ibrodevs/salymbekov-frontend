import test from 'node:test';
import assert from 'node:assert/strict';
import { DOMParser } from 'linkedom';
import { getSupplementaryCmsImages } from '../src/components/cms/cmsMedia.js';
globalThis.DOMParser = DOMParser;
const image = (id,url) => ({id,url,media_type:'image'});

test('media alone does not request an automatic gallery', () => {
  assert.deepEqual(getSupplementaryCmsImages({media:[image(1,'/a.jpg')]}), []);
});
test('explicit gallery deduplicates body, sections, hero, CDN queries and media ids', () => {
  const extra = image(7,'/extra.jpg');
  assert.deepEqual(getSupplementaryCmsImages({
    showMediaGallery:true,
    body:'<img src="https://origin.org/media/inline.jpg?size=100"><source srcset="/responsive.jpg 1x, /large.jpg 2x">',
    sections:[{body:'<img data-src="/section.jpg">'}],
    heroImage:'/hero.jpg',
    media:[image(1,'https://cdn.org/public/inline.jpg?v=2'),image(2,'/section.jpg'),image(3,'/hero.jpg?q=1'),image(4,'/responsive.jpg'),image(5,'/large.jpg'),extra,image(7,'/different-url.jpg'),image(8,'https://other.org/extra.jpg?x=1')]
  }),[extra]);
});


test('media identifiers exclude inline and hero images even when paths differ', () => {
  assert.deepEqual(getSupplementaryCmsImages({
    showMediaGallery:true,
    body:'<img data-media-id="9" src="/resized-photo.jpg">',
    media:[image(9,'/original-photo.jpg'), {...image(10,'/hero.jpg'),is_hero:true}, image(10,'/hero-variant.jpg')],
  }),[]);
});
