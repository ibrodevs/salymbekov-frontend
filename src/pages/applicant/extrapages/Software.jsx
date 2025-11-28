import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SoftwareNavigation from './SoftwareNavigation';

const Software = () => {
   const { t } = useTranslation();

   // Animated background balls - увеличенное количество
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

   // Additional floating bubbles
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
         {/* Animated Background Balls */}
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

         {/* Additional Floating Bubbles */}
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
            {/* Additional balls in hero section */}
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
                     backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920)',
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
                  {t('software.title', 'Разработка программного обеспечения')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90 mb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  {t('software.subtitle', 'Computer Science')}
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
                  {/* IT Education Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('software.education.title', 'Образование в сфере IT')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('software.education.description', 'готовит студентов к карьере в программировании. Учиться на IT престижно, потому что это одна из самых быстро растущих научных областей. Выпускники программисты, как правило, с легкостью находят работу, так как компьютеры стали неотъемлемой частью всех секторов экономики. При выборе страны обучения и учебного заведения стоит обратить особое внимание на развитие информационных технологий в государстве, а также на успешность выпускников и репутацию университетов.')}
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
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                           {t('software.gallery.title', 'Галерея')}
                        </h3>
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
                                    src={`/src/assets/applicant/software/scrolling/${image}`}
                                    alt={t('software.gallery.alt', 'Галерея') + ` ${index + 1}`}
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

                  {/* Description Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('software.description.title', 'Описание специальности')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {t('software.description.content', 'Программа «Разработка программного обеспечения» была разработана для того, чтобы помочь студентам приобрести знания, связанные с разработкой собственных программ. В колледже работают преподаватели имеющие большой опыт в этой области. Эта программа также ориентирована на разработку программ и приложений и развитие навыков учащихся. Студенты после завершения этой программы будут обладать глубокими знаниями по этому предмету, что поможет им преуспеть в профессиональной области. После завершения этой программы студенты могут либо получить высшее образование, либо начать свою карьеру.')}
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
                        {t('software.goals.title', 'Цель программы')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('software.goals.content', 'Эта программа направлена на подготовку выпускников, которые будут иметь возможность писать компьютерные приложения для облегчения повседневной работы организаций, эффективно поддерживать вычислительную среду, а также эффективно разрабатывать автоматизированные процедуры для рутинных организационных задач. Наша основная цель – дать студентам понимание всех аспектов, связанных с технологиями, а также помочь студентам узнать о новых технологических разработках. Продолжительность этой программы составляет два с половиной года, и в первый год она охватывает изучение технологий, а во второй год основное внимание уделяется пониманию современных компьютерных приложений.')}
                     </p>
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
                        {t('software.career.title', 'Возможности карьерного роста')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('software.career.content', 'Программа подготовит выпускника, который станет ценным членом команды по информационным системам, как правило, на уровне младшего программиста или программиста технического обслуживания. Возможности для продвижения в этой области превосходны, особенно если будут приняты передовые программы для поддержания превосходства в этой захватывающей и инновационной области.')}
                     </p>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Software;