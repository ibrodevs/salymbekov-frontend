import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFileText, FiClipboard, FiCalendar } from 'react-icons/fi';

const AdmissionProcedure = () => {
   const { t } = useTranslation();

   const animatedBalls = useMemo(() => {
      return [...Array(20)].map((_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 5 + Math.random() * 3,
         delay: Math.random() * 2
      }));
   }, []);

   // Данные карточек с использованием переводов
   const cards = [
      {
         id: 1,
         titleKey: 'admission-procedure.cards.1.title',
         descriptionKey: 'admission-procedure.cards.1.description',
         icon: FiFileText,
         link: '/applicants/admission-documents',
         color: 'from-blue-500 to-cyan-500',
         linkTextKey: 'admission-procedure.linkText'
      },
      {
         id: 2,
         titleKey: 'admission-procedure.cards.2.title',
         descriptionKey: 'admission-procedure.cards.2.description',
         icon: FiClipboard,
         link: '/applicants/admission-regulations',
         color: 'from-blue-600 to-cyan-600',
         linkTextKey: 'admission-procedure.linkText'
      },
      {
         id: 3,
         titleKey: 'admission-procedure.cards.3.title',
         descriptionKey: 'admission-procedure.cards.3.description',
         icon: FiCalendar,
         link: '/applicants/admission-schedule',
         color: 'from-blue-700 to-cyan-700',
         linkTextKey: 'admission-procedure.linkText'
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.15
         }
      }
   };

   const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.6,
            ease: "easeOut"
         }
      }
   };

   return (
      <div className="w-full relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
         {/* Animated gradient balls */}
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

         {/* Hero Section */}
         <motion.div
            className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0"></div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
               <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
               >
                  {t('admission-procedure.heroTitle')}
               </motion.h1>
               <motion.p
                  className="text-xl md:text-2xl text-blue-100"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
               >
                  {t('admission-procedure.heroDescription')}
               </motion.p>
            </div>
         </motion.div>

         {/* Cards Section */}
         <div className="relative z-10 container mx-auto px-4 -mt-20 pb-20">
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {cards.map((card) => {
                  const IconComponent = card.icon;
                  return (
                     <motion.div key={card.id} variants={itemVariants}>
                        <Link to={card.link}>
                           <motion.div
                              whileHover={{ y: -10, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden h-full cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300"
                           >
                              {/* Gradient Background Overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                              {/* Card Content */}
                              <div className="relative p-10">
                                 {/* Icon Container */}
                                 <div className="mb-8">
                                    <motion.div
                                       whileHover={{ rotate: 360, scale: 1.15 }}
                                       transition={{ duration: 0.6 }}
                                       className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${card.color} shadow-lg`}
                                    >
                                       <IconComponent size={48} className="text-white" />
                                    </motion.div>
                                 </div>

                                 {/* Title */}
                                 <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                                    {t(card.titleKey)}
                                 </h3>

                                 {/* Description */}
                                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {t(card.descriptionKey)}
                                 </p>

                                 {/* Decorative Line */}
                                 <motion.div
                                    initial={{ width: "0%" }}
                                    whileHover={{ width: "100%" }}
                                    className={`h-1.5 bg-gradient-to-r ${card.color} rounded-full mb-6`}
                                 />

                                 {/* Learn More Link */}
                                 <div className="flex items-center justify-between">
                                    <span className={`text-base font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                                       {t(card.linkTextKey)}
                                    </span>
                                    <motion.div
                                       animate={{ x: [0, 8, 0] }}
                                       transition={{ duration: 1.5, repeat: Infinity }}
                                       className={`w-10 h-10 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg`}
                                    >
                                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                       </svg>
                                    </motion.div>
                                 </div>
                              </div>

                              {/* Corner Decoration */}
                              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-5 rounded-bl-full`}></div>
                           </motion.div>
                        </Link>
                     </motion.div>
                  );
               })}
            </motion.div>
         </div>
      </div>
   );
};

export default AdmissionProcedure;