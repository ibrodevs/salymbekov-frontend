import React, { useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './ExtraNavigation';

const GeneralMedSix = () => {
   const { t } = useTranslation();
   const scrollContainerRef = useRef(null);

   const backgroundBalls = useMemo(() => {
      return Array.from({ length: 35 }, (_, i) => ({
         id: i,
         size: Math.random() * 400 + 150,
         x: Math.random() * 100,
         y: Math.random() * 100,
         duration: Math.random() * 25 + 20,
         delay: Math.random() * 8,
         color: ['from-blue-400/20 to-purple-400/20', 'from-green-400/20 to-blue-400/20', 'from-purple-400/20 to-pink-400/20', 'from-cyan-400/20 to-blue-400/20', 'from-pink-400/20 to-rose-400/20'][i % 5]
      }));
   }, []);

   const floatingBubbles = useMemo(() => {
      return Array.from({ length: 25 }, (_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 8 + Math.random() * 7,
         delay: Math.random() * 6
      }));
   }, []);

   const smallBubbles = useMemo(() => {
      return Array.from({ length: 50 }, (_, i) => ({
         id: i,
         size: Math.random() * 40 + 20,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 4 + Math.random() * 3,
         delay: Math.random() * 2,
         opacity: 0.1 + Math.random() * 0.1
      }));
   }, []);

   const particleBubbles = useMemo(() => {
      return Array.from({ length: 80 }, (_, i) => ({
         id: i,
         size: Math.random() * 15 + 5,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 2 + Math.random() * 2,
         delay: Math.random() * 1,
         opacity: 0.05 + Math.random() * 0.05
      }));
   }, []);

   const scrollingImages = useMemo(() => [
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
      'bc0b6708.jpg',
      'bc0b6732.jpg'
   ], []);

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
         {/* Large Animated Background Balls */}
         {backgroundBalls.map((ball) => (
            <motion.div
               key={ball.id}
               className={`absolute rounded-full bg-gradient-to-br ${ball.color} blur-3xl`}
               style={{
                  width: ball.size,
                  height: ball.size,
                  left: `${ball.x}%`,
                  top: `${ball.y}%`,
               }}
               animate={{
                  x: [0, 30, -30, 0],
                  y: [0, -30, 30, 0],
                  scale: [1, 1.1, 0.9, 1],
               }}
               transition={{
                  duration: ball.duration,
                  delay: ball.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
            />
         ))}

         {/* Medium Floating Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {floatingBubbles.map((bubble) => (
               <motion.div
                  key={`floating-${bubble.id}`}
                  className="absolute rounded-full opacity-10"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #023E8A, #0077B6)'
                  }}
                  animate={{
                     y: [0, -60, 0],
                     x: [0, 30, 0],
                     scale: [1, 1.3, 1],
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

         {/* Small Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {smallBubbles.map((bubble) => (
               <motion.div
                  key={`small-${bubble.id}`}
                  className="absolute rounded-full"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #0096C7, #00B4D8)',
                     opacity: bubble.opacity
                  }}
                  animate={{
                     y: [0, -30, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.2, 1],
                     rotate: [0, 90, 180]
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

         {/* Particle Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {particleBubbles.map((bubble) => (
               <motion.div
                  key={`particle-${bubble.id}`}
                  className="absolute rounded-full"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #48CAE4, #90E0EF)',
                     opacity: bubble.opacity
                  }}
                  animate={{
                     y: [0, -20, 0],
                     x: [0, 10, 0],
                     scale: [1, 1.1, 1],
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
            {/* Additional animated elements in hero section */}
            {[...Array(12)].map((_, i) => (
               <motion.div
                  key={`hero-element-${i}`}
                  className="absolute rounded-full opacity-15"
                  style={{
                     width: Math.random() * 200 + 100,
                     height: Math.random() * 200 + 100,
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
                  }}
                  animate={{
                     y: [0, -25, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.3, 1]
                  }}
                  transition={{
                     duration: 8 + Math.random() * 4,
                     delay: Math.random() * 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />
            ))}

            {/* Floating circles in hero */}
            {[...Array(8)].map((_, i) => (
               <motion.div
                  key={`hero-circle-${i}`}
                  className="absolute rounded-full border-2 border-white/20"
                  style={{
                     width: Math.random() * 80 + 40,
                     height: Math.random() * 80 + 40,
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                     y: [0, -15, 0],
                     x: [0, 8, 0],
                     scale: [1, 1.1, 1],
                     rotate: [0, 180, 360]
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
                     backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920)',
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
                  {t('generalMedSix.hero.title', 'Лечебное дело')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90 mb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  {t('generalMedSix.hero.subtitle', 'General Medicine - 6 лет')}
               </motion.p>
               <motion.p
                  className="text-xl text-white/80"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
               >
                  {t('generalMedSix.hero.qualification', 'Квалификация "Врач"')}
               </motion.p>
            </div>
         </motion.div>

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
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedSix.about.title', 'О программе')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {t('generalMedSix.about.description1', 'Салымбеков университет – современный университет, предоставляющий качественное высшее медицинское образование и ответственный за подготовку высококвалифицированных специалистов для сферы здравоохранения и медицины. Растущий спрос на квалифицированных докторов и постоянное развитие медицинской сферы являются стимулом для нас при подготовке кадров с использованием новейших методов обучения и практики в современных лабораториях, учебных корпусах и собственных многофункциональных клиниках.')}
                     </p>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('generalMedSix.about.description2', 'Для нас лучшей благодарностью от студентов и выпускников является их будущий вклад в улучшение здоровья нации и благосостояния страны.')}
                     </p>
                  </motion.div>

                  {/* Program Info Cards */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedSix.programInfo.title', 'Информация о программе')}
                     </h3>
                     <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📅</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('generalMedSix.programInfo.duration', 'Срок обучения')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('generalMedSix.programInfo.durationValue', '6 лет')}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📝</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('generalMedSix.programInfo.admission', 'Прием')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('generalMedSix.programInfo.admissionValue', 'Сентябрь – Октябрь, Февраль-Март')}</p>
                           </div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedSix.programInfo.code', 'Код направления')}</p>
                           <p className="text-lg font-bold text-gray-800">560001</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedSix.programInfo.baseEducation', 'Базовое образование')}</p>
                           <p className="text-lg font-bold text-gray-800">{t('generalMedSix.programInfo.baseEducationValue', 'На базе 11-летнего базового среднего образования')}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedSix.programInfo.educationLevel', 'Уровень образования')}</p>
                           <p className="text-lg font-bold text-gray-800">{t('generalMedSix.programInfo.educationLevelValue', 'Высшее образование – Специалитет')}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl">
                           <p className="text-sm text-gray-600 mb-1">{t('generalMedSix.programInfo.qualification', 'Квалификация')}</p>
                           <p className="text-lg font-bold text-gray-800">{t('generalMedSix.programInfo.qualificationValue', 'Врач')}</p>
                        </div>
                     </div>
                  </motion.div>

                  {/* Program Description */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedSix.programDescription.title', 'Описание программы')}
                     </h3>
                     <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                           {t('generalMedSix.programDescription.p1', 'Программа "Лечебное дело" является комплексной образовательной программой сроком обучения 6 лет для граждан КР и состоит из 2 частей: 1 часть включает в себя изучение фундаментальных дисциплин, 2 часть – изучение клинических дисциплин с прохождением производственной практики в собственных клинических базах университета.')}
                        </p>
                        <p>
                           {t('generalMedSix.programDescription.p2', 'Первые 3 года обучения включают в себя изучение гуманитарных и естественно-научных дисциплин, включая изучение биологии, химии, анатомии, кыргызского, русского и английского языков.')}
                        </p>
                        <p>
                           {t('generalMedSix.programDescription.p3', 'Клинические дисциплины включают в себя изучение внутренних болезней, гистологии, патанатомии, патфизиологии и другие дисциплины в учебных корпусах и клиниках. На последних курсах обучения студенты углубленно приобретают навыки у квалифицированных врачей в собственных и аффилированных клиниках по всем медицинским направлениям.')}
                        </p>
                        <p>
                           {t('generalMedSix.programDescription.p4', 'Образовательный стандарт подготовлен в соответствии с требованиями Болонской декларации: модульный принцип обучения, система зачётных единиц (система учёта в кредитах ECTS), балльно-рейтинговая система оценки усвоения студентами учебных дисциплин.')}
                        </p>
                        <p>
                           {t('generalMedSix.programDescription.p5', 'После получения квалификации "Врач", наш выпускник способен выполнять основные лечебные и хирургические мероприятия при наиболее часто встречающихся заболеваниях и состояниях у населения, назначать больным адекватное лечение в соответствии с диагнозом, осуществлять населению первую врачебную помощь в случае возникновения неотложных и угрожающих жизни состояниях, направлять на госпитализацию больных в плановом и экстренном порядке.')}
                        </p>
                        <p className="font-semibold text-[#023E8A]">
                           {t('generalMedSix.programDescription.p6', 'Международный факультет медицины внесен в список WDOMS (ВОЗ), FAIMER, имеет Sponsor notes от международной организации ECFMG для предоставление возможности выпускникам продолжить обучение и трудоустройства в развитых странах как США, Канада, Австралия.')}
                        </p>
                     </div>
                  </motion.div>

                  {/* Program Goals */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedSix.goals.title', 'Цель программы')}
                     </h3>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('generalMedSix.goals.description', 'Главной целью образовательной программы является подготовка врача, обладающего общими и специальными компетенциями, универсальными и предметно-специализированными компетенциями, способствующими его социальной мобильности и устойчивости на рынке труда, готовность к последипломному обучению с последующим осуществлением профессиональной врачебной деятельности в избранной сфере.')}
                     </p>
                  </motion.div>

                  {/* Professional Activities */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedSix.activities.title', 'Виды профессиональной деятельности выпускников')}
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        {[
                           t('generalMedSix.activities.preventive', 'Профилактическая'),
                           t('generalMedSix.activities.diagnostic', 'Диагностическая'),
                           t('generalMedSix.activities.therapeutic', 'Лечебная'),
                           t('generalMedSix.activities.rehabilitative', 'Реабилитационная'),
                           t('generalMedSix.activities.educational', 'Образовательная'),
                           t('generalMedSix.activities.organizational', 'Организационно-управленческая'),
                           t('generalMedSix.activities.research', 'Научно-исследовательская')
                        ].map((activity, index) => (
                           <motion.div
                              key={index}
                              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                           >
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6]"></div>
                              <p className="text-gray-800 font-medium">{activity}</p>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Photo Gallery with Auto-Scroll */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('generalMedSix.gallery.title', 'Галерея')}
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
                              <motion.div
                                 key={index}
                                 className="relative overflow-hidden rounded-2xl shadow-lg"
                                 whileHover={{ scale: 1.02 }}
                                 transition={{ duration: 0.3 }}
                              >
                                 <img
                                    src={`/src/assets/applicant/generalfive/scrolling/${img}`}
                                    alt={t('generalMedSix.gallery.alt', 'Медицинское образование') + ` ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                 />
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GeneralMedSix;