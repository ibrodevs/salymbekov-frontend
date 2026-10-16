import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';

const MATERIAL_BASE_TITLES = {
  ru: 'Материально-техническая база',
  en: 'Material and Technical Base',
  kg: 'Материалдык-техникалык база',
};

const EmbeddedCmsBlock = ({ path }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent(path, i18n.language, {
    retry: false,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = useMemo(
    () => (data?.media || []).filter((item) => item?.media_type === 'image' && item?.url),
    [data?.media],
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [path, i18n.language, images.length]);

  useEffect(() => {
    if (images.length < 2 || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [images.length, isPaused]);

  if (isLoading || isError || !data || images.length === 0) {
    return null;
  }

  const baseLanguage = `${i18n.language || 'ru'}`.toLowerCase().split('-')[0];
  const normalizedLanguage = baseLanguage === 'ky' ? 'kg' : baseLanguage;
  const sectionTitle = MATERIAL_BASE_TITLES[normalizedLanguage] || MATERIAL_BASE_TITLES.ru;

  const currentImage = images[currentIndex];
  const showPrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {sectionTitle}
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
      </div>

      <div
        className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl ring-1 ring-slate-200/70"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[clamp(300px,48vw,650px)] w-full overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImage.id || currentImage.url}
              src={currentImage.url}
              alt={currentImage.alt_text || currentImage.title || `Gallery image ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/55 sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous gallery image"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/55 sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next gallery image"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-5 left-1/2 z-20 flex max-w-[80%] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image.id || image.url}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'}`}
                    aria-label={`Go to gallery image ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            </>
          ) : null}

          <div className="absolute bottom-5 right-5 z-20 rounded-full bg-black/35 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedCmsBlock;
