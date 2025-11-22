import React from 'react';
import { useTranslation } from 'react-i18next';

const President = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://salymbekov.com/wp-content/uploads/2021/03/uchrediteli.jpg")` }} // Замените на реальный URL
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('president.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Приветственный текст */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('president.greeting')}
          </h2>
        </div>

        {/* Текст с изображением в левой стороне */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center">
            <img 
              src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b3839-1024x683.jpg" // Замените на реальный URL
              alt={t('president.presidentImageAlt')}
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('president.description1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('president.description2')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('president.description3')}
              </p>
            </div>
          </div>
        </div>

        {/* Дополнительный текст */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('president.description4')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('president.description5')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('president.description6')}
            </p>
          </div>
        </div>

        {/* Подпись - строго с правой стороны */}
        <div className="max-w-4xl mx-auto text-right">
          <div className="space-y-3">
            <p className="text-gray-700 text-lg">
              {t('president.signature.respectfully')}
            </p>
            <p className="text-gray-700 text-xl font-semibold">
              {t('president.signature.position')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('president.signature.name')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;