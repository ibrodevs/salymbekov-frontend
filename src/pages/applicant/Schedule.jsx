import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiCalendar, FiCheckCircle, FiClock } from 'react-icons/fi';

const Schedule = () => {
   const { t } = useTranslation();

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

   const tours = [
      {
         title: t('schedule.tours.tour1.title', 'Первый тур'),
         period: t('schedule.tours.tour1.period', '14 – 21 июля'),
         stages: [
            {
               dates: t('schedule.tours.tour1.stage1.dates', '14-16 июля'),
               description: t('schedule.tours.tour1.stage1.description', 'Регистрация абитуриентов для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour1.stage2.dates', '16 июля в 14.00 ч.'),
               description: t('schedule.tours.tour1.stage2.description', 'Завершение регистрации для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour1.stage3.dates', '17 июля до 09.00 ч.'),
               description: t('schedule.tours.tour1.stage3.description', 'Размещение списков абитуриентов, рекомендованных к зачислению')
            },
            {
               dates: t('schedule.tours.tour1.stage4.dates', '17-21 июля до 16.00 ч.'),
               description: t('schedule.tours.tour1.stage4.description', 'Подтверждение абитуриентами желания быть зачисленным в вуз')
            }
         ]
      },
      {
         title: t('schedule.tours.tour2.title', 'Второй тур'),
         period: t('schedule.tours.tour2.period', '21 – 28 июля'),
         stages: [
            {
               dates: t('schedule.tours.tour2.stage1.dates', '21-23 июля'),
               description: t('schedule.tours.tour2.stage1.description', 'Регистрация абитуриентов для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour2.stage2.dates', '23 июля в 14.00'),
               description: t('schedule.tours.tour2.stage2.description', 'Завершение регистрации для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour2.stage3.dates', '24 июля до 09.00'),
               description: t('schedule.tours.tour2.stage3.description', 'Размещение списков абитуриентов, рекомендованных к зачислению')
            },
            {
               dates: t('schedule.tours.tour2.stage4.dates', '24 – 28 июля до 16.00 ч.'),
               description: t('schedule.tours.tour2.stage4.description', 'Подтверждение абитуриентами желания быть зачисленным в вуз')
            }
         ]
      },
      {
         title: t('schedule.tours.tour3.title', 'Третий тур'),
         period: t('schedule.tours.tour3.period', '28 июль-04 августа'),
         stages: [
            {
               dates: t('schedule.tours.tour3.stage1.dates', '28-30 июль'),
               description: t('schedule.tours.tour3.stage1.description', 'Регистрация абитуриентов для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour3.stage2.dates', '31 июль в 14.00'),
               description: t('schedule.tours.tour3.stage2.description', 'Завершение регистрации для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour3.stage3.dates', '01 августа до 09.00'),
               description: t('schedule.tours.tour3.stage3.description', 'Размещение списков абитуриентов, рекомендованных к зачислению')
            },
            {
               dates: t('schedule.tours.tour3.stage4.dates', '02-04 августа до 16.00'),
               description: t('schedule.tours.tour3.stage4.description', 'Подтверждение абитуриентами желания быть зачисленным в вуз')
            }
         ]
      },
      {
         title: t('schedule.tours.tour4.title', 'Четвертый тур'),
         period: t('schedule.tours.tour4.period', '04 -11 августа'),
         stages: [
            {
               dates: t('schedule.tours.tour4.stage1.dates', '04-06 августа'),
               description: t('schedule.tours.tour4.stage1.description', 'Регистрация абитуриентов для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour4.stage2.dates', '07 августа в 14.00'),
               description: t('schedule.tours.tour4.stage2.description', 'Завершение регистрации для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour4.stage3.dates', '08 августа до 09.00'),
               description: t('schedule.tours.tour4.stage3.description', 'Размещение списков абитуриентов, рекомендованных к зачислению')
            },
            {
               dates: t('schedule.tours.tour4.stage4.dates', '08-11 августа до 16.00'),
               description: t('schedule.tours.tour4.stage4.description', 'Подтверждение абитуриентами желания быть зачисленным в вуз')
            }
         ]
      },
      {
         title: t('schedule.tours.tour5.title', 'Пятый тур'),
         period: t('schedule.tours.tour5.period', '11 – 17 августа'),
         stages: [
            {
               dates: t('schedule.tours.tour5.stage1.dates', '11-13 августа'),
               description: t('schedule.tours.tour5.stage1.description', 'Регистрация абитуриентов для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour5.stage2.dates', '14 августа в 14.00'),
               description: t('schedule.tours.tour5.stage2.description', 'Завершение регистрации для участия в конкурсе')
            },
            {
               dates: t('schedule.tours.tour5.stage3.dates', '15 августа до 09.00'),
               description: t('schedule.tours.tour5.stage3.description', 'Размещение списков абитуриентов, рекомендованных к зачислению')
            },
            {
               dates: t('schedule.tours.tour5.stage4.dates', '15-17 августа до 16.00'),
               description: t('schedule.tours.tour5.stage4.description', 'Подтверждение абитуриентами желания быть зачисленным в вуз')
            }
         ]
      }
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
                     backgroundImage: 'url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1920)',
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
                  <FiCalendar className="w-10 h-10" />
               </motion.div>
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
               >
                  {t('schedule.hero.title', 'График отбора и зачисления')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
               >
                  {t('schedule.hero.subtitle', 'Selection and Enrollment Schedule')}
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
               <div className="flex-1 space-y-8">
                  {/* Introduction */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('schedule.policy.title', 'Политика отбора и зачисления')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('schedule.policy.description', 'Салымбеков университет проводит политику отбора и зачисления абитуриентов в строгом соответствии с нормами и правилами Министерства образования и науки КР, который ежегодно формирует и публикует график проведения туров отбора и зачисления абитуриентов в высшие учебные заведения КР.')}
                     </p>
                  </motion.div>

                  {/* Main Title */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent text-center">
                        {t('schedule.mainTitle.title', 'График проведения туров отбора и зачисления абитуриентов')}
                     </h2>
                     <h3 className="text-xl font-semibold text-gray-600 text-center mb-2">
                        {t('schedule.mainTitle.subtitle', 'в высшие учебные заведения Кыргызской Республики')}
                     </h3>
                     <p className="text-lg text-gray-500 text-center">
                        {t('schedule.mainTitle.year', 'по итогам общереспубликанского тестирования на 2025-2026 учебный год')}
                     </p>
                  </motion.div>

                  {/* Tours */}
                  {tours.map((tour, tourIdx) => (
                     <motion.div
                        key={tourIdx}
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: tourIdx * 0.1 }}
                     >
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                              <span className="text-white text-2xl font-bold">{tourIdx + 1}</span>
                           </div>
                           <div>
                              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                                 {tour.title}
                              </h3>
                              <p className="text-lg text-gray-600 font-semibold mt-1">{tour.period}</p>
                           </div>
                        </div>

                        <div className="space-y-4">
                           {tour.stages.map((stage, stageIdx) => (
                              <motion.div
                                 key={stageIdx}
                                 className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:shadow-lg transition-all duration-300"
                                 initial={{ opacity: 0, x: -20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 viewport={{ once: true }}
                                 transition={{ delay: stageIdx * 0.1 }}
                                 whileHover={{ scale: 1.02 }}
                              >
                                 <div className="shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                                       {stageIdx === 0 || stageIdx === 1 ? (
                                          <FiClock className="w-5 h-5 text-white" />
                                       ) : (
                                          <FiCheckCircle className="w-5 h-5 text-white" />
                                       )}
                                    </div>
                                 </div>
                                 <div className="flex-1">
                                    <p className="font-bold text-[#023E8A] mb-1">{stage.dates}</p>
                                    <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </motion.div>
                  ))}

                  {/* Footer Note */}
                  <motion.div
                     className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl shadow-2xl p-8 md:p-12"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <div className="flex items-start gap-4 text-white">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                           <span className="text-white font-bold">*</span>
                        </div>
                        <p className="text-lg leading-relaxed">
                           {t('schedule.footerNote', 'На подтверждение в ЦООМО направляется общий список абитуриентов, подтвердивших свое желание обучаться в вузе по итогам всех туров зачисления (на грантовые и контрактные места).')}
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Schedule;