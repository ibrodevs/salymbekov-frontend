import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const India = () => {
   const navigate = useNavigate();
   const { t } = useTranslation();

   // Пузырьки как в других компонентах
   const animatedBalls = useMemo(() => {
      return [...Array(25)].map((_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 5 + Math.random() * 3,
         delay: Math.random() * 2
      }));
   }, []);

   const floatingBubbles = useMemo(() => {
      return [...Array(15)].map((_, i) => ({
         id: i,
         size: Math.random() * 80 + 40,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 6 + Math.random() * 4,
         delay: Math.random() * 3
      }));
   }, []);

   const smallBubbles = useMemo(() => {
      return [...Array(30)].map((_, i) => ({
         id: i,
         size: Math.random() * 25 + 15,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 3 + Math.random() * 2,
         delay: Math.random() * 1
      }));
   }, []);

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
            className="relative h-[60vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
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
                     duration: 6 + Math.random() * 3,
                     delay: Math.random() * 2,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />
            ))}

            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
               <div
                  className="absolute inset-0 opacity-30"
                  style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
               <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  <span className="text-3xl">🇮🇳</span>
               </motion.div>
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
               >
                  {t('india.hero.title', 'Индия')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
               >
                  {t('india.hero.subtitle', 'Официальная информация для абитуриентов')}
               </motion.p>
            </div>
         </motion.div>

         {/* Main Content */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="max-w-4xl mx-auto">
               {/* Основное уведомление */}
               <motion.div
                  className="bg-white rounded-3xl shadow-2xl border-l-4 border-[#0077B6] p-8 md:p-12 mb-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
               >
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-3 bg-blue-100 rounded-full">
                        <svg className="w-6 h-6 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                     </div>
                     <h2 className="text-2xl font-bold text-gray-800">
                        {t('india.notification.title', 'Важное уведомление для абитуриентов и родителей')}
                     </h2>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                     <p className="text-lg">
                        {t('india.notification.greeting', 'Уважаемые родители, абитуриенты и посетители нашего сайта!')}
                     </p>

                     <p>
                        {t('india.notification.description1', 'В связи с участившимися случаями подделки официальных документов')}{' '}
                        <strong className="text-[#0077B6]">SALYMBEKOV UNIVERSITY</strong>{' '}
                        {t('india.notification.description2', 'о зачислении иностранных граждан на обучение со стороны третьих компаний, руководство')}{' '}
                        <strong>SALYMBEKOV UNIVERSITY</strong>{' '}
                        {t('india.notification.description3', 'просит обратить Ваше внимание на то, что у')}{' '}
                        <strong>SALYMBEKOV UNIVERSITY</strong>{' '}
                        {t('india.notification.description4', 'есть Эксклюзивное соглашение о сотрудничестве по набору иностранных студентов только с компанией')}{' '}
                        <strong className="text-[#023E8A]">{t('india.notification.company', 'ООО "SK Career Builder"')}</strong>.
                     </p>

                     <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-[#023E8A] mb-4">
                           {t('india.contacts.title', 'Для связи с официальным представителем:')}
                        </h3>

                        <div className="space-y-3">
                           <div>
                              <h4 className="font-semibold text-gray-800">{t('india.contacts.name', 'Д-р Сунил Ядав (Dr. Sunil Yadav)')}</h4>
                              <div className="mt-2 space-y-2">
                                 <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="font-medium">
                                       {t('india.contacts.kyrgyzstan', 'Кыргызстан:')}{' '}
                                       <a href="tel:+996777322222" className="text-[#0077B6] hover:underline">+996-777-322222</a>
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="font-medium">
                                       {t('india.contacts.india', 'Индия:')}{' '}
                                       <a href="tel:+917607838117" className="text-[#0077B6] hover:underline">+91-7607838117</a>
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#023E8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-medium">
                                       Email: <a href="mailto:dr_sunil_kg@yahoo.com" className="text-[#0077B6] hover:underline">dr_sunil_kg@yahoo.com</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">
                           {t('india.resources.title', 'Официальные ресурсы')}
                        </h3>
                        <div className="flex items-center gap-3">
                           <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                           </svg>
                           <span className="font-medium">
                              {t('india.resources.website', 'Официальный сайт SALYMBEKOV UNIVERSITY –')}{' '}
                              <a
                                 href="https://salymbekov.com/en/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-[#0077B6] hover:text-[#023E8A] underline"
                              >
                                 https://salymbekov.com/en/
                              </a>
                           </span>
                        </div>
                     </div>

                     <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                           {t('india.important.title', 'Важная информация')}
                        </h3>
                        <p className="mb-4">
                           <strong>SALYMBEKOV UNIVERSITY</strong>{' '}
                           {t('india.important.description1', 'сообщает всем иностранным студентам, заинтересованным в обучении в')}{' '}
                           <strong>SALYMBEKOV UNIVERSITY</strong>,{' '}
                           {t('india.important.description2', 'что только')}{' '}
                           <strong>{t('india.notification.company', 'ООО "SK CAREER BUILDER"')}</strong>{' '}
                           {t('india.important.description3', 'имеет эксклюзивное соглашение на набор студентов.')}{' '}
                           <strong>{t('india.notification.company', 'ООО "SK CAREER BUILDER"')}</strong>{' '}
                           {t('india.important.description4', 'занимается набором иностранных студентов.')}
                        </p>
                        <p className="font-semibold text-[#0077B6]">
                           {t('india.important.note', 'Примечание: Пожалуйста, обратите внимание, что во время поступления, перед передачей ваших документов кому-либо, обязательно проверьте подлинность этого лица из ООО "SK CAREER BUILDER".')}
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* Дополнительная информация об Индии */}
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
               >
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                     </div>
                     <h3 className="font-semibold text-gray-800 mb-2">
                        {t('india.facts.capital', 'Столица')}
                     </h3>
                     <p className="text-gray-600">{t('india.facts.capitalName', 'Нью-Дели')}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                     </div>
                     <h3 className="font-semibold text-gray-800 mb-2">
                        {t('india.facts.population', 'Население')}
                     </h3>
                     <p className="text-gray-600">{t('india.facts.populationCount', '1.4 млрд человек')}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                     </div>
                     <h3 className="font-semibold text-gray-800 mb-2">
                        {t('india.facts.area', 'Площадь')}
                     </h3>
                     <p className="text-gray-600">{t('india.facts.areaSize', '3.287 млн км²')}</p>
                  </div>
               </motion.div>

               {/* Кнопка назад */}
               <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
               >
                  <button
                     onClick={() => navigate('/applicants/dealers')}
                     className="inline-flex items-center gap-2 bg-[#0077B6] hover:bg-[#023E8A] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                     </svg>
                     {t('india.backButton', 'Назад к списку стран')}
                  </button>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default India;