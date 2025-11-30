import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiFileText } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const AdmissionCom = () => {
   const [expandedSections, setExpandedSections] = useState({});
   const { t } = useTranslation();

   const toggleSection = (index) => {
      setExpandedSections(prev => ({
         ...prev,
         [index]: !prev[index]
      }));
   };

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

   const sections = [
      {
         key: 'section1',
         items: [
            { number: '2.1', key: '2.1' },
            { number: '2.2', key: '2.2' },
            { number: '2.3', key: '2.3' },
            { number: '2.4', key: '2.4' },
            { number: '2.5', key: '2.5' }
         ]
      },
      {
         key: 'section2',
         items: [
            {
               number: '9.1',
               key: '9.1',
               subItems: true
            }
         ]
      },
      {
         key: 'section3',
         items: [
            { number: '10.1', key: '10.1' },
            { number: '10.2', key: '10.2' },
            {
               number: '10.3',
               key: '10.3',
               subItems: true
            },
            {
               number: '10.4',
               key: '10.4',
               subItems: true
            },
            { number: '10.5', key: '10.5' },
            { number: '10.6', key: '10.6' },
            { number: '10.7', key: '10.7' },
            { number: '10.8', key: '10.8' },
            { number: '10.9', key: '10.9' }
         ]
      },
      {
         key: 'section4',
         items: [
            { number: '11.1', key: '11.1' },
            {
               number: '11.2',
               key: '11.2',
               subItems: true
            },
            { number: '11.3', key: '11.3' },
            { number: '11.4', key: '11.4' },
            { number: '11.5', key: '11.5' },
            { number: '11.6', key: '11.6' },
            { number: '11.7', key: '11.7' },
            { number: '11.8', key: '11.8' },
            { number: '11.9', key: '11.9' },
            { number: '11.10', key: '11.10' },
            { number: '11.11', key: '11.11' }
         ]
      },
      {
         key: 'section5',
         items: [
            {
               number: '12.1',
               key: '12.1',
               subItems: true
            },
            { number: '12.2', key: '12.2' },
            { number: '12.3', key: '12.3' },
            { number: '12.4', key: '12.4' },
            { number: '12.5', key: '12.5' },
            { number: '12.6', key: '12.6' },
            { number: '12.7', key: '12.7' },
            { number: '12.8', key: '12.8' },
            { number: '12.9', key: '12.9' }
         ]
      },
      {
         key: 'section6',
         items: [
            { number: '14.1', key: '14.1' },
            { number: '14.2', key: '14.2' },
            { number: '14.3', key: '14.3' },
            {
               number: '14.4',
               key: '14.4',
               subItems: true
            },
            { number: '14.5', key: '14.5' },
            { number: '14.6', key: '14.6' },
            { number: '14.7', key: '14.7' }
         ]
      },
      {
         key: 'section7',
         items: [
            { number: '15.1', key: '15.1' },
            { number: '15.2', key: '15.2' },
            { number: '15.3', key: '15.3' },
            { number: '15.4', key: '15.4' },
            { number: '15.5', key: '15.5' }
         ]
      },
      {
         key: 'section8',
         items: [
            { number: '16.1', key: '16.1' },
            { number: '16.2', key: '16.2' }
         ]
      }
   ];

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
               Положение приема
            </motion.h1>
            <motion.p
               className="text-xl md:text-2xl text-blue-100"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
            >
               Правила и порядок приема в университет
            </motion.p>
         </div>
      </motion.div>         {/* Content Section */}
         <div className="relative z-10 container mx-auto px-4 -mt-20 pb-20">
            <div className="space-y-6">
               {sections.map((section, sectionIndex) => (
                  <motion.div
                     key={sectionIndex}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
                     className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                  >
                     <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                     >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-left">
                           {t(`admission.sections.${section.key}.title`) || `Section ${sectionIndex + 1}`}
                        </h2>
                        <div className="text-[#0077B6] flex-shrink-0 ml-4">
                           {expandedSections[sectionIndex] ? (
                              <FiChevronUp className="w-8 h-8" />
                           ) : (
                              <FiChevronDown className="w-8 h-8" />
                           )}
                        </div>
                     </button>

                     <AnimatePresence>
                        {expandedSections[sectionIndex] && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                           >
                              <div className="px-8 pb-8 space-y-6 border-t border-gray-200 pt-8">
                                 {section.items.map((item, itemIndex) => (
                                    <motion.div
                                       key={itemIndex}
                                       initial={{ opacity: 0, x: -20 }}
                                       animate={{ opacity: 1, x: 0 }}
                                       transition={{ delay: itemIndex * 0.05, duration: 0.3 }}
                                       className="space-y-3"
                                    >
                                       <div className="flex items-start gap-4">
                                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                             {item.number}
                                          </div>
                                          <div className="flex-1">
                                             <p className="text-gray-800 text-lg leading-relaxed">
                                                {t(`admission.sections.${section.key}.items.${item.key}`) || 'No translation available'}
                                             </p>

                                             {item.subItems && (
                                                <ul className="mt-4 space-y-2 ml-4">
                                                   {t(`admission.sections.${section.key}.items.${item.key}.subItems`, { returnObjects: true })?.map((subItem, subIndex) => (
                                                      <li key={subIndex} className="flex items-start gap-3 text-gray-700">
                                                         <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                                                         <span>{subItem}</span>
                                                      </li>
                                                   ))}
                                                </ul>
                                             )}
                                          </div>
                                       </div>
                                    </motion.div>
                                 ))}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default AdmissionCom;