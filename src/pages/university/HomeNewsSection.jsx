import React, { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsPage, newsPageKey } from '../../services/newsService';

const NewsAndEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t, i18n } = useTranslation();
  const [failedImages, setFailedImages] = useState({});

  const queryArgs = useMemo(() => ({
    language: i18n.language,
    page: 1,
    category: 'all',
    ordering: '-created_at',
  }), [i18n.language]);

  const {
    data: firstPage,
    isLoading,
  } = useQuery({
    queryKey: newsPageKey(queryArgs),
    queryFn: () => fetchNewsPage(queryArgs),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const news = useMemo(() => (
    (firstPage?.items || []).slice(0, 3).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.excerpt || '',
      date: item.date,
      category: item.categories?.[0] || 'news',
      categoryName: item.categories?.[0] || t('news.categories.general', 'Новости'),
      image: item.image || null,
      path: `/press/news/${item.id}`,
    }))
  ), [firstPage, t]);

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-yellow-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.35 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-semibold text-blue-600">{t('news.badge')}</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            {t('news.title')}
          </h2>

          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
            {t('news.subtitle')}
          </p>
        </motion.div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
              >
                <div className="aspect-[4/3] bg-slate-200" />
                <div className="p-6">
                  <div className="mb-3 h-4 rounded bg-slate-200" />
                  <div className="mb-3 h-6 rounded bg-slate-200" />
                  <div className="mb-4 h-4 rounded bg-slate-200" />
                  <div className="h-4 w-1/2 rounded bg-slate-200" />
                </div>
              </div>
            ))
          ) : (
            news.map((newsItem, index) => (
              <article
                key={newsItem.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Link to={newsItem.path} className="block h-full hover:no-underline">
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100 p-3">
                    {newsItem.image && !failedImages[newsItem.id] ? (
                      <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        decoding="async"
                        onError={() => setFailedImages((prev) => ({ ...prev, [newsItem.id]: true }))}
                        className="h-full w-full object-contain object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-blue-50 to-cyan-50">
                        <svg className="h-16 w-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}

                    <div className="absolute left-4 top-4 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                      {newsItem.categoryName}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="mb-3 flex items-center text-sm text-slate-500">
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {newsItem.date}
                    </p>

                    <h3 className="mb-3 line-clamp-3 text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      {newsItem.title}
                    </h3>

                    {newsItem.description ? (
                      <p className="mb-4 line-clamp-3 leading-relaxed text-slate-600">
                        {newsItem.description}
                      </p>
                    ) : null}

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="inline-flex items-center gap-2 font-semibold text-blue-600">
                        {t('news.learnMore')}
                        <span aria-hidden="true">→</span>
                      </span>
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>

        <div className="text-center">
          <Link
            to="/press/news"
            className="inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl"
          >
            <span>{t('news.viewAll', 'Все новости')}</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
