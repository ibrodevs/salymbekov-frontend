import React from 'react';
import { useTranslation } from 'react-i18next';

const BusinessSchool = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://salymbekov.com/wp-content/uploads/2021/01/o-biznes-shkole.jpg")` }} // Замените на реальный URL
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('businessSchool.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Текст Salymbekov Business School */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            {t('businessSchool.schoolName')}
          </h2>
        </div>

        {/* Картинка на полный экран */}
        <div className="mb-12">
          <img 
            src="https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s.jpg" // Замените на реальный URL
            alt={t('businessSchool.fullScreenImageAlt')}
            className="w-full h-auto"
          />
        </div>

        {/* Текстовый контент */}
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-700 leading-relaxed">
            {t('businessSchool.description1')}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t('businessSchool.description2')}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t('businessSchool.description3')}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {t('businessSchool.mission.title')}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {t('businessSchool.mission.description1')}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t('businessSchool.mission.description2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSchool;