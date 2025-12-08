import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './ExtraNavigation';

const GeneralMedFive = () => {
   const { t } = useTranslation();
   const scrollContainerRef = useRef(null);

   // Import all scrolling images
   const scrollingImages = [
      'bc0b4590.jpg',
      'bc0b4594.jpg',
      'bc0b4657.jpg',
      'bc0b4673.jpg',
      'bc0b4697.jpg',
      'bc0b5004.jpg',
      'bc0b5006.jpg',
      'bc0b5012.jpg',
      'bc0b5031.jpg',
      'bc0b5048.jpg',
      'bc0b6580.jpg',
      'bc0b6617.jpg',
      'bc0b6732.jpg'
   ];

   // Auto-scroll effect
   useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      let scrollAmount = 0;
      const scrollSpeed = 20;

      const autoScroll = () => {
         scrollAmount += scrollSpeed;
         if (container.scrollHeight && scrollAmount >= container.scrollHeight / 2) {
            scrollAmount = 0;
         }
         container.scrollTop = scrollAmount;
      };

      const intervalId = setInterval(autoScroll, 30);
      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Hero Section */}
         <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
               <div
                  className="absolute inset-0 opacity-30"
                  style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
               <h1 className="text-6xl md:text-7xl font-bold mb-6">
                  {t('generalMedFive.title')}
               </h1>
               <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                  {t('generalMedFive.subtitle')}
               </p>
               <p className="text-xl text-white/80">
                  {t('generalMedFive.qualification')}
               </p>
            </div>
         </div>

         {/* Main Content with Navigation */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation */}
               <div className="lg:w-80 shrink-0">
                  <ExtraNavigation />
               </div>

               {/* Right Content */}
               <div className="flex-1">
                  {/* Introduction Section */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedFive.about.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {t('generalMedFive.about.text1')}
                     </p>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('generalMedFive.about.text2')}
                     </p>
                  </div>

                  {/* Program Info Cards */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedFive.info.title')}
                     </h3>
                     <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📅</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('generalMedFive.info.duration')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('generalMedFive.info.durationValue')}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📝</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('generalMedFive.info.admission')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('generalMedFive.info.admissionValue')}</p>
                           </div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedFive.info.code')}</p>
                           <p className="text-lg font-bold text-gray-800">560001</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedFive.info.educationLevel')}</p>
                           <p className="text-lg font-bold text-gray-800">{t('generalMedFive.info.educationLevelValue')}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedFive.info.qualification')}</p>
                           <p className="text-lg font-bold text-gray-800">{t('generalMedFive.info.qualificationValue')}</p>
                        </div>
                     </div>
                  </div>

                  {/* Program Description */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedFive.description.title')}
                     </h3>
                     <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                           {t('generalMedFive.description.text1')}
                        </p>
                        <p>
                           {t('generalMedFive.description.text2')}
                        </p>
                        <p>
                           {t('generalMedFive.description.text3')}
                        </p>
                        <p>
                           {t('generalMedFive.description.text4')}
                        </p>
                        <p>
                           {t('generalMedFive.description.text5')}
                        </p>
                        <p className="font-semibold text-[#023E8A]">
                           {t('generalMedFive.description.text6')}
                        </p>
                     </div>
                  </div>

                  {/* Program Goals */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedFive.goals.title')}
                     </h3>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('generalMedFive.goals.text')}
                     </p>
                  </div>

                  {/* Professional Activities */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedFive.activities.title')}
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        {[
                           t('generalMedFive.activities.preventive'),
                           t('generalMedFive.activities.diagnostic'),
                           t('generalMedFive.activities.therapeutic'),
                           t('generalMedFive.activities.rehabilitative'),
                           t('generalMedFive.activities.educational'),
                           t('generalMedFive.activities.organizational'),
                           t('generalMedFive.activities.research')
                        ].map((activity, index) => (
                           <div
                              key={index}
                              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
                           >
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6]"></div>
                              <p className="text-gray-800 font-medium">{activity}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Photo Gallery with Auto-Scroll */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedFive.gallery.title')}
                     </h3>
                     <div
                        ref={scrollContainerRef}
                        className="h-[600px] overflow-hidden relative"
                        style={{
                           maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                           WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
                        }}
                     >
                        <div className="space-y-6">
                           {[...scrollingImages, ...scrollingImages].map((img, index) => (
                              <div
                                 key={index}
                                 className="relative overflow-hidden rounded-2xl shadow-lg"
                              >
                                 <img
                                    src={`/src/assets/applicant/generalfive/scrolling/${img}`}
                                    alt={t('generalMedFive.gallery.alt') + ` ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                 />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GeneralMedFive;