import React from 'react';
import { useTranslation } from 'react-i18next';



const Videos = () => {
  const { t } = useTranslation();

  // URL для видео и изображений - замените на реальные с оригинала
  const videos = {
    heroBackground: "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-1024x683.jpg", // URL_ФОНОВОЕ_ИЗОБРАЖЕНИЕ_ВИДЕО
    mainVideos: [
      {
        id: 1,
        title: t('videos.mainVideos.video1.title'),
        videoUrl: "https://www.youtube.com/embed/F1IfnjgFVcA?si=9LnNixdPUyt-spHF", // URL_ОСНОВНОЕ_ВИДЕО_1 
       
      },
      {
        id: 2,
        title: t('videos.mainVideos.video2.title'),
        videoUrl: "https://www.youtube.com/embed/W2whiny-HTY?si=uL5KGqkUp6apwFyt", // URL_ОСНОВНОЕ_ВИДЕО_2 https://youtu.be/W2whiny-HTY?si=uL5KGqkUp6apwFyt
        
      },
      {
        id: 3,
        title: t('videos.mainVideos.video3.title'),
        videoUrl: "https://www.youtube.com/embed/8z__0RtjvWY?si=76kYPDYIcnW9yhEF", // URL_ОСНОВНОЕ_ВИДЕО_3 
     
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${videos.heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('videos.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('videos.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Основные видео */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('videos.mainVideos.title')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.mainVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <iframe 
                    src={video.videoUrl}
                    className="w-full h-64"
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                 
                  
                 
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;