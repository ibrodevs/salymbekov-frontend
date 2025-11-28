import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiMonitor, FiBookOpen } from 'react-icons/fi';

const SoftwareNavigation = () => {
   const { t } = useTranslation();
   const location = useLocation();

   const navigationItems = [
      {
         path: '/applicants/software-development',
         label: t('extraNav.softwareDev', 'Разработка программного обеспечения'),
         icon: FiCode,
         color: 'from-[#023E8A] to-[#0077B6]'
      },
      {
         path: '/applicants/mobile-development',
         label: t('extraNav.mobileDev', 'Разработка мобильных приложений'),
         icon: FiSmartphone,
         color: 'from-[#0077B6] to-[#00B4D8]'
      },
      {
         path: '/applicants/multimedia-development',
         label: t('extraNav.multimediaDev', 'Разработка мультимедийных программ'),
         icon: FiMonitor,
         color: 'from-[#023E8A] to-[#48CAE4]'
      },
      {
         path: '/applicants/discipline',
         label: t('extraNav.disciplines', 'Дисциплины'),
         icon: FiBookOpen,
         color: 'from-[#0096C7] to-[#0077B6]'
      }
   ];

   return (
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 h-fit">
         <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('extraNav.collegePrograms', 'Программы колледжа')}
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
                        <span className="font-medium text-sm">{item.label}</span>
                     </Link>
                  </motion.div>
               );
            })}
         </nav>
      </div>
   );
};

export default SoftwareNavigation;
