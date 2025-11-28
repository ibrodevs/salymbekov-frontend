import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SoftwareNavigation from './SoftwareNavigation';

const Dicipline = () => {
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

   const disciplines = [
      // 1 курс (без кредитов)
      { code: '1.17', name: 'Введение в специальность / Introduction to specialty', credits: null, course: 1 },
      { code: '1.18./ COMP 107', name: 'Фундаментальные основы компьютера и программирования / Fundamental Computer Principle and Programming', credits: null, course: 1 },
      { code: '1.19./ ENG 413', name: 'Иностранный язык / English', credits: null, course: 1 },
      { code: '1.20./ COMP 277', name: 'Java программирование мобильная разработка / Java programming Mobile Development', credits: null, course: 1 },
      { code: '1.21./ COMP 227', name: 'Веб-программирование и веб-дизайн и публикация / Web-programming and Web Design and Publishing', credits: null, course: 1 },

      // 2 курс
      { code: '1.18./ COMP 107', name: 'Фундаментальные основы компьютера и программирования / Fundamental Computer Principle and Programming', credits: 3, course: 2 },
      { code: '3.1.1./DCM 116', name: 'Основы Интернета и приложения / Internet Fundamental and Applications', credits: 3, course: 2 },
      { code: '3.1.2./ DCM 114', name: 'Математика и статистика, связанные с компьютерами / Сomputer Related Mathematics and Statistics', credits: 3, course: 2 },
      { code: '3.1.3./ COMP 270', name: 'Объектно-ориентированное программирование / Object Oriented Programming', credits: 3, course: 2 },
      { code: '3.1.4./DCM 136', name: 'Операционные системы / Operating System', credits: 3, course: 2 },
      { code: '3.1.6./ DCM 217', name: 'Электронная коммерция / E- Comerce', credits: 3, course: 2 },
      { code: '3.1.7./ DCM 126', name: 'Веб-программирование и веб-дизайн и веб-публикация / Web-programming and Web Design and Publishing', credits: 3, course: 2 },
      { code: '3.1.5./ DCM 137', name: 'Cистема баз данных / Database System', credits: 3, course: 2 },
      { code: '3.1.8./ ENG 413', name: 'Иностранный язык 1 / English 1', credits: 3, course: 2 },
      { code: '3.1.9./ DCM 254', name: 'Структура данных и алгоритм / Data Structure and Algorithm', credits: 3, course: 2 },
      { code: '3.1.10./ DCM 228', name: 'Java программирование / Java programming Mobile Development', credits: 3, course: 2 },
      { code: '3.1.11./ COMP 216', name: 'Введение в язык С++ / Introduction to C++ Language', credits: 3, course: 2 },

      // 3 курс
      { code: '3.1.13./ BMNG 377', name: 'Организационное поведение / Organizational Behavior', credits: 3, course: 3 },
      { code: '3.1.14./ ENG 423', name: 'Иностранный язык 2 / English 2', credits: 3, course: 3 },
      { code: '3.1.15./ COMP 111', name: 'Программная инженерия / Software Engineering', credits: 3, course: 3 },
      { code: '3.1.16./ MPU 2113', name: 'Малазийский язык / Malasyan Studies 1', credits: 3, course: 3 },
      { code: '3.1.17./ MPU 2153', name: 'Малазийский язык общения / Malay Language Studies 2', credits: 3, course: 3 },
      { code: '3.1.18./ COMP 333', name: 'Исчисление / Calculus', credits: 3, course: 3 },
      { code: '3.1.19./ MPU 2222', name: 'Количественные методы / Quantitative Methods', credits: 3, course: 3 },
      { code: '3.1.20./ DCM 246', name: 'Визуальное программирование / Visual Programming', credits: 3, course: 3 },
      { code: '3.2.1.', name: 'Иностранный язык / English', credits: 3, course: 3 },
      { code: '3.2.2/ BMIS 263', name: 'Система управленческой информации / Management Information System', credits: 3, course: 3 },
      { code: '3.2.3.', name: 'Технический иностранный язык / Digital English language', credits: 3, course: 3 },
      { code: '3.2.4.', name: 'Системный анализ и дизайн / System Analysis and Design', credits: 3, course: 3 },
      { code: '3.2.5. / DCM 127', name: 'Творческое решение проблем / Creative Problem Solving', credits: 2, course: 3 },
      { code: '3.2.6. / PR101', name: 'Связь с общественностью и реклама/ Public Relation', credits: 2, course: 3 },
      { code: '3.2.7. / MPU 2332', name: 'Конституция и общество / Constitution and Society', credits: 2, course: 3 },
      { code: '3.2.8./ COMP 264', name: 'Компьютерная безопасность / Computer Security', credits: 3, course: 3 },
      { code: '3.2.9. / COMP 323', name: 'Компьютерная этика / Computer Ethics', credits: 3, course: 3 },
      { code: '3.2.10. / COMP 253', name: 'Взаимодействие компьютера и человека / Human Computer Interaction', credits: 3, course: 3 },
      { code: '3.2.11. / MPU 2442', name: 'Общественные деятельность / Community Service', credits: 3, course: 3 },
      { code: '3.2.12. / DCM 243', name: 'Мультимедийная система управления / Multimedia Management System', credits: 3, course: 3 },
      { code: '3.2.13 /COMP 220', name: 'Передача данных и создание сетей / Data Communication and Networking', credits: 3, course: 3 },
      { code: '3.2.14.', name: 'Создание тематического веб-проекта/ Creation of a thematic web-project', credits: 3, course: 3 },
      { code: '3.2.16.', name: 'Менеджмент IT продукта / Business promotion of IT-product', credits: 3, course: 3 },
      { code: '3.2.17.', name: 'UX/UI- Дизайн / UX/UI- Design', credits: 2, course: 3 },
   ];

   const course1 = disciplines.filter(d => d.course === 1);
   const course2 = disciplines.filter(d => d.course === 2);
   const course3 = disciplines.filter(d => d.course === 3);

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
                     backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920)',
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
                  {t('discipline.title', 'Дисциплины')}
               </motion.h1>
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
                  {/* Info Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {t('discipline.info', 'Международный колледж IT и бизнеса готовит качественных специалистов в области разработки программного обеспечения, разработки мобильных приложений и мультимедийных систем.')}
                     </p>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📅</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('discipline.duration', 'Срок обучения')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('discipline.durationValue', '18 месяцев')}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📝</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('discipline.admission', 'Поступление')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('discipline.admissionValue', 'Июнь, Июль, Август')}</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  {/* 1st Course Disciplines */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('discipline.course1', '1 курс')}
                     </h2>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.number', '№')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.code', 'Код')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.subject', 'Дисциплина')}</th>
                                 <th className="text-center py-3 px-4 font-semibold text-gray-700">{t('discipline.table.credits', 'Кредиты')}</th>
                              </tr>
                           </thead>
                           <tbody>
                              {course1.map((discipline, index) => (
                                 <motion.tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                 >
                                    <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                                    <td className="py-3 px-4 text-sm text-gray-500">{discipline.code}</td>
                                    <td className="py-3 px-4 text-gray-800">{discipline.name}</td>
                                    <td className="py-3 px-4 text-center">
                                       {discipline.credits ? (
                                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-bold">
                                             {discipline.credits}
                                          </span>
                                       ) : (
                                          <span className="text-gray-400">—</span>
                                       )}
                                    </td>
                                 </motion.tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </motion.div>

                  {/* 2nd Course Disciplines */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('discipline.course2', '2 курс')}
                     </h2>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.number', '№')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.code', 'Код')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.subject', 'Дисциплина')}</th>
                                 <th className="text-center py-3 px-4 font-semibold text-gray-700">{t('discipline.table.credits', 'Кредиты')}</th>
                              </tr>
                           </thead>
                           <tbody>
                              {course2.map((discipline, index) => (
                                 <motion.tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                 >
                                    <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                                    <td className="py-3 px-4 text-sm text-gray-500">{discipline.code}</td>
                                    <td className="py-3 px-4 text-gray-800">{discipline.name}</td>
                                    <td className="py-3 px-4 text-center">
                                       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-bold">
                                          {discipline.credits}
                                       </span>
                                    </td>
                                 </motion.tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </motion.div>

                  {/* 3rd Course Disciplines */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('discipline.course3', '3 курс')}
                     </h2>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.number', '№')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.code', 'Код')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.subject', 'Дисциплина')}</th>
                                 <th className="text-center py-3 px-4 font-semibold text-gray-700">{t('discipline.table.credits', 'Кредиты')}</th>
                              </tr>
                           </thead>
                           <tbody>
                              {course3.map((discipline, index) => (
                                 <motion.tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                 >
                                    <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                                    <td className="py-3 px-4 text-sm text-gray-500">{discipline.code}</td>
                                    <td className="py-3 px-4 text-gray-800">{discipline.name}</td>
                                    <td className="py-3 px-4 text-center">
                                       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-bold">
                                          {discipline.credits}
                                       </span>
                                    </td>
                                 </motion.tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dicipline;