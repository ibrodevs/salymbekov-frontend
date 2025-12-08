import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiFileText, FiChevronDown, FiChevronUp, FiUsers, FiUserX, FiUserCheck } from 'react-icons/fi';

const AdmissionReg = () => {
   const { t } = useTranslation();
   const [expandedSections, setExpandedSections] = useState({});

   const toggleSection = (index) => {
      setExpandedSections(prev => ({
         ...prev,
         [index]: !prev[index]
      }));
   };

   const sections = [
      {
         title: t('admission.sections.section1.title'),
         icon: FiFileText,
         items: [
            {
               content: t('admission.sections.section1.content1')
            },
            {
               content: t('admission.sections.section1.content2')
            },
            {
               content: t('admission.sections.section1.content3')
            },
            {
               content: t('admission.sections.section1.content4')
            }
         ]
      },
      {
         title: t('admission.sections.section2.title'),
         icon: FiUsers,
         items: [
            {
               subtitle: t('admission.sections.section2.subtitle1'),
               points: [
                  t('admission.sections.section2.point1_1'),
                  t('admission.sections.section2.point1_2')
               ]
            },
            {
               subtitle: t('admission.sections.section2.subtitle2'),
               points: [
                  t('admission.sections.section2.point2_1')
               ]
            },
            {
               subtitle: t('admission.sections.section2.subtitle3'),
               points: [
                  t('admission.sections.section2.point3_1')
               ]
            },
            {
               subtitle: t('admission.sections.section2.subtitle4'),
               points: [
                  t('admission.sections.section2.point4_1')
               ]
            },
            {
               subtitle: t('admission.sections.section2.subtitle5'),
               points: [
                  t('admission.sections.section2.point5_1')
               ]
            },
            {
               subtitle: t('admission.sections.section2.subtitle6'),
               points: [
                  t('admission.sections.section2.point6_1')
               ]
            }
         ]
      },
      {
         title: t('admission.sections.section3.title'),
         icon: FiUserX,
         items: [
            {
               subtitle: t('admission.sections.section3.subtitle1'),
               points: [
                  t('admission.sections.section3.point1_1'),
                  t('admission.sections.section3.point1_2'),
                  t('admission.sections.section3.point1_3'),
                  t('admission.sections.section3.point1_4'),
                  t('admission.sections.section3.point1_5')
               ]
            },
            {
               subtitle: t('admission.sections.section3.subtitle2'),
               points: [
                  t('admission.sections.section3.point2_1'),
                  t('admission.sections.section3.point2_2'),
                  t('admission.sections.section3.point2_3'),
                  t('admission.sections.section3.point2_4'),
                  t('admission.sections.section3.point2_5'),
                  t('admission.sections.section3.point2_6'),
                  t('admission.sections.section3.point2_7')
               ]
            }
         ]
      },
      {
         title: t('admission.sections.section4.title'),
         icon: FiUserCheck,
         items: [
            {
               content: t('admission.sections.section4.content1')
            },
            {
               content: t('admission.sections.section4.content2')
            },
            {
               content: t('admission.sections.section4.content3')
            }
         ]
      }
   ];

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Hero Section */}
         <div className="relative z-10 text-center py-20 px-4">
            <div className="inline-block mb-6">
               <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
                  <FiFileText className="w-12 h-12 text-white" />
               </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] bg-clip-text text-transparent mb-4">
               {t('admission.hero.title')}
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               {t('admission.hero.subtitle')}
            </p>
         </div>

         {/* Main Content */}
         <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Right Content */}
               <div className="flex-1">
                  {/* Introduction */}
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 border border-white/20 relative overflow-hidden">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                           <FiFileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                           <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                              {t('admission.introduction.title')}
                           </h2>
                           <p className="text-gray-700 leading-relaxed">
                              {t('admission.introduction.description')}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Sections - Collapsible */}
                  {sections.map((section, sectionIndex) => {
                     const IconComponent = section.icon;
                     return (
                        <div
                           key={sectionIndex}
                           className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl mb-6 border border-white/20 overflow-hidden relative"
                        >
                           {/* Section Header - Clickable */}
                           <button
                              onClick={() => toggleSection(sectionIndex)}
                              className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-all duration-300 relative z-10 group"
                           >
                              <div className="flex items-center gap-3">
                                 <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                                    <IconComponent className="w-5 h-5 text-white" />
                                 </div>
                                 <h2 className="text-xl font-bold text-gray-800 text-left">
                                    {section.title}
                                 </h2>
                              </div>
                              <div className="text-[#0077B6]">
                                 {expandedSections[sectionIndex] ? (
                                    <FiChevronUp className="w-6 h-6" />
                                 ) : (
                                    <FiChevronDown className="w-6 h-6" />
                                 )}
                              </div>
                           </button>

                           {/* Section Content - Expandable */}
                           {expandedSections[sectionIndex] && (
                              <div className="overflow-hidden relative z-10">
                                 <div className="px-6 pb-6 space-y-6 border-t border-gray-100/50 pt-6">
                                    {section.items.map((item, itemIndex) => (
                                       <div key={itemIndex} className="group">
                                          {item.subtitle && (
                                             <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                <div className="p-1 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full shadow-md">
                                                   <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                {item.subtitle}
                                             </h3>
                                          )}
                                          {item.points ? (
                                             <ul className="space-y-2 ml-6">
                                                {item.points.map((point, pointIndex) => (
                                                   <li key={pointIndex} className="text-gray-700 flex items-start gap-3">
                                                      <span className="text-[#0077B6] mt-1.5 text-lg">
                                                         {point.startsWith('•') ? '' : '•'}
                                                      </span>
                                                      <span className="flex-1">{point}</span>
                                                   </li>
                                                ))}
                                             </ul>
                                          ) : (
                                             <p className="text-gray-700 ml-6">{item.content}</p>
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdmissionReg;