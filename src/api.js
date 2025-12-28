// API configuration and request helper
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://salymbekov-backend-f4c797e9b169.herokuapp.com/api';

// Helper function for making API requests
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Specific API functions
export const getCategories = async (lang = 'ru') => {
  return apiRequest(`/presscentre/categories/?lang=${lang}`);
};

export const getNews = async (lang = 'ru') => {
  return apiRequest(`/presscentre/news/?lang=${lang}`);
};

export const getNewsById = async (id, lang = 'ru') => {
  return apiRequest(`/presscentre/news/${id}/?lang=${lang}`);
};