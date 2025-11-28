import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiBookOpen, FiDollarSign, FiClipboard, FiAward, FiStar, FiCalendar, FiCheckCircle, FiCompass, FiMapPin, FiRepeat, FiUserCheck } from 'react-icons/fi';

const ApplicantBase = () => {
   const { t } = useTranslation();

   const animatedBalls = useMemo(() => {
      return [...Array(12)].map((_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 5 + Math.random() * 3,
         delay: Math.random() * 2
      }));
   }, []);

   const sections = [
      {
         id: 1,
         title: t('applicant.applicantBase.commission.title', 'Приемная комиссия'),
         description: t('applicant.applicantBase.commission.description', 'Информация о приемной комиссии университета'),
         icon: FiUsers,
         link: '/applicants/commission',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 2,
         title: t('applicant.applicantBase.directions.title', 'Направления подготовки'),
         description: t('applicant.applicantBase.directions.description', 'Все направления и специальности обучения'),
         icon: FiBookOpen,
         link: '/applicants/directions',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 3,
         title: t('applicant.applicantBase.cost.title', 'Стоимость обучения'),
         description: t('applicant.applicantBase.cost.description', 'Актуальные цены и условия оплаты'),
         icon: FiDollarSign,
         link: '/applicants/cost',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 5,
         title: t('applicant.applicantBase.scholarships.title', 'Стипендии и льготы'),
         description: t('applicant.applicantBase.scholarships.description', 'Информация о стипендиях для студентов'),
         icon: FiAward,
         link: '/applicants/scholarships',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 6,
         title: t('applicant.applicantBase.adaptation.title', 'Адаптационная программа'),
         description: t('applicant.applicantBase.adaptation.description', 'Программа адаптации для первокурсников'),
         icon: FiStar,
         link: '/applicants/adaptation',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 7,
         title: t('applicant.applicantBase.admissionRules.title', 'Правила и план приема'),
         description: t('applicant.applicantBase.admissionRules.description', 'Официальные правила и план приема'),
         icon: FiCheckCircle,
         link: '/applicants/admission-rules',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 8,
         title: t('applicant.applicantBase.ort.title', 'Прием по ОРТ'),
         description: t('applicant.applicantBase.ort.description', 'Информация о приеме по результатам ОРТ'),
         icon: FiCalendar,
         link: '/applicants/ort',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 9,
         title: t('applicant.applicantBase.careerGuidance.title', 'Профориентация'),
         description: t('applicant.applicantBase.careerGuidance.description', 'Помощь в выборе профессии'),
         icon: FiCompass,
         link: '/applicants/career-guidance',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 10,
         title: t('applicant.applicantBase.transfer.title', 'Порядок перевода'),
         description: t('applicant.applicantBase.transfer.description', 'Перевод из других вузов'),
         icon: FiRepeat,
         link: '/applicants/transfer/documents',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 11,
         title: t('applicant.applicantBase.dealers.title', 'Официальные дилеры'),
         description: t('applicant.applicantBase.dealers.description', 'Наши партнеры и представители'),
         icon: FiUserCheck,
         link: '/applicants/dealers',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 12,
         title: t('applicant.applicantBase.infrastructure.title', 'Инфраструктура университета'),
         description: t('applicant.applicantBase.infrastructure.description', 'Кампус, общежития и удобства'),
         icon: FiMapPin,
         link: '/applicants/infrastructure',
         color: 'from-blue-500 to-cyan-500'
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.08
         }
      }
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5
         }
      }
   };

   return (
      <div className="w-full relative min-h-screen bg-gray-50">
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

         <div className="relative z-10 py-16 px-4">
            <div className="max-w-7xl mx-auto">
               {/* Header */}
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
               >
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">
                     {t('applicant.applicantBase.title', 'Абитуриенту')}
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     {t('applicant.applicantBase.subtitle', 'Вся необходимая информация для поступления в Университет Салымбекова')}
                  </p>
               </motion.div>

               {/* Sections Grid */}
               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
               >
                  {sections.map((section) => {
                     const IconComponent = section.icon;
                     return (
                        <motion.div key={section.id} variants={itemVariants}>
                           <Link to={section.link}>
                              <motion.div
                                 whileHover={{ y: -10 }}
                                 whileTap={{ scale: 0.98 }}
                                 className="group relative bg-white rounded-3xl overflow-hidden h-full cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
                              >
                                 {/* Gradient Background Overlay */}
                                 <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                 {/* Card Content */}
                                 <div className="relative p-8">
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                       <motion.div
                                          whileHover={{ rotate: 360, scale: 1.1 }}
                                          transition={{ duration: 0.6 }}
                                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.color} shadow-lg`}
                                       >
                                          <IconComponent size={40} className="text-white" />
                                       </motion.div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                                       {section.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                       {section.description}
                                    </p>

                                    {/* Decorative Line */}
                                    <motion.div
                                       initial={{ width: "0%" }}
                                       whileHover={{ width: "100%" }}
                                       className={`h-1 bg-gradient-to-r ${section.color} rounded-full mb-4`}
                                    />

                                    {/* Learn More Link */}
                                    <div className="flex items-center justify-between">
                                       <span className={`text-sm font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                                          {t('applicant.applicantBase.learnMore', 'Подробнее')}
                                       </span>
                                       <motion.div
                                          animate={{ x: [0, 5, 0] }}
                                          transition={{ duration: 1.5, repeat: Infinity }}
                                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center shadow-md`}
                                       >
                                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                       </motion.div>
                                    </div>
                                 </div>

                                 {/* Decorative Corner Elements */}
                                 <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.color} opacity-10 rounded-bl-full`}></div>
                                 <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${section.color} opacity-10 rounded-tr-full`}></div>
                              </motion.div>
                           </Link>
                        </motion.div>
                     );
                  })}
               </motion.div>

               {/* Additional Info Section */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
               >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                     {t('applicant.applicantBase.advantages.title', 'Почему выбирают нас')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm">
                        <div className="text-5xl font-bold text-blue-600 mb-2">
                           {t('applicant.applicantBase.advantages.programs', '25+')}
                        </div>
                        <p className="text-gray-600 font-medium">
                           {t('applicant.applicantBase.advantages.programsText', 'образовательных программ')}
                        </p>
                     </div>
                     <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm">
                        <div className="text-5xl font-bold text-blue-600 mb-2">
                           {t('applicant.applicantBase.advantages.students', '5000+')}
                        </div>
                        <p className="text-gray-600 font-medium">
                           {t('applicant.applicantBase.advantages.studentsText', 'студентов обучается')}
                        </p>
                     </div>
                     <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm">
                        <div className="text-5xl font-bold text-blue-600 mb-2">
                           {t('applicant.applicantBase.advantages.employment', '95%')}
                        </div>
                        <p className="text-gray-600 font-medium">
                           {t('applicant.applicantBase.advantages.employmentText', 'трудоустройство выпускников')}
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default ApplicantBase;