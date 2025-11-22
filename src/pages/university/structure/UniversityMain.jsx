import React from 'react';
import { useTranslation } from 'react-i18next';


// const UniversityMain = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section с фоновым изображением */}
//       <section className="relative py-20">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(https://salymbekov.com/wp-content/uploads/2021/02/akademicheskij-sostav.jpg)` }} // URL_ФОНОВОЕ_ИЗОБРАЖЕНИЕ_СТРУКТУРА
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>
//         <div className="relative container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('university.structure.universityMain.title')}</h1>
//         </div>
//       </section>

//       {/* 3 большие картинки на весь экран */}
//       <div className="w-full">
//         {/* Первая картинка */}
//         <div className="w-full h-screen">
//           <img 
//             src="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-1.jpg" // URL_СТРУКТУРА_ИЗОБРАЖЕНИЕ_1
//             alt={t('university.structure.universityMain.image1Alt')}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Вторая картинка */}
//         <div className="w-full h-screen">
//           <img 
//             src="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-2.jpg" // URL_СТРУКТУРА_ИЗОБРАЖЕНИЕ_2
//             alt={t('university.structure.universityMain.image2Alt')}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Третья картинка */}
//         <div className="w-full h-screen">
//           <img 
//             src="/images/structure-image-3.jpg" // URL_СТРУКТУРА_ИЗОБРАЖЕНИЕ_3
//             alt={t('university.structure.universityMain.image3Alt')}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Кнопка с ссылкой на PDF файл */}
//       <div className="container mx-auto px-6 py-12 text-center">
//         <a 
//           href="/documents/university-structure.pdf" // URL_PDF_ФАЙЛА
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
//         >
//           {t('university.structure.universityMain.downloadButton')}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default UniversityMain;


const UniversityMain = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://salymbekov.com/wp-content/uploads/2021/02/akademicheskij-sostav.jpg)` }} // URL_ФОНОВОЕ_ИЗОБРАЖЕНИЕ_СТРУКТУРА
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('university.structure.universityMain.title')}</h1>
        </div>
      </section>

      {/* 3 большие картинки на весь экран */}
      <div className="w-full">
        {/* Первая картинка */}
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
          <img 
            src="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-1.jpg" // URL_СТРУКТУРА_ИЗОБРАЖЕНИЕ_1
            alt={t('university.structure.universityMain.image1Alt')}
            className="w-auto max-w-full h-auto max-h-screen object-contain"
          />
        </div>

        {/* Вторая картинка */}
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
          <img 
            src="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-2.jpg" // URL_СТРУКТУРА_ИЗОБРАЖЕНИЕ_2
            alt={t('university.structure.universityMain.image2Alt')}
            className="w-auto max-w-full h-auto max-h-screen object-contain"
          />
        </div>

        {/* Третья картинка */}
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
          <img 
            src="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-3.jpg" // URL_СТРУКТУРА_ИЗОБРАЖЕНИЕ_3
            alt={t('university.structure.universityMain.image3Alt')}
            className="w-auto max-w-full h-auto max-h-screen object-contain"
          />
        </div>
      </div>

      {/* Кнопка с ссылкой на PDF файл */}
      <div className="container mx-auto px-6 py-12 text-center">
        <a 
          href="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta.pdf" // URL_PDF_ФАЙЛА
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          {t('university.structure.universityMain.downloadButton')}
        </a>
      </div>
    </div>
  );
};

export default UniversityMain;

