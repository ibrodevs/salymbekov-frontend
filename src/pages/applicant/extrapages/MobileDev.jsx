import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SoftwareNavigation from './SoftwareNavigation';

const MobileDev = () => {
   const { t } = useTranslation();

   const scrollingImages = [
      'bc0b2476.jpg',
      'bc0b2481.jpg',
      'bc0b2487.jpg',
      'bc0b2512.jpg',
      'bc0b2562.jpg',
      'bc0b2574.jpg',
      'bc0b2577.jpg',
      'bc0b2662.jpg',
      'bc0b2664.jpg',
      'bc0b2674.jpg',
      'bc0b2687.jpg',
      'bc0b2694.jpg',
      'bc0b2716.jpg',
      'bc0b2721.jpg',
      'bc0b2725.jpg',
      'bc0b2727.jpg',
      'bc0b2736.jpg',
      'bc0b2741.jpg',
      'bc0b2743.jpg',
      'bc0b2745.jpg',
      'photo_2022-07-18_15-21-07.jpg'
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            duration: 0.3,
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { y: 15, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.3,
            ease: "easeOut"
         }
      }
   };

   const cardVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.4,
            ease: "easeOut"
         }
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Hero Section */}
         <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
               <div
                  className="absolute inset-0 opacity-30"
                  style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
               >
                  {t('mobileDev.title')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
               >
                  {t('mobileDev.subtitle')}
               </motion.p>
            </div>
         </div>

         {/* Main Content with Navigation */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation */}
               <div className="lg:w-80 shrink-0">
                  <SoftwareNavigation />
               </div>

               {/* Right Content */}
               <motion.div
                  className="flex-1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
               >
                  {/* Overview Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={itemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('mobileDev.overview.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('mobileDev.overview.content')}
                     </p>
                  </motion.div>

                  {/* Scrolling Images Gallery */}
                  <motion.div
                     className="mb-8"
                     variants={itemVariants}
                  >
                     <div className="bg-white rounded-3xl shadow-2xl p-6 overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                           {scrollingImages.map((image, index) => (
                              <motion.div
                                 key={image}
                                 className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
                                 variants={itemVariants}
                                 whileHover={{ scale: 1.03 }}
                                 transition={{ duration: 0.2 }}
                              >
                                 <img
                                    src={`/src/assets/applicant/mobiledev/scrolling/${image}`}
                                    alt={t('mobileDev.galleryAlt', 'Gallery image') + ` ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                       e.target.style.display = 'none';
                                    }}
                                 />
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </motion.div>

                  {/* Program Goals Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={itemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('mobileDev.goals.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {t('mobileDev.goals.intro')}
                     </p>
                     <ul className="space-y-3 text-lg text-gray-700">
                        {[1, 2, 3, 4, 5, 6, 7].map((point) => (
                           <motion.li
                              key={point}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: point * 0.05 }}
                           >
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full mt-2 mr-3"></span>
                              <span>{t(`mobileDev.goals.point${point}`)}</span>
                           </motion.li>
                        ))}
                     </ul>
                  </motion.div>

                  {/* Career Opportunities Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={itemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('mobileDev.career.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {t('mobileDev.career.intro')}
                     </p>
                     <ul className="space-y-3 text-lg text-gray-700">
                        {[1, 2, 3, 4].map((option) => (
                           <motion.li
                              key={option}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: option * 0.05 }}
                           >
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full mt-2 mr-3"></span>
                              <span>{t(`mobileDev.career.option${option}`)}</span>
                           </motion.li>
                        ))}
                     </ul>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default MobileDev;