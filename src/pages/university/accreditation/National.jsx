import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Accreditation = () => {
  const { t } = useTranslation();
  const [showCertificate, setShowCertificate] = useState(false);

  const handleShowCertificate = () => {
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://coolbackgrounds.imgix.net/1ImfDgm1Ze4X2YS2CRiQxN/a426817af36443afa06274e55836b3e3/pure-blue-background-0000ff.jpg?w=3840&q=60&auto=format,compress")` }} // Замените на реальный URL
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('accreditation.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Основной текст с темным и большим шрифтом */}
          <div className="mb-8">
            <p className="text-gray-900 text-2xl md:text-3xl font-bold leading-relaxed">
              {t('accreditation.mainText')}
            </p>
          </div>

          {/* Дополнительный текст с обычным шрифтом */}
          <div className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('accreditation.description')}
            </p>
          </div>

          {/* Кнопка Сертификат */}
          <div className="text-center">
            <button
              onClick={handleShowCertificate}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              {t('accreditation.certificateButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно с сертификатом */}
      {showCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseCertificate}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={handleCloseCertificate}
            >
              ✕
            </button>
            <img 
              src="https://salymbekov.com/wp-content/uploads/2023/04/institucionalnaja-akkreditacija_page-0003.jpg" // Замените на реальный URL
              alt={t('accreditation.certificateAlt')}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accreditation;