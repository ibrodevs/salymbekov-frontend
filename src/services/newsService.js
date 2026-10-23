import { apiRequest, getDateLocale, normalizeLanguage } from '../api';

const formatDate = (dateString, language) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(getDateLocale(language), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getNewsImage = (item) => (
  item.image || item.gallery?.find((photo) => photo?.image)?.image || null
);

export const transformNewsItem = (item, language) => {
  const gallery = item.gallery || [];
  const categoryId = typeof item.category === 'object'
    ? item.category?.id
    : (item.category || item.category_id || null);
  const categoryName = typeof item.category === 'object'
    ? (item.category?.title || item.category?.name || '')
    : '';

  return {
    id: item.id,
    title: item.title,
    excerpt: item.short_description || '',
    date: formatDate(item.published_at || item.created_at, language),
    dateIso: item.published_at || item.created_at,
    categories: categoryName ? [categoryName] : [],
    categoryId: categoryId ? String(categoryId) : null,
    image: getNewsImage(item),
    gallery,
    sourceUrl: item.source_url || '',
    isRecommended: Boolean(item.is_recommended),
  };
};

const buildNewsUrl = ({ language = 'ru', page = 1, category = 'all', ordering = '-created_at' } = {}) => {
  const params = new URLSearchParams({
    lang: normalizeLanguage(language),
    page: String(page),
    ordering,
  });

  if (category && category !== 'all') {
    params.set('category', String(category));
  }

  return `/presscentre/news/?${params.toString()}`;
};

export const newsPageKey = ({
  language = 'ru',
  page = 1,
  category = 'all',
  ordering = '-created_at',
} = {}) => [
  'salymbekov-news-page',
  normalizeLanguage(language),
  String(category || 'all'),
  ordering,
  Number(page),
];

export const fetchNewsPage = async ({
  language = 'ru',
  page = 1,
  category = 'all',
  ordering = '-created_at',
} = {}) => {
  const response = await apiRequest(buildNewsUrl({ language, page, category, ordering }));
  const rawItems = Array.isArray(response?.results)
    ? response.results
    : Array.isArray(response)
      ? response
      : [];

  const items = rawItems
    .map((item) => transformNewsItem(item, language))
    .filter((item) => item?.id);

  return {
    items,
    count: Number(response?.count ?? items.length),
    next: response?.next || null,
    previous: response?.previous || null,
    page,
  };
};

// Fast helper for homepage: fetches only the first API page instead of walking
// through every page and slicing afterwards.
export const fetchNews = async ({ limit = 10, language = 'ru' } = {}) => {
  const firstPage = await fetchNewsPage({
    language,
    page: 1,
    ordering: '-created_at',
  });

  return firstPage.items.slice(0, limit);
};

export const fetchNewsCategories = async (language = 'ru') => {
  const response = await apiRequest(`/presscentre/categories/?lang=${normalizeLanguage(language)}&ordering=id`);
  const rawItems = Array.isArray(response?.results)
    ? response.results
    : Array.isArray(response)
      ? response
      : [];

  return rawItems.map((category) => ({
    id: String(category.id),
    name: category.title || category.name || '',
  })).filter((category) => category.id && category.name);
};

export const getNewsCategories = (items = []) => {
  const uniqueCategories = new Set();
  items.forEach((item) => {
    (item.categories || []).forEach((category) => {
      if (category) uniqueCategories.add(category);
    });
  });
  return Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b));
};
