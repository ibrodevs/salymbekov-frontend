// The backend may list media both in the rich-text body and in page.media.
// The media array is upload metadata, not a request to repeat every image
// in a gallery at the end of a page.


export const imageIdentity = (url) => {
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
  pathname = pathname.replace(/^\/(?:public|media)\//, '/');
  return pathname.replace(/\/+/g, '/').replace(/\/$/, '');
};

export const getSupplementaryCmsImages = ({
  media = [], body = '', sections = [], heroImage = '', showMediaGallery = false,
} = {}) => {
  const html = [body, ...sections.map((section) => section?.body || '')].join('\n');

  // Upload metadata never creates a gallery without an explicit editor opt-in.
  if (!showMediaGallery) return [];

  const seen = new Set();
  const seenIds = new Set();
  for (const item of (Array.isArray(media) ? media : [])) {
    if (item?.is_hero) {
      if (item.id != null) seenIds.add(String(item.id));
      const key = imageIdentity(item.url);
      if (key) seen.add(key);
    }
  }
  const heroKey = imageIdentity(heroImage);
  if (heroKey) seen.add(heroKey);

  // An explicitly requested gallery still must not repeat inline images.
  // Browser HTML parsing handles both absolute and relative CMS image URLs.
  if (typeof DOMParser !== 'undefined' && html) {
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    parsed.querySelectorAll('img, source').forEach((element) => {
      const mediaId = element.getAttribute('data-media-id');
      if (mediaId) seenIds.add(String(mediaId));
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
    if (!key || seen.has(key) || (item.id != null && seenIds.has(String(item.id)))) return false;
    if (item.id != null) seenIds.add(String(item.id));
    seen.add(key);
    return true;
  });
};
