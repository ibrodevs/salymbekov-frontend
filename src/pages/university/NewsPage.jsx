import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchNews as fetchSalymbekovNews, getNewsCategories } from '../../services/newsService';

const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortType, setSortType] = useState('date_desc');
  const [failedImages, setFailedImages] = useState({});

  const {
    data: newsData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['salymbekov-news', 'all', i18n.language],
    queryFn: () => fetchSalymbekovNews({ language: i18n.language }),
    staleTime: 5 * 60 * 1000,
  });

  const categories = useMemo(() => [
    { id: 'all', name: t('news.categories.all', 'Все категории') },
    ...getNewsCategories(newsData).map((category) => ({ id: category, name: category })),
  ], [newsData, t]);

  const filteredNews = useMemo(() => {
    const filtered = activeCategory === 'all'
      ? newsData
      : newsData.filter((item) => item.categories?.includes(activeCategory));

    return [...filtered].sort((a, b) => {
      if (sortType === 'date_asc') return new Date(a.dateIso || 0) - new Date(b.dateIso || 0);
      if (sortType === 'title_asc') return (a.title || '').localeCompare(b.title || '');
      if (sortType === 'title_desc') return (b.title || '').localeCompare(a.title || '');
      return new Date(b.dateIso || 0) - new Date(a.dateIso || 0);
    });
  }, [activeCategory, newsData, sortType]);

  const recommendedNews = filteredNews.filter((item) => item.isRecommended);
  const regularNews = filteredNews.filter((item) => !item.isRecommended);

  const openNews = (id) => navigate(`/press/news/${id}`);

  const renderCard = (item, featured = false) => (
    <article
      key={item.id}
      className={`overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${featured ? 'md:grid md:grid-cols-2' : ''}`}
    >
      <div className={`${featured ? 'min-h-72' : 'aspect-[16/9]'} flex items-center justify-center bg-slate-100`}>
        {item.image && !failedImages[item.id] ? (
          <img
            src={item.image}
            alt={item.title || ''}
            loading="lazy"
            onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <div className="flex h-full min-h-48 w-full items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 text-sm font-medium text-slate-400">
            {t('press.noImage', 'Изображение отсутствует')}
          </div>
        )}
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>{item.date}</span>
          {item.categories?.map((category) => (
            <span key={category} className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
              {category}
            </span>
          ))}
        </div>
        <h2 className={`${featured ? 'text-3xl' : 'text-2xl'} font-bold leading-tight text-slate-900`}>
          {item.title}
        </h2>
        {item.excerpt ? <p className="mt-4 line-clamp-4 leading-7 text-slate-600">{item.excerpt}</p> : null}
        <button
          type="button"
          onClick={() => openNews(item.id)}
          className="mt-6 self-start rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-3 font-semibold text-white transition hover:shadow-lg"
        >
          {t('press.readMore', 'Подробнее')}
        </button>
      </div>
    </article>
  );

  if (isLoading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="text-lg font-medium text-blue-700">{t('press.loading', 'Загрузка новостей...')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[600px] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-slate-900">{t('press.error.title', 'Ошибка загрузки')}</h2>
          <p className="mt-3 text-slate-600">{t('press.error.loading', 'Не удалось загрузить новости')}</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white">
            {t('press.error.retry', 'Попробовать снова')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-[#023E8A] via-[#0353A4] to-[#0077B6] px-4 py-20 text-center text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
          {t('press.title', 'Новости университета')}
        </motion.h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100 md:text-xl">
          {t('press.subtitle', 'Актуальные новости, события и достижения университета')}
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category.id ? 'bg-blue-700 text-white' : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300'}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <select
            value={sortType}
            onChange={(event) => setSortType(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="date_desc">{t('press.sort.newest', 'Сначала новые')}</option>
            <option value="date_asc">{t('press.sort.oldest', 'Сначала старые')}</option>
            <option value="title_asc">A → Z</option>
            <option value="title_desc">Z → A</option>
          </select>
        </div>

        {recommendedNews.length > 0 ? (
          <section className="mb-14">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-900">{t('press.recommended', 'Рекомендованные новости')}</h2>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">{recommendedNews.length}</span>
            </div>
            <div className="space-y-6">
              {recommendedNews.map((item) => renderCard(item, true))}
            </div>
          </section>
        ) : null}

        <section>
          <h2 className="mb-6 text-3xl font-bold text-slate-900">{t('press.allNews', 'Все новости')}</h2>
          {regularNews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {regularNews.map((item) => renderCard(item))}
            </div>
          ) : recommendedNews.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
              {t('press.empty', 'Новостей в этой категории пока нет.')}
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
};

export default NewsPage;
