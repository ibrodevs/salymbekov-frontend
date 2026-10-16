import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { usePageContent } from '../../hooks/usePageContent';

const parseFounderBlock = (page) => {
  if (!page?.body || typeof window === 'undefined') {
    return null;
  }

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(page.body, 'text/html');
  const paragraphs = Array.from(doc.querySelectorAll('.space-y-6 p, article p, main p'))
    .map((node) => node.textContent?.trim())
    .filter(Boolean);

  return {
    badge: doc.querySelector('span.font-semibold')?.textContent?.trim() || '',
    title: doc.querySelector('h2')?.textContent?.trim() || page.title || '',
    founderName: doc.querySelector('h3')?.textContent?.trim() || '',
    founderPosition:
      doc.querySelector('h3 + p')?.textContent?.trim() ||
      doc.querySelector('.text-\\[\\#0077B6\\]')?.textContent?.trim() ||
      '',
    quote:
      doc.querySelector('.absolute.bottom-4 p')?.textContent?.trim() ||
      doc.querySelector('.italic')?.textContent?.trim() ||
      '',
    paragraphs,
    buttonLabel:
      doc.querySelector('button span')?.textContent?.trim() ||
      doc.querySelector('button')?.textContent?.trim() ||
      '',
  };
};

const HomeFounderSection = ({ path = '/founderMessege' }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent(path, i18n.language, {
    retry: false,
  });

  if (isLoading || isError || !data) {
    return null;
  }

  const parsed = parseFounderBlock(data);
  if (!parsed) {
    return null;
  }

  const image =
    data.media?.find((item) => item?.is_hero && item?.url) ||
    data.media?.find((item) => item?.media_type === 'image' && item?.url);
  const ctaUrl = data.data?.cta_url || data.links?.[0]?.url || '';
  const ctaLabel = data.data?.cta_label || parsed.buttonLabel || '';

  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {parsed.badge ? (
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] px-6 py-3 text-white shadow-lg">
              <FaQuoteLeft className="text-lg" />
              <span className="text-sm font-semibold uppercase tracking-wide">{parsed.badge}</span>
              <FaQuoteRight className="text-lg" />
            </div>
          ) : null}
          {parsed.title ? (
            <h2 className="mb-6 bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#023E8A] bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
              {parsed.title}
            </h2>
          ) : null}
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6]" />
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="group w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl">
              {image?.url ? (
                <div className="relative h-[28rem] overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.url}
                    alt={image.alt_text || parsed.founderName || parsed.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                  {parsed.quote ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">{parsed.quote}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {parsed.founderName || parsed.founderPosition ? (
                <div className="mt-6 text-center">
                  {parsed.founderName ? <h3 className="mb-2 text-xl font-bold text-gray-800">{parsed.founderName}</h3> : null}
                  {parsed.founderPosition ? <p className="text-sm font-semibold text-[#0077B6]">{parsed.founderPosition}</p> : null}
                </div>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {parsed.paragraphs.length > 0 ? (
              <div className="relative pl-8 text-lg leading-relaxed text-gray-700">
                <div className="absolute -left-4 top-0 text-4xl text-[#023E8A] opacity-20"><FaQuoteLeft /></div>
                <div className="space-y-6">
                  {parsed.paragraphs.map((paragraph, index) => (
                    <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : null}

            {ctaUrl && ctaLabel ? (
              <a
                href={ctaUrl}
                target={/^https?:\/\//i.test(ctaUrl) ? '_blank' : undefined}
                rel={/^https?:\/\//i.test(ctaUrl) ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-2xl"
              >
                <span>{ctaLabel}</span>
                <FaArrowRight className="text-lg" />
              </a>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFounderSection;
