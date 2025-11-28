import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
   FiFileText,
   FiUsers,
   FiBook,
   FiAward,
   FiTrendingUp,
   FiMapPin,
   FiCalendar,
   FiHelpCircle,
   FiChevronDown,
   FiChevronRight,
   FiDollarSign,
   FiBookOpen
} from 'react-icons/fi';

const ExtraNavigation = () => {
   const { t } = useTranslation();
   const location = useLocation();
   const [isHowToApplyOpen, setIsHowToApplyOpen] = useState(true);

   const navigationItems = [
      {
         path: '/applicants/software-development',
         label: t('extraNav.softwareDev', 'Разработка программного обеспечения'),
         icon: FiBook,
         color: 'from-[#023E8A] to-[#0077B6]'
      },
      {
         path: '/applicants/mobile-development',
         label: t('extraNav.mobileDev', 'Разработка мобильных приложений'),
         icon: FiUsers,
         color: 'from-[#0077B6] to-[#00B4D8]'
      },
      {
         path: '/applicants/multimedia-development',
         label: t('extraNav.multimediaDev', 'Разработка мультимедийных программ'),
         icon: FiFileText,
         color: 'from-[#023E8A] to-[#48CAE4]'
      },
      {
         path: '/applicants/discipline',
         label: t('extraNav.disciplines', 'Дисциплины'),
         icon: FiBook,
         color: 'from-[#023E8A] to-[#0077B6]'
      },
      {
         path: '/applicants/general-medicine-5',
         label: t('extraNav.generalMed5', 'Лечебное дело 5 лет'),
         icon: FiAward,
         color: 'from-[#0096C7] to-[#0077B6]'
      },
      {
         path: '/applicants/general-medicine-6',
         label: t('extraNav.generalMed6', 'Лечебное дело 6 лет'),
         icon: FiTrendingUp,
         color: 'from-[#00B4D8] to-[#023E8A]'
      },
      {
         path: '/applicants/directions',
         label: t('extraNav.directions', 'Направления подготовки'),
         icon: FiBookOpen,
         color: 'from-[#023E8A] to-[#0077B6]'
      },
      {
         path: '/applicants/cost',
         label: t('extraNav.cost', 'Стоимость обучения'),
         icon: FiDollarSign,
         color: 'from-[#0077B6] to-[#00B4D8]'
      },
      {
         path: '/applicants/scholarships',
         label: t('extraNav.scholarships', 'Стипендии и льготы'),
         icon: FiAward,
         color: 'from-[#023E8A] to-[#48CAE4]'
      },
      {
         path: '/applicants/admission/schedule',
         label: t('extraNav.schedule', 'График отбора и зачисления'),
         icon: FiCalendar,
         color: 'from-[#0096C7] to-[#0077B6]'
      }
   ];

   const howToApplySubItems = [
      {
         path: '/applicants/required-documents',
         label: t('extraNav.requiredDocs', 'Необходимые документы для поступления'),
         icon: FiFileText,
         color: 'from-[#0077B6] to-[#48CAE4]'
      },
      {
         path: '/applicants/online-registration',
         label: t('extraNav.onlineReg', 'ОНЛАЙН РЕГИСТРАЦИЯ'),
         icon: FiCalendar,
         color: 'from-[#00B4D8] to-[#0077B6]'
      }
   ];

   return (
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 h-fit">
         <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('extraNav.title', 'Навигация для абитуриентов')}
         </h3>
         <nav className="space-y-2">
            {navigationItems.map((item, index) => {
               const isActive = location.pathname === item.path;
               const Icon = item.icon;

               return (
                  <motion.div
                     key={item.path}
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: index * 0.05 }}
                  >
                     <Link
                        to={item.path}
                        className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive
                              ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg'
                              : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                           }
                `}
                     >
                        <div className={`
                  p-2 rounded-lg transition-all duration-300
                  ${isActive
                              ? 'bg-white/20'
                              : 'bg-gradient-to-br ' + item.color + ' text-white'
                           }
                `}>
                           <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                     </Link>
                  </motion.div>
               );
            })}

            {/* Как к нам поступить - Section with subitems */}
            <motion.div
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: navigationItems.length * 0.05 }}
               className="pt-2"
            >
               <button
                  onClick={() => setIsHowToApplyOpen(!isHowToApplyOpen)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900"
               >
                  <div className="flex items-center gap-3">
                     <div className="p-2 rounded-lg bg-gradient-to-br from-[#023E8A] to-[#0096C7] text-white">
                        <FiHelpCircle className="w-5 h-5" />
                     </div>
                     <span className="font-medium">{t('extraNav.howToApply', 'Как к нам поступить')}</span>
                  </div>
                  {isHowToApplyOpen ? (
                     <FiChevronDown className="w-5 h-5" />
                  ) : (
                     <FiChevronRight className="w-5 h-5" />
                  )}
               </button>

               {/* Subitems */}
               {isHowToApplyOpen && (
                  <div className="ml-6 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                     {howToApplySubItems.map((subItem, index) => {
                        const isActive = location.pathname === subItem.path;
                        const SubIcon = subItem.icon;

                        return (
                           <motion.div
                              key={subItem.path}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.05 }}
                           >
                              <Link
                                 to={subItem.path}
                                 className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm
                        ${isActive
                                       ? 'bg-gradient-to-r ' + subItem.color + ' text-white shadow-lg'
                                       : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                                    }
                      `}
                              >
                                 <div className={`
                        p-1.5 rounded-lg transition-all duration-300
                        ${isActive
                                       ? 'bg-white/20'
                                       : 'bg-gradient-to-br ' + subItem.color + ' text-white'
                                    }
                      `}>
                                    <SubIcon className="w-4 h-4" />
                                 </div>
                                 <span className="font-medium">{subItem.label}</span>
                              </Link>
                           </motion.div>
                        );
                     })}
                  </div>
               )}
            </motion.div>
         </nav>
      </div>
   );
};

export default ExtraNavigation;
