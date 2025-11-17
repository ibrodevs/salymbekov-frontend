// NewsDetail.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

const NewsDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // В реальном приложении данные будут загружаться по ID
  const newsData = {
    1: {
      date: '25-10-2025',
      categories: ['news', 'seminar'],
      title: 'news.professor.title',
      content: 'news.professor.content',
      imageUrl: '/images/news1.jpg',
      fullImageUrl: '/images/news1-full.jpg'
    },
    2: {
      date: '23-10-2025',
      categories: ['lecture', 'news'],
      title: 'news.cybersecurity.title',
      content: 'news.cybersecurity.content',
      imageUrl: '/images/news2.jpg',
      fullImageUrl: '/images/news2-full.jpg'
    },
    3: {
      date: '20-10-2025',
      categories: ['visit', 'news'],
      title: 'news.delegation.title',
      content: 'news.delegation.content',
      imageUrl: '/images/news3.jpg',
      fullImageUrl: '/images/news3-full.jpg'
    }
  };

  const news = newsData[id];

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {t('news.notFound')}
        </h1>
        <Link 
          to="/news"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          {t('news.backToList')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Кнопка назад */}
      <Link 
        to="/news"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-300"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t('news.backToList')}
      </Link>

      {/* Заголовок */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        {t(news.title)}
      </h1>

      {/* Мета-информация */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <span className="text-gray-500 font-medium">
          {news.date}
        </span>
        <div className="flex flex-wrap gap-2">
          {news.categories.map((category, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {t(`news.categories.${category}`)}
            </span>
          ))}
        </div>
      </div>

      {/* Главное изображение */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={news.fullImageUrl || news.imageUrl} 
          alt={t(news.title)}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Контент */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {t(news.content)}
        </div>
      </div>

      {/* Дополнительные действия */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          to="/news"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('news.allNews')}
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;