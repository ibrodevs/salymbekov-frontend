import { apiRequest, getDateLocale, normalizeLanguage } from '../api';

const transformNewsItem = (item, language) => {
  if (!item || !item.id) {
    return null;
  }

  let categoryId = null;
  if (item.category) {
    categoryId = typeof item.category === 'object' ? item.category.id : item.category;
  } else if (item.category_id) {
    categoryId = item.category_id;
  }

  const gallery = item.gallery || [];
  const image = item.image || gallery.find((photo) => photo?.image)?.image || null;

  return {
    id: item.id,
    title: item.title || 'Без заголовка',
    date: new Date(item.published_at || item.created_at).toLocaleDateString(getDateLocale(language), {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    category: categoryId ? categoryId.toString() : null,
    category_name: (item.category?.title || item.category?.name) || 'Без категории',
    image,
    previewImage: image,
    gallery,
    photos: item.photos || [],
    aspect_ratio: item.aspect_ratio || 'wide',
    description: item.short_description || (item.description ? `${item.description.substring(0, 200)}...` : 'Нет описания'),
    summary: item.short_description || (item.description ? `${item.description.substring(0, 200)}...` : 'Нет описания'),
    full_description: item.description || '',
    fullText: item.description || '',
    is_recommended: Boolean(item.is_recommended),
    created_at: item.published_at || item.created_at,
  };
};

// Used only for a small related-news block. Fetch one backend page instead of
// downloading every page in the database.
export const fetchNewsList = async ({ queryKey }) => {
  const [, , language] = queryKey;
  const normalizedLanguage = normalizeLanguage(language);
  const response = await apiRequest(`/presscentre/news/?lang=${normalizedLanguage}&page=1&ordering=-created_at`);
  const newsArray = response?.results || response || [];

  return newsArray
    .map((item) => transformNewsItem(item, normalizedLanguage))
    .filter(Boolean)
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
};

export const fetchNewsById = async ({ queryKey }) => {
  const [, , id, language] = queryKey;
  const normalizedLanguage = normalizeLanguage(language);
  const directResponse = await apiRequest(`/presscentre/news/${id}/?lang=${normalizedLanguage}`);

  if (!directResponse?.id) {
    throw new Error('Новость не найдена');
  }

  return transformNewsItem(directResponse, normalizedLanguage);
};

export const fetchCategories = async ({ queryKey }) => {
  const [, language] = queryKey;
  const normalizedLanguage = normalizeLanguage(language);

  try {
    const categoriesData = await apiRequest(`/presscentre/categories/?lang=${normalizedLanguage}`);
    const categoriesArray = categoriesData.results || categoriesData || [];
    const allCategoriesText = {
      ru: 'Все категории',
      kg: 'Бардык категориялар',
      en: 'All categories',
    };

    return [
      {
        id: 'all',
        name: allCategoriesText[normalizedLanguage] || 'All categories',
        title: allCategoriesText[normalizedLanguage] || 'All categories',
        color: 'gray',
      },
      ...categoriesArray.map((cat) => ({
        id: cat.id.toString(),
        name: cat.title || cat.name || 'Категория',
        title: cat.title || cat.name || 'Категория',
        color: 'blue',
      })),
    ];
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
    const allCategoriesText = {
      ru: 'Все категории',
      kg: 'Бардык категориялар',
      en: 'All categories',
    };
    return [
      {
        id: 'all',
        name: allCategoriesText[normalizedLanguage] || 'All categories',
        title: allCategoriesText[normalizedLanguage] || 'All categories',
        color: 'gray',
      },
    ];
  }
};

export const newsKeys = {
  all: ['news'],
  lists: () => [...newsKeys.all, 'list'],
  list: (language) => [...newsKeys.lists(), language],
  details: () => [...newsKeys.all, 'detail'],
  detail: (id, language) => [...newsKeys.details(), id, language],
  categories: (language) => ['categories', language],
};
