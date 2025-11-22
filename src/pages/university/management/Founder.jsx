import React from 'react';
import { useTranslation } from 'react-i18next';

const Founder = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEUAAP1kdrN7AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC")` }} // Замените на реальный URL
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('founder.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок Учредитель */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('founder.founderTitle')}
          </h2>
        </div>

        {/* Текст с изображением в левой стороне */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center">
            <img 
              src="https://cdn-1.aki.kg/st_runews/9/621649.1.1442234987.jpg" // Замените на реальный URL
              alt={t('founder.founderImageAlt')}
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t('founder.description1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('founder.description2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('founder.description3')}
              </p>
            </div>
          </div>
        </div>

        {/* Раздел Биография */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t('founder.biography.title')}
          </h3>

          {/* Основная информация */}
          <div className="space-y-3 mb-8">
            <p className="text-gray-700">
              <span className="font-semibold">{t('founder.biography.birthDate')}</span> {t('founder.biography.birthDateValue')}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">{t('founder.biography.birthPlace')}</span> {t('founder.biography.birthPlaceValue')}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">{t('founder.biography.education')}</span> {t('founder.biography.educationValue')}
            </p>
            <p className="text-gray-700">
              {t('founder.biography.educationDetails1')}
            </p>
            <p className="text-gray-700">
              {t('founder.biography.educationDetails2')}
            </p>
            <p className="text-gray-700">
              {t('founder.biography.specialty')}
            </p>
          </div>

          {/* Награды */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              {t('founder.biography.awards.title')}
            </h4>
            <div className="space-y-2">
              <p className="text-gray-700">{t('founder.biography.awards.item1')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item2')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item3')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item4')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item5')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item6')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item7')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item8')}</p>
              <p className="text-gray-700">{t('founder.biography.awards.item9')}</p>
            </div>
          </div>

          {/* Трудовая деятельность */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              {t('founder.biography.workExperience.title')}
            </h4>
            <div className="space-y-2">
              <p className="text-gray-700">{t('founder.biography.workExperience.item1')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item2')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item3')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item4')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item5')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item6')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item7')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item8')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item9')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item10')}</p>
              <p className="text-gray-700">{t('founder.biography.workExperience.item11')}</p>
            </div>
          </div>

          {/* Общественная деятельность */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              {t('founder.biography.publicActivity.title')}
            </h4>
            <div className="space-y-2">
              <p className="text-gray-700">{t('founder.biography.publicActivity.item1')}</p>
              <p className="text-gray-700">{t('founder.biography.publicActivity.item2')}</p>
              <p className="text-gray-700">{t('founder.biography.publicActivity.item3')}</p>
              <p className="text-gray-700">{t('founder.biography.publicActivity.item4')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;