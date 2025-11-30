import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SoftwareNavigation from './SoftwareNavigation';

const Software = () => {
   const { t } = useTranslation();

   // Fast animated background balls
   const backgroundBalls = useMemo(() => {
      return Array.from({ length: 12 }, (_, i) => ({
         id: i,
         size: Math.random() * 80 + 40,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 3 + Math.random() * 2,
         delay: Math.random() * 1,
         color: ['from-blue-400/20 to-purple-400/20', 'from-green-400/20 to-blue-400/20', 'from-purple-400/20 to-pink-400/20'][i % 3]
      }));
   }, []);

   // Fast floating bubbles
   const floatingBubbles = useMemo(() => {
      return Array.from({ length: 8 }, (_, i) => ({
         id: i,
         size: Math.random() * 60 + 30,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 4 + Math.random() * 2,
         delay: Math.random() * 2
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

   // Быстрые анимации для появления при скролле
   const scrollContainerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            duration: 0.2,
            staggerChildren: 0.05
         }
      }
   };

   const scrollItemVariants = {
      hidden: { y: 10, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.2,
            ease: "easeOut"
         }
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Fast Animated Background Balls */}
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
                  x: [0, 15, -15, 0],
                  y: [0, -15, 15, 0],
                  scale: [1, 1.05, 0.95, 1],
               }}
               transition={{
                  duration: ball.duration,
                  delay: ball.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
            />
         ))}

         {/* Fast Floating Bubbles */}
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
                     y: [0, -25, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.1, 1],
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

         {/* Hero Section */}
         <motion.div
            className="relative h-[60vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
         >
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
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
               >
                  {t('software.title')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
               >
                  {t('software.subtitle')}
               </motion.p>
            </div>
         </motion.div>

         {/* Main Content with Navigation */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation */}
               <motion.div
                  className="lg:w-80 shrink-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2 }}
               >
                  <SoftwareNavigation />
               </motion.div>

               {/* Right Content */}
               <motion.div
                  className="flex-1"
                  variants={scrollContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
               >
                  {/* IT Education Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={scrollItemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('software.education.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('software.education.description')}
                     </p>
                  </motion.div>

                  {/* Scrolling Images Gallery */}
                  <motion.div
                     className="mb-8"
                     variants={scrollItemVariants}
                  >
                     <div className="bg-white rounded-3xl shadow-2xl p-6 overflow-hidden">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                           {t('software.gallery.title')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                           {scrollingImages.map((image, index) => (
                              <motion.div
                                 key={image}
                                 className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 whileInView={{ opacity: 1, scale: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 0.2, delay: index * 0.02 }}
                                 whileHover={{ scale: 1.03 }}
                              >
                                 <img
                                    src={`/src/assets/applicant/software/scrolling/${image}`}
                                    alt={t('software.gallery.alt') + ` ${index + 1}`}
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
                     variants={scrollItemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('software.description.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {t('software.description.content')}
                     </p>
                  </motion.div>

                  {/* Program Goals Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={scrollItemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('software.goals.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('software.goals.content')}
                     </p>
                  </motion.div>

                  {/* Career Opportunities Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={scrollItemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('software.career.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('software.career.content')}
                     </p>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Software;