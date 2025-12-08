import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './ExtraNavigation';
import { FiFileText, FiUser, FiGlobe, FiCheckCircle } from 'react-icons/fi';

const RequiredDoc = () => {
   const { t } = useTranslation();

   const animatedBalls = useMemo(() => {
      return [...Array(25)].map((_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 2 + Math.random() * 2, // Уменьшена длительность
         delay: Math.random() * 0.5 // Уменьшена задержка
      }));
   }, []);

   const floatingBubbles = useMemo(() => {
      return [...Array(15)].map((_, i) => ({
         id: i,
         size: Math.random() * 80 + 40,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 3 + Math.random() * 2, // Уменьшена длительность
         delay: Math.random() * 1.5 // Уменьшена задержка
      }));
   }, []);

   const smallBubbles = useMemo(() => {
      return [...Array(30)].map((_, i) => ({
         id: i,
         size: Math.random() * 25 + 15,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 1.5 + Math.random() * 1, // Уменьшена длительность
         delay: Math.random() * 0.5 // Уменьшена задержка
      }));
   }, []);

   const documentsKR = [
      t('requiredDoc.documentsKR.document1', 'Заявление на имя ректора Учреждения «Салымбеков Университет» (образец)'),
      t('requiredDoc.documentsKR.document2', 'Оригинал сертификата ОРТ'),
      t('requiredDoc.documentsKR.document3', 'Документ государственного образца о среднем общем или среднем профессиональном образовании (аттестат или диплом)'),
      t('requiredDoc.documentsKR.document4', 'Копия паспорта'),
      t('requiredDoc.documentsKR.document5', '2 фото (4×6 см), 4 фото (3×4 см)'),
      t('requiredDoc.documentsKR.document6', 'Медицинская справка 086-У'),
      t('requiredDoc.documentsKR.document7', 'Военный билет или приписное свидетельство')
   ];

   const documentsForeign = [
      t('requiredDoc.documentsForeign.document1', 'Заявление на имя ректора Учреждения «Салымбеков Университет» (образец)'),
      t('requiredDoc.documentsForeign.document2', 'Паспорт с въездной визой, соответствующей требованиям законодательства КР и его копию'),
      t('requiredDoc.documentsForeign.document3', 'Оригинал документа о полном среднем образовании с указанием изучаемых предметов и оценок (баллов) и нотариально заверенную копию'),
      t('requiredDoc.documentsForeign.document4', 'Нотариально заверенный перевод документа о полном среднем образовании на официальный язык КР'),
      t('requiredDoc.documentsForeign.document5', 'Справку из Министерства Образования и Науки КР об эквивалентности полного среднего образования'),
      t('requiredDoc.documentsForeign.document6', '2 фото (4×6 см), 4 фото (3×4 см)'),
      t('requiredDoc.documentsForeign.document7', 'Результаты мед обследования')
   ];

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Animated gradient balls - основной слой */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {animatedBalls.map((ball) => (
               <motion.div
                  key={ball.id}
                  className="absolute rounded-full opacity-10"
                  style={{
                     width: ball.size,
                     height: ball.size,
                     left: ball.left,
                     top: ball.top,
                     background: 'linear-gradient(135deg, #023E8A, #0077B6)'
                  }}
                  animate={{
                     y: [0, -30, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.1, 1]
                  }}
                  transition={{
                     duration: ball.duration,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: ball.delay
                  }}
               />
            ))}
         </div>

         {/* Medium Floating Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {floatingBubbles.map((bubble) => (
               <motion.div
                  key={`floating-${bubble.id}`}
                  className="absolute rounded-full opacity-8"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #023E8A, #0077B6)'
                  }}
                  animate={{
                     y: [0, -40, 0],
                     x: [0, 20, 0],
                     scale: [1, 1.2, 1]
                  }}
                  transition={{
                     duration: bubble.duration,
                     delay: bubble.delay,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />
            ))}
         </div>

         {/* Small Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {smallBubbles.map((bubble) => (
               <motion.div
                  key={`small-${bubble.id}`}
                  className="absolute rounded-full opacity-12"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #023E8A, #0077B6)'
                  }}
                  animate={{
                     y: [0, -20, 0],
                     x: [0, 10, 0],
                     scale: [1, 1.05, 1]
                  }}
                  transition={{
                     duration: bubble.duration,
                     delay: bubble.delay,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />
            ))}
         </div>

         {/* Hero Section */}
         <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Уменьшена длительность
            className="relative z-10 text-center py-20 px-4"
         >
            {/* Additional white bubbles in hero section for contrast */}
            {[...Array(8)].map((_, i) => (
               <motion.div
                  key={`hero-bubble-${i}`}
                  className="absolute rounded-full opacity-10"
                  style={{
                     width: Math.random() * 100 + 50,
                     height: Math.random() * 100 + 50,
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
                  }}
                  animate={{
                     y: [0, -25, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.2, 1]
                  }}
                  transition={{
                     duration: 3 + Math.random() * 2, // Уменьшена длительность
                     delay: Math.random() * 1, // Уменьшена задержка
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />
            ))}

            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", stiffness: 300, delay: 0.1 }} // Увеличена жесткость и уменьшена задержка
               className="inline-block mb-6"
            >
               <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center transform rotate-3 shadow-2xl">
                  <FiFileText className="w-12 h-12 text-white" />
               </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
               {t('requiredDoc.hero.title', 'Необходимые документы')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               {t('requiredDoc.hero.subtitle', 'Для поступления в университет')}
            </p>
         </motion.div>

         {/* Main Content */}
         <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation */}
               <ExtraNavigation />

               {/* Right Content */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }} // Уменьшена длительность и задержка
                  className="flex-1"
               >
                  {/* Important Notice */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }} // Уменьшена длительность
                     viewport={{ once: true }}
                     className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-[#023E8A] rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                  >
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center shrink-0">
                           <FiCheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold mb-3 text-[#023E8A]">
                              {t('requiredDoc.important.title', 'Важная информация')}
                           </h3>
                           <p className="text-lg text-gray-700 leading-relaxed mb-3">
                              {t('requiredDoc.important.point1', 'Абитуриенты в ходе онлайн-приема должны приложить только копии соответствующих документов, подтверждающих, что они будут обучаться в нашем университете.')}
                           </p>
                           <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                              {t('requiredDoc.important.point2', 'Оригиналы документов должны быть предоставлены только в начале учебного года.')}
                           </p>
                        </div>
                     </div>
                  </motion.div>

                  {/* Documents for KR Citizens */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }} // Уменьшена длительность
                     viewport={{ once: true }}
                     className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                           <FiUser className="w-8 h-8 text-white" />
                        </div>
                        <div>
                           <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                              {t('requiredDoc.citizensKR.title', 'Для граждан Кыргызской Республики')}
                           </h2>
                        </div>
                     </div>

                     <div className="space-y-4">
                        {documentsKR.map((doc, index) => (
                           <motion.div
                              key={index}
                              className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05, duration: 0.3 }} // Уменьшена задержка и длительность
                              whileHover={{ scale: 1.02 }}
                           >
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-bold shrink-0">
                                 {index + 1}
                              </div>
                              <p className="text-lg text-gray-800 leading-relaxed flex-1">
                                 {doc}
                              </p>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Documents for Foreign Citizens */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }} // Уменьшена длительность
                     viewport={{ once: true }}
                     className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] flex items-center justify-center">
                           <FiGlobe className="w-8 h-8 text-white" />
                        </div>
                        <div>
                           <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
                              {t('requiredDoc.foreignCitizens.title', 'Для граждан стран ближнего и дальнего зарубежья')}
                           </h2>
                        </div>
                     </div>

                     <div className="space-y-4">
                        {documentsForeign.map((doc, index) => (
                           <motion.div
                              key={index}
                              className="flex items-start gap-4 p-6 bg-gradient-to-r from-cyan-50 to-white rounded-2xl border border-cyan-100 hover:shadow-lg transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05, duration: 0.3 }} // Уменьшена задержка и длительность
                              whileHover={{ scale: 1.02 }}
                           >
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold shrink-0">
                                 {index + 1}
                              </div>
                              <p className="text-lg text-gray-800 leading-relaxed flex-1">
                                 {doc}
                              </p>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default RequiredDoc;