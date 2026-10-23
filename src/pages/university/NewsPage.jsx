import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchNewsCategories,
  fetchNewsPage,
  newsPageKey,
} from '../../services/newsService';
import { fetchNewsById, newsKeys } from '../../queries/newsQueries';

const DISPLAY_BATCH = 6;

const SORT_TO_ORDERING = {
  date_desc: '-created_at',
  date_asc: 'created_at',
  title_asc: 'title_ru',
  title_desc: '-title_ru',
};

const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const loadMoreRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortType, setSortType] = useState('date_desc');
  const [failedImages, setFailedImages] = useState({});
  const [visibleCount, setVisibleCount] = useState(DISPLAY_BATCH);

  const ordering = SORT_TO_ORDERING[sortType] || '-created_at';
  const firstPageArgs = useMemo(() => ({
    language: i18n.language,
    page: 1,
    category: activeCategory,
    ordering,
  }), [activeCategory, i18n.language, ordering]);

  const cachedHomepagePage = activeCategory === 'all' && ordering === '-created_at'
    ? queryClient.getQueryData(newsPageKey(firstPageArgs))
    : undefined;

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['salymbekov-news-feed', i18n.language, activeCategory, ordering],
    queryFn: ({ pageParam }) => fetchNewsPage({
      language: i18n.language,
      page: pageParam,
      category: activeCategory,
      ordering,
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (lastPage?.next ? pages.length + 1 : undefined),
    initialData: cachedHomepagePage
      ? { pages: [cachedHomepagePage], pageParams: [1] }
      : undefined,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const { data: categoryItems = [] } = useQuery({
    queryKey: ['salymbekov-news-categories', i18n.language],
    queryFn: () => fetchNewsCategories(i18n.language),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const categories = useMemo(() => [
    { id: 'all', name: t('news.categories.all', 'Все категории') },
    ...categoryItems,
  ], [categoryItems, t]);

  const loadedNews = useMemo(
    () => data?.pages?.flatMap((page) => page.items || []) || [],
    [data],
  );

  const visibleNews = useMemo(
    () => loadedNews.slice(0, visibleCount),
    [loadedNews, visibleCount],
  );

  const totalCount = data?.pages?.[0]?.count ?? loadedNews.length;
  const canShowMore = visibleCount < loadedNews.length || Boolean(hasNextPage);

  useEffect(() => {
    setVisibleCount(DISPLAY_BATCH);
    setFailedImages({});
  }, [activeCategory, sortType, i18n.language]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !canShowMore || isFetchingNextPage) return undefined;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0]?.isIntersecting) return;

        const desiredCount = visibleCount + DISPLAY_BATCH;

        if (desiredCount > loadedNews.length && hasNextPage) {
          await fetchNextPage();
        }

        setVisibleCount(desiredCount);
      },
      {
        root: null,
        rootMargin: '600px 0px',
        threshold: 0.01,
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [canShowMore, fetchNextPage, hasNextPage, isFetchingNextPage, loadedNews.length, visibleCount]);

  const makePreview = (item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    previewImage: item.image,
    gallery: item.gallery || [],
    description: item.excerpt || '',
    summary: item.excerpt || '',
    full_description: '',
    fullText: '',
    created_at: item.dateIso,
    category: item.categoryId,
    category_name: item.categories?.[0] || t('newsDetail.defaultCategory', 'Новости'),
  });

  const prefetchNews = (item) => {
    queryClient.prefetchQuery({
      queryKey: newsKeys.detail(item.id, i18n.language),
      queryFn: fetchNewsById,
      staleTime: 5 * 60 * 1000,
    });
  };

  const openNews = (item) => {
    navigate(`/press/news/${item.id}`, {
      state: { newsPreview: makePreview(item) },
    });
  };

  const handleCardKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openNews(item);
    }
  };

  const renderCard = (item, index) => (
    <article
      key={item.id}
      role="link"
      tabIndex={0}
      onClick={() => openNews(item)}
      onMouseEnter={() => prefetchNews(item)}
      onFocus={() => prefetchNews(item)}
      onKeyDown={(event) => handleCardKeyDown(event, item)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-100 p-3">
        {item.image && !failedImages[item.id] ? (
          <img
            src={item.image}
            alt={item.title || ''}
            loading={index < DISPLAY_BATCH ? 'eager' : 'lazy'}
            fetchPriority={index < 3 ? 'high' : 'auto'}
            decoding="async"
            onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
            className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.015]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-sm font-medium text-slate-400">
            {t('press.noImage', 'Изображение отсутствует')}
          </div>
        )}

        {item.isRecommended ? (
          <span className="absolute right-4 top-4 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 shadow-sm ring-1 ring-amber-200">
            {t('press.recommendedBadge', 'Рекомендуем')}
          </span>
        ) : null}
      </div>

      <div className="flex min-h-[250px] flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>{item.date}</span>
          {item.categories?.slice(0, 2).map((category) => (
            <span key={category} className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
              {category}
            </span>
          ))}
        </div>

        <h2 className="line-clamp-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700 md:text-2xl">
          {item.title}
        </h2>

        {item.excerpt ? (
          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">{item.excerpt}</p>
        ) : null}

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-3">
            {t('press.readMore', 'Подробнее')}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </article>
  );

  if (isLoading && loadedNews.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-[#023E8A] via-[#0353A4] to-[#0077B6] px-4 py-16 text-center text-white md:py-20">
          <h1 className="text-4xl font-bold md:text-6xl">{t('press.title', 'Новости университета')}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100 md:text-xl">
            {t('press.subtitle', 'Актуальные новости, события и достижения университета')}
          </p>
        </section>
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
          {Array.from({ length: DISPLAY_BATCH }).map((_, index) => (
            <div key={index} className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] bg-slate-200" />
              <div className="space-y-4 p-6">
                <div className="h-4 w-1/3 rounded bg-slate-200" />
                <div className="h-7 rounded bg-slate-200" />
                <div className="h-4 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (error && loadedNews.length === 0) {
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
      <section className="bg-gradient-to-br from-[#023E8A] via-[#0353A4] to-[#0077B6] px-4 py-16 text-center text-white md:py-20">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="text-4xl font-bold md:text-6xl">
          {t('press.title', 'Новости университета')}
        </motion.h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100 md:text-xl">
          {t('press.subtitle', 'Актуальные новости, события и достижения университета')}
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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

        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              {t('press.latest', 'Последние публикации')}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {t('press.allNews', 'Все новости')}
            </h2>
          </div>
          <span className="text-sm text-slate-500">
            {Math.min(visibleNews.length, totalCount)} / {totalCount}
          </span>
        </div>

        {visibleNews.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleNews.map((item, index) => renderCard(item, index))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
            {t('press.empty', 'Новостей в этой категории пока нет.')}
          </div>
        )}

        {canShowMore ? (
          <div ref={loadMoreRef} className="flex min-h-28 items-center justify-center py-8" aria-live="polite">
            {isFetchingNextPage ? (
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                {t('press.loadingMore', 'Загружаем следующие новости...')}
              </div>
            ) : null}
          </div>
        ) : visibleNews.length > DISPLAY_BATCH ? (
          <p className="py-10 text-center text-sm font-medium text-slate-400">
            {t('press.allLoaded', 'Все новости загружены')}
          </p>
        ) : null}
      </div>
    </main>
  );
};

export default NewsPage;
