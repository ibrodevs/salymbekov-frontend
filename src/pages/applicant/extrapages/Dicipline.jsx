import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SoftwareNavigation from './SoftwareNavigation';

const Discipline = () => {
   const { t, i18n } = useTranslation();

   const disciplines = [
      // 1 курс (без кредитов)
      {
         code: '1.17',
         name: t('disciplines.1_17', { defaultValue: 'Введение в специальность / Introduction to specialty' }),
         credits: null,
         course: 1
      },
      {
         code: '1.18./ COMP 107',
         name: t('disciplines.1_18', { defaultValue: 'Фундаментальные основы компьютера и программирования / Fundamental Computer Principle and Programming' }),
         credits: null,
         course: 1
      },
      {
         code: '1.19./ ENG 413',
         name: t('disciplines.1_19', { defaultValue: 'Иностранный язык / English' }),
         credits: null,
         course: 1
      },
      {
         code: '1.20./ COMP 277',
         name: t('disciplines.1_20', { defaultValue: 'Java программирование мобильная разработка / Java programming Mobile Development' }),
         credits: null,
         course: 1
      },
      {
         code: '1.21./ COMP 227',
         name: t('disciplines.1_21', { defaultValue: 'Веб-программирование и веб-дизайн и публикация / Web-programming and Web Design and Publishing' }),
         credits: null,
         course: 1
      },

      // 2 курс
      {
         code: '1.18./ COMP 107',
         name: t('disciplines.1_18', { defaultValue: 'Фундаментальные основы компьютера и программирования / Fundamental Computer Principle and Programming' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.1./DCM 116',
         name: t('disciplines.3_1_1', { defaultValue: 'Основы Интернета и приложения / Internet Fundamental and Applications' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.2./ DCM 114',
         name: t('disciplines.3_1_2', { defaultValue: 'Математика и статистика, связанные с компьютерами / Computer Related Mathematics and Statistics' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.3./ COMP 270',
         name: t('disciplines.3_1_3', { defaultValue: 'Объектно-ориентированное программирование / Object Oriented Programming' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.4./DCM 136',
         name: t('disciplines.3_1_4', { defaultValue: 'Операционные системы / Operating System' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.6./ DCM 217',
         name: t('disciplines.3_1_6', { defaultValue: 'Электронная коммерция / E-Commerce' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.7./ DCM 126',
         name: t('disciplines.3_1_7', { defaultValue: 'Веб-программирование и веб-дизайн и веб-публикация / Web-programming and Web Design and Publishing' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.5./ DCM 137',
         name: t('disciplines.3_1_5', { defaultValue: 'Система баз данных / Database System' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.8./ ENG 413',
         name: t('disciplines.3_1_8', { defaultValue: 'Иностранный язык 1 / English 1' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.9./ DCM 254',
         name: t('disciplines.3_1_9', { defaultValue: 'Структура данных и алгоритм / Data Structure and Algorithm' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.10./ DCM 228',
         name: t('disciplines.3_1_10', { defaultValue: 'Java программирование / Java programming Mobile Development' }),
         credits: 3,
         course: 2
      },
      {
         code: '3.1.11./ COMP 216',
         name: t('disciplines.3_1_11', { defaultValue: 'Введение в язык С++ / Introduction to C++ Language' }),
         credits: 3,
         course: 2
      },

      // 3 курс
      {
         code: '3.1.13./ BMNG 377',
         name: t('disciplines.3_1_13', { defaultValue: 'Организационное поведение / Organizational Behavior' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.14./ ENG 423',
         name: t('disciplines.3_1_14', { defaultValue: 'Иностранный язык 2 / English 2' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.15./ COMP 111',
         name: t('disciplines.3_1_15', { defaultValue: 'Программная инженерия / Software Engineering' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.16./ MPU 2113',
         name: t('disciplines.3_1_16', { defaultValue: 'Малазийский язык / Malaysian Studies 1' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.17./ MPU 2153',
         name: t('disciplines.3_1_17', { defaultValue: 'Малазийский язык общения / Malay Language Studies 2' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.18./ COMP 333',
         name: t('disciplines.3_1_18', { defaultValue: 'Исчисление / Calculus' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.19./ MPU 2222',
         name: t('disciplines.3_1_19', { defaultValue: 'Количественные методы / Quantitative Methods' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.1.20./ DCM 246',
         name: t('disciplines.3_1_20', { defaultValue: 'Визуальное программирование / Visual Programming' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.1.',
         name: t('disciplines.3_2_1', { defaultValue: 'Иностранный язык / English' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.2/ BMIS 263',
         name: t('disciplines.3_2_2', { defaultValue: 'Система управленческой информации / Management Information System' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.3.',
         name: t('disciplines.3_2_3', { defaultValue: 'Технический иностранный язык / Digital English language' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.4.',
         name: t('disciplines.3_2_4', { defaultValue: 'Системный анализ и дизайн / System Analysis and Design' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.5. / DCM 127',
         name: t('disciplines.3_2_5', { defaultValue: 'Творческое решение проблем / Creative Problem Solving' }),
         credits: 2,
         course: 3
      },
      {
         code: '3.2.6. / PR101',
         name: t('disciplines.3_2_6', { defaultValue: 'Связь с общественностью и реклама / Public Relation' }),
         credits: 2,
         course: 3
      },
      {
         code: '3.2.7. / MPU 2332',
         name: t('disciplines.3_2_7', { defaultValue: 'Конституция и общество / Constitution and Society' }),
         credits: 2,
         course: 3
      },
      {
         code: '3.2.8./ COMP 264',
         name: t('disciplines.3_2_8', { defaultValue: 'Компьютерная безопасность / Computer Security' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.9. / COMP 323',
         name: t('disciplines.3_2_9', { defaultValue: 'Компьютерная этика / Computer Ethics' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.10. / COMP 253',
         name: t('disciplines.3_2_10', { defaultValue: 'Взаимодействие компьютера и человека / Human Computer Interaction' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.11. / MPU 2442',
         name: t('disciplines.3_2_11', { defaultValue: 'Общественные деятельность / Community Service' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.12. / DCM 243',
         name: t('disciplines.3_2_12', { defaultValue: 'Мультимедийная система управления / Multimedia Management System' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.13 /COMP 220',
         name: t('disciplines.3_2_13', { defaultValue: 'Передача данных и создание сетей / Data Communication and Networking' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.14.',
         name: t('disciplines.3_2_14', { defaultValue: 'Создание тематического веб-проекта / Creation of a thematic web-project' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.16.',
         name: t('disciplines.3_2_16', { defaultValue: 'Менеджмент IT продукта / Business promotion of IT-product' }),
         credits: 3,
         course: 3
      },
      {
         code: '3.2.17.',
         name: t('disciplines.3_2_17', { defaultValue: 'UX/UI- Дизайн / UX/UI- Design' }),
         credits: 2,
         course: 3
      },
   ];

   const course1 = disciplines.filter(d => d.course === 1);
   const course2 = disciplines.filter(d => d.course === 2);
   const course3 = disciplines.filter(d => d.course === 3);

   const tableRowVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.3,
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
                     backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920)',
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
                  {t('discipline.title')}
               </motion.h1>
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
               <div className="flex-1">
                  {/* Info Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.4 }}
                  >
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {t('discipline.info')}
                     </p>
                     <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                           className="flex items-center gap-3"
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.4, delay: 0.1 }}
                        >
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📅</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('discipline.duration')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('discipline.durationValue')}</p>
                           </div>
                        </motion.div>
                        <motion.div
                           className="flex items-center gap-3"
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.4, delay: 0.1 }}
                        >
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] flex items-center justify-center">
                              <span className="text-white font-bold text-xl">📝</span>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">{t('discipline.admission')}</p>
                              <p className="text-xl font-bold text-gray-800">{t('discipline.admissionValue')}</p>
                           </div>
                        </motion.div>
                     </div>
                  </motion.div>

                  {/* 1st Course Disciplines */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.4 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('discipline.course1')}
                     </h2>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.number')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.code')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.subject')}</th>
                                 <th className="text-center py-3 px-4 font-semibold text-gray-700">{t('discipline.table.credits')}</th>
                              </tr>
                           </thead>
                           <tbody>
                              {course1.map((discipline, index) => (
                                 <motion.tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                                    variants={tableRowVariants}
                                    initial="hidden"
                                    whileInView="visible"
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
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.4 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('discipline.course2')}
                     </h2>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.number')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.code')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.subject')}</th>
                                 <th className="text-center py-3 px-4 font-semibold text-gray-700">{t('discipline.table.credits')}</th>
                              </tr>
                           </thead>
                           <tbody>
                              {course2.map((discipline, index) => (
                                 <motion.tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                                    variants={tableRowVariants}
                                    initial="hidden"
                                    whileInView="visible"
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
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.4 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('discipline.course3')}
                     </h2>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.number')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.code')}</th>
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('discipline.table.subject')}</th>
                                 <th className="text-center py-3 px-4 font-semibold text-gray-700">{t('discipline.table.credits')}</th>
                              </tr>
                           </thead>
                           <tbody>
                              {course3.map((discipline, index) => (
                                 <motion.tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                                    variants={tableRowVariants}
                                    initial="hidden"
                                    whileInView="visible"
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

export default Discipline;