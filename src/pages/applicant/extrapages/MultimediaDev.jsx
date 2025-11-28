import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SoftwareNavigation from './SoftwareNavigation';

const MultimediaDev = () => {
   const { t } = useTranslation();

   // Animated background balls - увеличенное количество как в Software
   const backgroundBalls = useMemo(() => {
      return Array.from({ length: 20 }, (_, i) => ({
         id: i,
         size: Math.random() * 100 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 5 + Math.random() * 4,
         delay: Math.random() * 3,
         color: ['from-blue-400/20 to-purple-400/20', 'from-green-400/20 to-blue-400/20', 'from-purple-400/20 to-pink-400/20'][i % 3]
      }));
   }, []);

   // Additional floating bubbles как в Software
   const floatingBubbles = useMemo(() => {
      return Array.from({ length: 15 }, (_, i) => ({
         id: i,
         size: Math.random() * 80 + 40,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 6 + Math.random() * 5,
         delay: Math.random() * 4
      }));
   }, []);

   // Import all scrolling images
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

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Animated Background Balls - обновленная анимация */}
         {backgroundBalls.map((ball) => (
            <motion.div
               key={ball.id}
               className={`absolute rounded-full bg-gradient-to-br ${ball.color} blur-3xl`}
               style={{
                  width: ball.size,
                  height: ball.size,
                  left: ball.left,
                  top: ball.top,
               }}
               animate={{
                  y: [0, -40, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
               }}
               transition={{
                  duration: ball.duration,
                  delay: ball.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
               }}
            />
         ))}

         {/* Additional Floating Bubbles - новые пузырьки */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {floatingBubbles.map((bubble) => (
               <motion.div
                  key={`floating-${bubble.id}`}
                  className="absolute rounded-full opacity-5"
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
                     scale: [1, 1.2, 1],
                     rotate: [0, 180, 360]
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
            {/* Additional balls in hero section - как в Software */}
            {backgroundBalls.slice(0, 8).map((ball) => (
               <motion.div
                  key={`hero-ball-${ball.id}`}
                  className="absolute rounded-full opacity-10"
                  style={{
                     width: ball.size * 1.5,
                     height: ball.size * 1.5,
                     left: ball.left,
                     top: ball.top,
                     background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
                  }}
                  animate={{
                     y: [0, -20, 0],
                     x: [0, 10, 0],
                     scale: [1, 1.2, 1]
                  }}
                  transition={{
                     duration: ball.duration * 0.8,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />
            ))}

            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
               <div
                  className="absolute inset-0 opacity-30"
                  style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  {t('multimediaDev.title', 'Разработка мультимедийных программ')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90 mb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  {t('multimediaDev.subtitle', 'Development of Multimedia Programs')}
               </motion.p>
            </div>
         </motion.div>

         {/* Main Content with Navigation */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation */}
               <div className="lg:w-80 shrink-0">
                  <SoftwareNavigation />
               </div>

               {/* Right Content */}
               <div className="flex-1">
                  {/* Specialist Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('multimediaDev.specialist.title', 'Специалист в области мультимедийных программ')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('multimediaDev.specialist.content', 'Программа в области креативных мультимедийных программ разработан для тех, кто хочет стать профессиональными художниками в IT-индустрии или мультимедийной индустрии. Мультимедиа сочетает в себе креативность в области искусства и дизайна с навыками и знаниями компьютерных технологий и программирования для создания интерактивных цифровых медиа-продуктов, таких как онлайн и мобильные приложения, экранные или интерактивные дизайны.')}
                     </p>
                  </motion.div>

                  {/* Scrolling Images Gallery */}
                  <motion.div
                     className="mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <div className="bg-white rounded-3xl shadow-2xl p-6 overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                           {scrollingImages.map((image, index) => (
                              <motion.div
                                 key={image}
                                 className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 whileInView={{ opacity: 1, scale: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ delay: index * 0.05, duration: 0.4 }}
                                 whileHover={{ scale: 1.05 }}
                              >
                                 <img
                                    src={`/src/assets/applicant/multidev/scrolling/${image}`}
                                    alt={t('multimediaDev.gallery.alt', 'Галерея') + ` ${index + 1}`}
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

                  {/* Overview Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('multimediaDev.overview.title', 'Обзор специальности')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('multimediaDev.overview.content', 'Эта степень также концентрируется на внедрении теории и технологий и их функциональном применении к последним и новым отраслевым разработкам. Наиболее важной характеристикой является функциональное решение проблем в междисциплинарных группах с использованием новейших и развивающихся технологий. Это легко адаптируемая и междисциплинарная учебная программа, которая позволяет студентам досконально изучить стандарты и процедуры проектирования, производства, управления и оценки мультимедиа.')}
                     </p>
                  </motion.div>

                  {/* Program Goals Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('multimediaDev.goals.title', 'Цель программы')}
                     </h2>
                     <ul className="space-y-4 text-lg text-gray-700">
                        <li className="flex items-start">
                           <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full mt-2 mr-3"></span>
                           <span>{t('multimediaDev.goals.point1', 'Хорошо осведомленный и технически компетентный в области креативных мультимедийных программ в соответствии с требованиями отрасли.')}</span>
                        </li>
                        <li className="flex items-start">
                           <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full mt-2 mr-3"></span>
                           <span>{t('multimediaDev.goals.point2', 'Эффективен в общении, умеет работать в команде и демонстрирует эффективные лидерские качества в организации.')}</span>
                        </li>
                        <li className="flex items-start">
                           <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full mt-2 mr-3"></span>
                           <span>{t('multimediaDev.goals.point3', 'Способен решать проблемы мультимедийного проектирования инновационно, творчески и этично с помощью устойчивого подхода.')}</span>
                        </li>
                        <li className="flex items-start">
                           <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full mt-2 mr-3"></span>
                           <span>{t('multimediaDev.goals.point4', 'Способен продемонстрировать предпринимательские навыки и признать необходимость обучения в течение всей жизни для успешного карьерного роста.')}</span>
                        </li>
                     </ul>
                  </motion.div>

                  {/* Career Opportunities Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('multimediaDev.career.title', 'Возможности карьерного роста')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('multimediaDev.career.content', 'Выпускники найдут адекватные возможности не только для карьеры в индустрии развлечений, но и в государственных службах, академических кругах. Другие карьерные пути также включают вещание, креативный дизайн, бизнес и маркетинг.')}
                     </p>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MultimediaDev;