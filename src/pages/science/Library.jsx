import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Library = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link to="/science/events" className="text-gray-200 hover:text-white mb-2 inline-block">
              {t('science.events.library.backLink')}
            </Link>
            <h1 className="text-5xl font-bold mb-4">{t('science.events.library.pageTitle')}</h1>
            <p className="text-xl text-gray-200">
              {t('science.events.library.pageSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-6xl mb-6">📚</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('science.events.library.title')}</h2>
          <p className="text-gray-600 text-lg mb-8">
            {t('science.events.library.underDevelopment')}
          </p>
          
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t">
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold text-gray-800 mb-2">{t('science.events.library.card1Title')}</h3>
              <p className="text-gray-600 text-sm">{t('science.events.library.card1Desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-gray-800 mb-2">{t('science.events.library.card2Title')}</h3>
              <p className="text-gray-600 text-sm">{t('science.events.library.card2Desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-800 mb-2">{t('science.events.library.card3Title')}</h3>
              <p className="text-gray-600 text-sm">{t('science.events.library.card3Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
