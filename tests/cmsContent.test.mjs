import test from 'node:test';
import assert from 'node:assert/strict';
import { getDocumentTitle } from '../src/components/cms/documentTitles.js';
import { getSupplementaryCmsImages } from '../src/components/cms/cmsMedia.js';

const structureUrl = 'https://bucketeer-4222f239-dae2-4018-b0a7-a18d93b7864a.s3.amazonaws.com/public/cms/pages/documents/struktura-universiteta.pdf';

test('document URL is shown as a Russian title in Russian locale', () => {
  assert.equal(getDocumentTitle(structureUrl, structureUrl, 'ru'), 'Структура университета');
  assert.equal(getDocumentTitle('PDF', structureUrl, 'ru'), 'Структура университета');
  assert.equal(getDocumentTitle('Document', structureUrl, 'ru'), 'Структура университета');
  assert.equal(getDocumentTitle('University structure', structureUrl, 'ru'), 'Структура университета');
});

test('document labels follow the selected language', () => {
  assert.equal(getDocumentTitle('', structureUrl, 'en'), 'University structure');
  assert.equal(getDocumentTitle('', structureUrl, 'kg'), 'Университеттин түзүмү');
});

test('known romanized Russian filenames are translated, not displayed as Latin slugs', () => {
  assert.equal(
    getDocumentTitle('', 'https://example.com/licenziya-na-obrazovatelnuyu-deyatelnost.pdf', 'ru'),
    'Лицензия на образовательную деятельность',
  );
  assert.equal(getDocumentTitle('Struktura universiteta', structureUrl, 'en'), 'University structure');
});

test('respect a proper CMS title instead of the filename', () => {
  assert.equal(getDocumentTitle('Официальный устав', structureUrl, 'ru'), 'Официальный устав');
});

test('unknown romanized filenames use neutral labels instead of gibberish', () => {
  assert.equal(
    getDocumentTitle('', 'https://example.com/something-untranslated-9382.pdf', 'ru'),
    'Документ',
  );
});

const photo = (url, extra = {}) => ({ media_type: 'image', url, ...extra });

test('do not automatically repeat inline photos at bottom of CMS pages', () => {
  assert.deepEqual(getSupplementaryCmsImages({
    body: '<p>Описание</p><img src="/files/one.jpg">',
    media: [photo('https://cdn.example.com/files/one.jpg')],
  }), []);
});

test('preserve standalone media images when page has no inline images', () => {
  const url = 'https://cdn.example.com/files/one.jpg';
  assert.deepEqual(getSupplementaryCmsImages({
    body: '<p>Описание без фотографий</p>',
    media: [photo(url), photo(url + '?v=3'), photo('/files/hero.jpg', { is_hero: true })],
  }), [photo(url)]);
});

test('do not repeat the hero in an appended gallery', () => {
  const hero = 'https://cdn.example.com/files/hero.jpg';
  assert.deepEqual(getSupplementaryCmsImages({
    media: [photo(hero), photo('https://cdn.example.com/files/other.jpg')],
    heroImage: hero + '?size=800',
  }), [photo('https://cdn.example.com/files/other.jpg')]);
});
