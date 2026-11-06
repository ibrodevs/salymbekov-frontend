// The backend may list media both in the rich-text body and in page.media.
// The media array is upload metadata, not a request to repeat every image
// in a gallery at the end of a page.
const IMAGE_IN_HTML = /<\s*(?:img|picture|source)\b/i;

const imageIdentity = (url) => {
  if (!url) return '';
  let pathname;
  try {
    pathname = new URL(String(url), 'https://cms.invalid').pathname;
  } catch {
    pathname = String(url).split(/[?#]/)[0];
  }
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // Malformed URL: compare the unescaped path.
  }
  return pathname.replace(/\/+/g, '/').replace(/\/$/, '').toLowerCase();
};

export const getSupplementaryCmsImages = ({
  media = [], body = '', sections = [], heroImage = '', showMediaGallery = false,
} = {}) => {
  const html = [body, ...sections.map((section) => section?.body || '')].join('\n');

  // Inline images already form the editorial page layout. The backend often
  // exposes those exact uploads again in page.media with slightly different
  // URLs. Do not create a second automatic photo section on such pages.
  // Editors can opt into a separate gallery with data.show_media_gallery=true.
  if (IMAGE_IN_HTML.test(html) && !showMediaGallery) return [];

  const seen = new Set();
  const heroKey = imageIdentity(heroImage);
  if (heroKey) seen.add(heroKey);

  // An explicitly requested gallery still must not repeat inline images.
  // Browser HTML parsing handles both absolute and relative CMS image URLs.
  if (typeof DOMParser !== 'undefined' && html) {
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    parsed.querySelectorAll('img, source').forEach((element) => {
      ['src', 'data-src', 'srcset'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        const urls = attribute === 'srcset'
          ? value.split(',').map((entry) => entry.trim().split(/\s+/)[0])
          : [value];
        urls.forEach((url) => {
          const key = imageIdentity(url);
          if (key) seen.add(key);
        });
      });
    });
  }

  // We also avoid duplicates when page.media contains the same upload twice.
  return (Array.isArray(media) ? media : []).filter((item) => {
    if (item?.media_type !== 'image' || !item?.url || item?.is_hero) return false;
    const key = imageIdentity(item.url);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
