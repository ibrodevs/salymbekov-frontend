// NewsList.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const { t } = useTranslation();

  // Данные новостей (в реальном приложении будут приходить из API)
  const newsData = [
    {
      id: 1,
      date: '25-10-2025',
      categories: ['news', 'seminar'],
      title: 'news.professor.title',
      excerpt: 'news.professor.excerpt',
      imageUrl: '/images/news1.jpg'
    },
    {
      id: 2,
      date: '23-10-2025',
      categories: ['lecture', 'news'],
      title: 'news.cybersecurity.title',
      excerpt: 'news.cybersecurity.excerpt',
      imageUrl: '/images/news2.jpg'
    },
    {
      id: 3,
      date: '20-10-2025',
      categories: ['visit', 'news'],
      title: 'news.delegation.title',
      excerpt: 'news.delegation.excerpt',
      imageUrl: '/images/news3.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        {t('news.title')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ news }) => {
  const { t } = useTranslation();

  return (
    <Link 
      to={`/news/${news.id}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
    >
      {/* Изображение новости */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={t(news.title)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {news.categories.map((category, index) => (
            <span 
              key={index}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-opacity-90"
            >
              {t(`news.categories.${category}`)}
            </span>
          ))}
        </div>
      </div>

      {/* Контент новости */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-500 text-sm font-medium">
            {news.date}
          </span>
          <div className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
          {t(news.title)}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {t(news.excerpt)}
        </p>
      </div>
    </Link>
  );
};

export default NewsList;