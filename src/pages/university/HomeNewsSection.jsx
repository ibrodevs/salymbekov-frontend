import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchNews as fetchSalymbekovNews } from '../../services/newsService';

const NewsAndEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsArray = await fetchSalymbekovNews({ limit: 3, language: i18n.language });

        const transformedNews = newsArray.map(item => ({
          id: item.id,
          title: item.title,
          description: item.excerpt || '',
          date: item.date,
          category: item.categories?.[0] || 'news',
          categoryName: item.categories?.[0] || t('news.categories.general', 'Новости'),
          image: item.image || null,
          path: `/press/news/${item.id}`,
        }));

        setNews(transformedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [t, i18n.language]);

  const categoryColors = {
    sport: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    education: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    international: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    social: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    anniversary: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
    culture: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
    news: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-yellow-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm"
          >
            <span className="text-sm font-semibold text-blue-600">{t('news.badge')}</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
          >
            {t('news.title')}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400"
          />

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600"
          >
            {t('news.subtitle')}
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={loading ? 'loading' : 'news'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  variants={cardVariants}
                  exit="exit"
                  className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
                >
                  <div className="aspect-[4/3] bg-slate-200" />
                  <div className="p-6">
                    <div className="mb-3 h-4 rounded bg-slate-200" />
                    <div className="mb-3 h-6 rounded bg-slate-200" />
                    <div className="mb-4 h-4 rounded bg-slate-200" />
                    <div className="h-4 w-1/2 rounded bg-slate-200" />
                  </div>
                </motion.div>
              ))
            ) : (
              news.slice(0, 3).map((newsItem) => {
                const colors = categoryColors[newsItem.category] || categoryColors.news;

                return (
                  <motion.article
                    key={newsItem.id}
                    variants={cardVariants}
                    exit="exit"
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100 p-3">
                      {newsItem.image && !failedImages[newsItem.id] ? (
                        <img
                          src={newsItem.image}
                          alt={newsItem.title}
                          loading="lazy"
                          onError={() => setFailedImages(prev => ({ ...prev, [newsItem.id]: true }))}
                          className="h-full w-full object-contain object-center"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-blue-50 to-cyan-50">
                          <svg className="h-16 w-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}

                      <div className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold shadow-lg backdrop-blur-sm ${colors.bg} ${colors.text} ${colors.border}`}>
                        {newsItem.categoryName}
                      </div>
                    </div>

                    <div className="p-6">
                      <motion.p
                        className="mb-3 flex items-center text-sm text-slate-500"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {newsItem.date}
                      </motion.p>

                      <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                        {newsItem.title}
                      </h3>

                      <p className="mb-4 line-clamp-3 leading-relaxed text-slate-600">
                        {newsItem.description}
                      </p>

                      <motion.div
                        className="flex items-center justify-between border-t border-slate-100 pt-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Link
                          to={newsItem.path}
                          className="inline-flex items-center space-x-2 font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
                        >
                          <span>{t('news.learnMore')}</span>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-yellow-400 transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.article>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <Link
            to="/press/news"
            className="inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl"
          >
            <span>{t('news.viewAll', 'Все новости')}</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
