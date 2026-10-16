import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';

const neutralizeBakedAnimations = (html) =>
  (html || '')
    .replace(/opacity:\s*0(?![.\d])/g, 'opacity:1')
    .replace(/scale\(\s*0(?:\.\d+)?\s*\)/g, 'scale(1)')
    .replace(/translate([XYZ]?)\(\s*-?\d+(?:\.\d+)?px\s*\)/g, 'translate$1(0px)');

const normalizeCmsHtml = (html, media = []) => {
  const primaryImage =
    media.find((item) => item?.is_hero && item?.url) ||
    media.find((item) => item?.media_type === 'image' && item?.url);

  let normalized = neutralizeBakedAnimations(html);

  if (primaryImage?.url) {
    normalized = normalized.replace(/src=(['"])\/media\/[^'"]+\1/g, `src="${primaryImage.url}"`);
  }

  return normalized;
};

const EmbeddedCmsBlock = ({ path }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent(path, i18n.language, {
    retry: false,
  });

  if (isLoading || isError || !data) {
    return null;
  }

  if (data.body) {
    return <div dangerouslySetInnerHTML={{ __html: normalizeCmsHtml(data.body, data.media) }} />;
  }

  const images = (data.media || []).filter((item) => item?.media_type === 'image' && item?.url);
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {data.title ? <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">{data.title}</h2> : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure key={image.id || image.url} className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200/70">
            <img
              src={image.url}
              alt={image.alt_text || image.title || data.title || 'CMS image'}
              loading="lazy"
              className="h-72 w-full object-cover transition duration-500 hover:scale-105"
            />
            {image.title ? <figcaption className="px-5 py-4 text-sm text-slate-600">{image.title}</figcaption> : null}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default EmbeddedCmsBlock;
