import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload, FaEye, FaFilePdf, FaUniversity } from 'react-icons/fa';
import LEGACY_HEROES from './legacyHeroes';
import { cmsLanguage, localizeCmsHtml, localizeCmsText } from './cmsLocaleBridge';

// Renders CMS text pages using the original visual language while keeping all
// content sourced from the backend CMS. Localized display text is resolved only
// in the browser and never writes back to the backend.

const FILE_EXT = /\.(pdf|docx?|xlsx?|pptx?|zip|rar)(?:$|[?#])/i;
const SCAN = /(licenz|license|sertifik|svidetel|prikaz|-pdf\.)/i;
const BORDER_COLORS = ['border-[#023E8A]', 'border-[#0077B6]', 'border-[#0096C7]'];
const GENERIC_LINK_TEXT = /^(pdf|открыть документ|скачать|просмотреть)$/i;

const UI = {
  ru: { view: 'Просмотреть', download: 'Скачать', documents: 'Документы', links: 'Разделы' },
  en: { view: 'View', download: 'Download', documents: 'Documents', links: 'Sections' },
  kg: { view: 'Көрүү', download: 'Жүктөп алуу', documents: 'Документтер', links: 'Бөлүмдөр' },
};

const BLOBS = [
  [63, 48, 19, 88], [110, 54, 75, 51], [80, 55, 56, 63], [105, 60, 62, 40], [109, 91, 43, 20],
  [66, 91, 90, 1], [111, 93, 28, 84], [71, 101, 64, 67], [87, 111, 9, 0], [102, 102, 19, 1],
];

const textOf = (node) => (node?.textContent || '').replace(/\s+/g, ' ').trim();
const isFileLink = (a) => FILE_EXT.test(a.getAttribute('href') || '');
const onlyImages = (node) => node.querySelectorAll('img').length > 0 && !textOf(node);

const onlyFileLinks = (node) => {
  const links = [...node.querySelectorAll('a')];
  if (!links.length || !links.every(isFileLink)) return false;
  const clone = node.cloneNode(true);
  clone.querySelectorAll('a').forEach((a) => a.remove());
  return textOf(clone).replace(/[–—\-:|,.]/g, '').trim() === '';
};

const toDocs = (node, fallbackTitle) =>
  [...node.querySelectorAll('a')].map((a) => {
    const label = textOf(a);
    return {
      url: a.getAttribute('href'),
      title: label && !GENERIC_LINK_TEXT.test(label) ? label : fallbackTitle || label || 'Документ',
    };
  });

const parseBody = (html) => {
  if (!html || typeof DOMParser === 'undefined') return [];
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  const root = doc.body.firstElementChild;
  const sections = [{ title: '', blocks: [] }];
  let lastHeading = '';
  let pendingText = [];

  const current = () => sections[sections.length - 1];
  const push = (block) => {
    const blocks = current().blocks;
    const prev = blocks[blocks.length - 1];
    if (block.type === 'gallery' && prev?.type === 'gallery') {
      prev.images.push(...block.images);
    } else if (block.type === 'docs' && prev?.type === 'docs') {
      prev.items.push(...block.items);
    } else {
      blocks.push(block);
    }
  };

  const flushText = () => {
    const htmlValue = pendingText.join(' ').trim();
    if (htmlValue && textOf(doc.createRange().createContextualFragment(htmlValue))) {
      push({ type: 'text', html: htmlValue });
    }
    pendingText = [];
  };

  [...root.childNodes].forEach((node) => {
    if (node.nodeType === 3) {
      if (node.textContent.trim()) pendingText.push(node.textContent);
      return;
    }
    if (node.nodeType !== 1) return;
    const tag = node.tagName.toLowerCase();

    if (['a', 'strong', 'b', 'em', 'i', 'span', 'br', 'sup', 'sub', 'u'].includes(tag)) {
      if (tag === 'a' && isFileLink(node)) {
        flushText();
        push({ type: 'docs', items: toDocs(wrap(doc, node), lastHeading) });
      } else {
        pendingText.push(node.outerHTML);
      }
      return;
    }

    if (tag === 'img') {
      flushText();
      push({ type: 'gallery', images: [{ src: node.getAttribute('src'), alt: node.getAttribute('alt') || '' }] });
      return;
    }

    flushText();

    if (tag === 'h1' || tag === 'h2') {
      lastHeading = textOf(node);
      sections.push({ title: lastHeading, blocks: [] });
      return;
    }

    if (/^h[3-6]$/.test(tag)) {
      lastHeading = textOf(node);
      if (lastHeading) push({ type: 'heading', text: lastHeading });
      return;
    }

    if (tag === 'hr') return;

    if (tag === 'ul' || tag === 'ol') {
      const lis = [...node.children].filter((li) => textOf(li) || li.querySelector('img'));
      const navLinks = lis.map((li) => li.querySelector('a[href^="/"]')).filter(Boolean);
      if (lis.length && navLinks.length === lis.length && lis.every((li) => textOf(li) === textOf(li.querySelector('a')))) {
        push({ type: 'navlinks', items: navLinks.map((a) => ({ url: a.getAttribute('href'), title: textOf(a) })) });
      } else if (lis.length) {
        push({ type: 'list', items: lis.map((li) => li.innerHTML) });
      }
      return;
    }

    if (tag === 'table') {
      push({ type: 'table', html: node.outerHTML });
      return;
    }

    if (onlyImages(node)) {
      push({
        type: 'gallery',
        images: [...node.querySelectorAll('img')].map((img) => ({
          src: img.getAttribute('src'),
          alt: img.getAttribute('alt') || '',
        })),
      });
      return;
    }

    if (onlyFileLinks(node)) {
      push({ type: 'docs', items: toDocs(node, lastHeading) });
      return;
    }

    const img = node.querySelector('img');
    if (img && textOf(node)) {
      const clone = node.cloneNode(true);
      clone.querySelectorAll('img').forEach((el) => el.remove());
      push({ type: 'person', src: img.getAttribute('src'), alt: img.getAttribute('alt') || '', html: clone.innerHTML });
      return;
    }

    if (textOf(node)) push({ type: 'text', html: node.innerHTML, long: textOf(node).length > 90 });
  });

  flushText();

  sections.forEach((section) => {
    section.blocks.forEach((block, index) => {
      const prev = section.blocks[index - 1];
      if (block.type === 'docs' && prev?.type === 'text' && !prev.long) {
        block.items.forEach((item) => {
          if (GENERIC_LINK_TEXT.test(item.title)) {
            item.title = textOf(doc.createRange().createContextualFragment(prev.html));
          }
        });
      }
    });
  });

  sections.forEach((section) => {
    section.blocks = section.blocks.filter((block, index) => {
      const next = section.blocks[index + 1];
      return !(block.type === 'heading' && next?.type === 'docs' && next.items.every((item) => item.title === block.text));
    });
  });

  const result = [];
  let eyebrow = '';
  sections.forEach((section) => {
    if (!section.blocks.length) {
      eyebrow = section.title;
      return;
    }
    result.push({ ...section, eyebrow });
    eyebrow = '';
  });

  return result;
};

function wrap(doc, node) {
  const holder = doc.createElement('p');
  holder.appendChild(node.cloneNode(true));
  return holder;
}

const Rich = ({ html, className = '' }) => (
  <div
    className={`[&_a]:text-[#0077B6] [&_a]:underline [&_a]:break-words [&_strong]:text-gray-900 ${className}`}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

const DocCard = ({ item, ui, reduceMotion }) => (
  <motion.div
    whileHover={reduceMotion ? undefined : { y: -4, scale: 1.005 }}
    transition={{ duration: 0.25 }}
    className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white flex items-center justify-center shadow-md">
          <FaFilePdf className="text-2xl" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-800 break-words">{item.title}</h3>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 lg:w-auto">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <FaEye />
          {ui.view}
        </a>
        <a
          href={item.url}
          download
          className="bg-gray-100 text-gray-600 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <FaDownload />
          {ui.download}
        </a>
      </div>
    </div>
  </motion.div>
);

const Block = ({ block, index, ui, reduceMotion }) => {
  switch (block.type) {
    case 'heading':
      return <h3 className="text-2xl md:text-3xl font-bold text-gray-800 pt-2">{block.text}</h3>;

    case 'text':
      return block.long ? (
        <Rich
          html={block.html}
          className={`text-lg leading-relaxed text-gray-800 bg-blue-50/80 rounded-2xl p-6 border-l-4 ${BORDER_COLORS[index % BORDER_COLORS.length]} shadow-sm`}
        />
      ) : (
        <Rich html={block.html} className="text-lg leading-relaxed text-gray-700" />
      );

    case 'list':
      return (
        <div className={`grid gap-4 ${block.items.length > 3 ? 'md:grid-cols-2' : ''}`}>
          {block.items.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              whileHover={reduceMotion ? undefined : { x: 4, y: -2 }}
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-7 h-7 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0 shadow-sm">
                {itemIndex + 1}
              </div>
              <Rich html={item} className="text-gray-700 leading-relaxed min-w-0" />
            </motion.div>
          ))}
        </div>
      );

    case 'navlinks':
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {block.items.map((item) => (
            <motion.div key={item.url} whileHover={reduceMotion ? undefined : { y: -5 }}>
              <Link
                to={item.url}
                className="group bg-white rounded-3xl shadow-lg border border-gray-200 p-6 flex items-center justify-between gap-4 hover:shadow-2xl hover:border-[#0077B6] transition-all duration-300 h-full"
              >
                <span className="text-xl font-bold text-gray-800">{item.title}</span>
                <FaArrowRight className="text-[#0077B6] group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      );

    case 'person':
      return (
        <motion.div
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 w-full overflow-hidden rounded-2xl">
              <img
                src={block.src}
                alt={block.alt}
                className="w-full h-auto rounded-2xl shadow-md object-cover hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <Rich html={block.html} className="md:w-2/3 text-lg text-gray-700 leading-relaxed space-y-3" />
          </div>
        </motion.div>
      );

    case 'gallery':
      if (block.images.length === 1) {
        return (
          <motion.a
            href={block.images[0].src}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            className="block overflow-hidden rounded-2xl shadow-md bg-white"
          >
            <img
              src={block.images[0].src}
              alt={block.images[0].alt}
              className="w-full max-h-[720px] object-contain"
              loading="lazy"
            />
          </motion.a>
        );
      }

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {block.images.map((image, imageIndex) => (
            <motion.a
              key={imageIndex}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="block overflow-hidden rounded-2xl shadow-md hover:shadow-xl group bg-white"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${SCAN.test(image.src) ? 'h-[480px] object-contain bg-white' : 'h-64 object-cover group-hover:scale-105'} transition-transform duration-500`}
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      );

    case 'docs':
      return (
        <div className="grid gap-4">
          {block.items.map((item, itemIndex) => (
            <DocCard key={`${item.url}-${itemIndex}`} item={item} ui={ui} reduceMotion={reduceMotion} />
          ))}
        </div>
      );

    case 'table':
      return (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm [&_td]:border [&_td]:border-gray-200 [&_td]:p-3 [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:bg-blue-50 [&_table]:w-full [&_tr:nth-child(even)]:bg-gray-50">
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      );

    default:
      return null;
  }
};

const LegacyStyledPage = ({ pageContent, language, sanitize }) => {
  const reduceMotion = useReducedMotion();
  const lang = cmsLanguage(language);
  const ui = UI[lang];
  const hero = LEGACY_HEROES[pageContent?.path] || {};
  const body = pageContent?.body || '';
  const localizedBody = useMemo(
    () => localizeCmsHtml(sanitize(body), lang),
    [body, lang, sanitize]
  );
  const title = localizeCmsText(pageContent?.title || '', lang);
  const badge = hero.badge?.[lang] || hero.badge?.ru || '';
  const subtitle = hero.subtitle?.[lang]
    || (lang === 'ru' ? hero.subtitle?.ru : '')
    || localizeCmsText(pageContent?.subtitle || '', lang)
    || hero.subtitle?.ru
    || '';
  const sections = useMemo(() => parseBody(localizedBody), [localizedBody]);

  const data = pageContent?.data || {};
  const extraDocs = (Array.isArray(data.documents) ? data.documents : [])
    .filter((item) => item?.url && !body.includes(item.url))
    .map((item) => ({ ...item, title: localizeCmsText(item.title || '', lang) }));
  const extraLinks = (Array.isArray(data.links) ? data.links : [])
    .map((item) => ({ ...item, title: localizeCmsText(item.title || '', lang) }));
  const extraImages = (Array.isArray(pageContent?.media) ? pageContent.media : [])
    .filter((item) => item?.media_type === 'image' && item?.url && !body.includes(item.url))
    .map((item) => ({
      ...item,
      title: localizeCmsText(item.title || '', lang),
      alt_text: localizeCmsText(item.alt_text || '', lang),
    }));

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 38 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
      };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {BLOBS.map(([w, h, left, top], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: w,
              height: h,
              left: `${left}%`,
              top: `${top}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)',
            }}
            initial={{ opacity: 0.035 }}
            animate={reduceMotion ? { opacity: 0.05 } : {
              y: [0, -(18 + (index % 4) * 7), 0],
              x: [0, (index % 2 === 0 ? 8 : -8), 0],
              opacity: [0.03, 0.085, 0.03],
              scale: [1, 1.08 + (index % 3) * 0.03, 1],
            }}
            transition={reduceMotion ? undefined : {
              duration: 8 + (index % 5) * 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.16,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <section className="relative py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 45 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center"
            >
              {badge ? (
                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, scale: 0.82 }}
                  animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6 shadow-lg shadow-blue-900/10"
                >
                  <FaUniversity />
                  <span className="font-semibold">{badge}</span>
                </motion.div>
              ) : null}

              <h1
                className={`${title.length > 45 ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl lg:text-7xl'} font-bold mb-6 bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] bg-clip-text text-transparent leading-tight break-words`}
              >
                {title}
              </h1>

              {subtitle ? (
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{subtitle}</p>
              ) : null}
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  {...reveal}
                  transition={{ duration: 0.55, delay: Math.min(sectionIndex * 0.04, 0.2), ease: 'easeOut' }}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200 p-6 md:p-8 transition-shadow duration-300"
                >
                  {section.eyebrow ? (
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-[#023E8A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {section.eyebrow}
                    </div>
                  ) : null}

                  {section.title && section.title !== title ? (
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                      {section.title}
                    </h2>
                  ) : null}

                  <div className="space-y-6">
                    {section.blocks.map((block, blockIndex) => (
                      <Block
                        key={blockIndex}
                        block={block}
                        index={blockIndex}
                        ui={ui}
                        reduceMotion={reduceMotion}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}

              {extraLinks.length > 0 ? (
                <motion.div {...reveal} transition={{ duration: 0.55 }} className="grid md:grid-cols-2 gap-6">
                  {extraLinks.map((item, index) => {
                    const internal = item.external === false || String(item.url || '').startsWith('/');
                    const className =
                      'group bg-white rounded-3xl shadow-lg border border-gray-200 p-6 flex items-center justify-between gap-4 hover:shadow-2xl hover:border-[#0077B6] hover:-translate-y-1 transition-all duration-300';
                    const content = (
                      <>
                        <span className="text-xl font-bold text-gray-800">{item.title || item.url}</span>
                        <FaArrowRight className="text-[#0077B6] group-hover:translate-x-1 transition-transform" />
                      </>
                    );
                    return internal ? (
                      <Link key={index} to={item.url} className={className}>{content}</Link>
                    ) : (
                      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
                    );
                  })}
                </motion.div>
              ) : null}

              {extraDocs.length > 0 ? (
                <motion.div
                  {...reveal}
                  transition={{ duration: 0.55 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                    {ui.documents}
                  </h2>
                  <div className="grid gap-4">
                    {extraDocs.map((item, index) => (
                      <DocCard
                        key={index}
                        item={{ url: item.url, title: item.title || item.url }}
                        ui={ui}
                        reduceMotion={reduceMotion}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null}

              {extraImages.length > 0 ? (
                <motion.div {...reveal} transition={{ duration: 0.55 }}>
                  <Block
                    block={{
                      type: 'gallery',
                      images: extraImages.map((item) => ({
                        src: item.url,
                        alt: item.alt_text || item.title || '',
                      })),
                    }}
                    index={0}
                    ui={ui}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegacyStyledPage;
