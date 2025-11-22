import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ITBusinessCollege = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив URL для картинок галереи
  const galleryImages = [
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2481-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2721-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2745-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2716-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2741-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2725-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2664-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2674-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2687-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2662-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2512-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2487-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-600x800.jpg"
    
  ];

  const openImageModal = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://salymbekov.com/wp-content/uploads/2022/07/bc0b2741-600x800.jpg")` }} // Замените на реальный URL
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('itBusinessCollege.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Обычный текст перед секцией с изображением */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            {t('itBusinessCollege.invitationText')}
          </p>
        </div>

        {/* Текст с изображением в левой стороне */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center">
            <img 
              src="https://salymbekov.com/wp-content/uploads/2021/01/%D0%96%D1%83%D0%BC%D0%B0%D0%B4%D0%B8%D0%BB%D0%BE%D0%B2-%D0%AD%D1%81%D0%B5%D0%BD%D0%B3%D0%B5%D0%BB%D0%B4%D0%B8-%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-1024x683.jpg" // Замените на реальный URL
              alt={t('itBusinessCollege.mainImageAlt')}
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('itBusinessCollege.description1')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('itBusinessCollege.description2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('itBusinessCollege.description3')}
              </p>
            </div>
          </div>
        </div>

        {/* Текст с номерами телефонов - строго на левом боку */}
        <div className="mb-12">
          <p className="text-gray-700 text-lg font-semibold mb-4">
            {t('itBusinessCollege.admissionText')}
          </p>
          
          <div className="space-y-3">
            <p className="text-gray-700">
              {t('itBusinessCollege.phoneNumbers.title')}
            </p>
            <p className="text-gray-700">
              {t('itBusinessCollege.phoneNumbers.whatsapp')}
            </p>
            <p className="text-gray-700">
              {t('itBusinessCollege.phoneNumbers.number1')}
            </p>
            <p className="text-gray-700">
              {t('itBusinessCollege.phoneNumbers.number2')}
            </p>
            <p className="text-gray-700">
              {t('itBusinessCollege.phoneNumbers.number3')}
            </p>
          </div>
        </div>

        {/* 21 картинок в 3 столбца с анимацией */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((imageUrl, index) => (
            <div 
              key={index}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openImageModal(index)}
            >
              <img 
                src={imageUrl}
                alt={t(`itBusinessCollege.gallery.image${index + 1}Alt`)}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно для просмотра картинки */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative">
            <button 
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={closeImageModal}
            >
              ✕
            </button>
            <img 
              src={galleryImages[selectedImage]}
              alt={t(`itBusinessCollege.gallery.image${selectedImage + 1}Alt`)}
              className="w-auto h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ITBusinessCollege;