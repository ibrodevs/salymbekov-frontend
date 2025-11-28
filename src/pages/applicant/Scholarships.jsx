import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FiAward, FiUsers, FiBook, FiFileText, FiCalendar, FiHelpCircle, FiChevronDown, FiChevronRight, FiTrendingUp } from 'react-icons/fi';

const Scholarships = () => {
   const { t } = useTranslation();
   const location = useLocation();
   const [isHowToApplyOpen, setIsHowToApplyOpen] = useState(true);

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

   const navigationItems = [
      {
         path: '/applicants/software-development',
         label: t('scholarships.navigation.software', 'Разработка программного обеспечения'),
         icon: FiBook,
         color: 'from-[#023E8A] to-[#0077B6]'
      },
      {
         path: '/applicants/mobile-development',
         label: t('scholarships.navigation.mobile', 'Разработка мобильных приложений'),
         icon: FiUsers,
         color: 'from-[#0077B6] to-[#00B4D8]'
      },
      {
         path: '/applicants/multimedia-development',
         label: t('scholarships.navigation.multimedia', 'Разработка мультимедийных программ'),
         icon: FiFileText,
         color: 'from-[#023E8A] to-[#48CAE4]'
      },
      {
         path: '/applicants/general-medicine-5',
         label: t('scholarships.navigation.medicine5', 'Лечебное дело 5 лет'),
         icon: FiAward,
         color: 'from-[#0096C7] to-[#0077B6]'
      },
      {
         path: '/applicants/general-medicine-6',
         label: t('scholarships.navigation.medicine6', 'Лечебное дело 6 лет'),
         icon: FiTrendingUp,
         color: 'from-[#00B4D8] to-[#023E8A]'
      }
   ];

   const howToApplySubItems = [
      {
         path: '/applicants/required-documents',
         label: t('scholarships.navigation.documents', 'Необходимые документы для поступления'),
         icon: FiFileText,
         color: 'from-[#0077B6] to-[#48CAE4]'
      },
      {
         path: '/applicants/online-registration',
         label: t('scholarships.navigation.registration', 'ОНЛАЙН РЕГИСТРАЦИЯ'),
         icon: FiCalendar,
         color: 'from-[#00B4D8] to-[#0077B6]'
      }
   ];

   const categories = [
      {
         title: t('scholarships.categories.category1.title', 'I категория'),
         description: t('scholarships.categories.category1.description', 'Студенты очной формы обучения, закончившие учебный год по всем дисциплинам только на «отлично».')
      },
      {
         title: t('scholarships.categories.category2.title', 'II категория'),
         description: t('scholarships.categories.category2.description', 'Студенты, потерявшие кормильца, круглые сироты, инвалиды I и II группы.')
      },
      {
         title: t('scholarships.categories.category3.title', 'III категория'),
         description: t('scholarships.categories.category3.description', 'Студенты, родители которых являются штатными сотрудниками Университета, внесших значительный вклад в повышение качества подготовки специалистов, научно-исследовательской работе, а также принимающих активное участие в общественной жизни университета.')
      },
      {
         title: t('scholarships.categories.category4.title', 'IV категория'),
         description: t('scholarships.categories.category4.description', 'Студенты, регулярно представляющие Университет на соревнованиях и конкурсах республиканского, межрегионального и международного уровня.')
      },
      {
         title: t('scholarships.categories.category5.title', 'V категория'),
         description: t('scholarships.categories.category5.description', 'Студенты, поступающие на первый курс и особо отличившиеся в процессе обучения в школах, средних профессиональных учебных заведениях и в различных образовательных, спортивных и культурных соревнованиях республиканского и международного уровня.')
      }
   ];

   const commissionMembers = [
      { name: 'Уметалиева М.Н.', position: t('scholarships.commission.chairman', 'декан, председатель комиссии') },
      { name: 'Арзиева Н.Н.', position: t('scholarships.commission.viceChairman', 'заместитель декана, член комиссии') },
      { name: 'Акматова А.Т.', position: t('scholarships.commission.umo', 'заведующая УМО, член комиссии') },
      { name: 'Шерали уулу Ж.', position: t('scholarships.commission.economist', 'экономист, член комиссии') },
      { name: 'Бопушева А.Т.', position: t('scholarships.commission.soc', 'заведующая СОК, член комиссии') },
      { name: 'Пиримбаева Ж.Ж.', position: t('scholarships.commission.hr', 'руководитель департамента HR и делопроизводства, член комиссии') },
      { name: 'Алиярова М.Ю.', position: t('scholarships.commission.teacher', 'преподаватель кафедры ЕГД, старший куратор, член комиссии') }
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
                     backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920)',
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
                  <FiAward className="w-10 h-10" />
               </motion.div>
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
               >
                  {t('scholarships.hero.title', 'Стипендии и льготы')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
               >
                  {t('scholarships.hero.subtitle', 'Scholarships and Benefits')}
               </motion.p>
            </div>
         </motion.div>

         {/* Main Content with Navigation */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation */}
               <div className="lg:w-80 shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 h-fit">
                     <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.navigation.title', 'Навигация для абитуриентов')}
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
                                 <span className="font-medium">{t('scholarships.navigation.howToApply', 'Как к нам поступить')}</span>
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
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.policy.title', 'Льготная политика')}
                     </h2>
                     <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>
                           {t('scholarships.policy.description1', 'Социальная поддержка студентов университета представляет собой предоставление льгот студентам в виде снижения стоимости оплаты за обучение на сумму, выраженную в процентном соотношении к установленной стоимости обучения.')}
                        </p>
                        <p>
                           {t('scholarships.policy.description2', 'Льготы по социальной поддержке могут быть предоставлены в виде: бесплатное проживание в общежитии, льготное питание и др. Льготы могут быть предоставлены в виде исключений в других особых случаях при наличии веских оснований, которые комиссией посчитаются достаточными.')}
                        </p>
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-l-4 border-[#0077B6]">
                           <p className="font-semibold text-[#023E8A]">
                              {t('scholarships.policy.condition', 'Непременным условием социальной поддержки студентов является отличная и хорошая успеваемость, учебная дисциплина и активное участие в научно-исследовательской, культурно-массовой, спортивной и общественной работе Университета.')}
                           </p>
                        </div>
                        <p>
                           {t('scholarships.policy.description3', 'Право на получение льготы имеют студенты Университета очной формы обучения, имеющие по результатам предыдущего учебного года только отличные оценки по всем дисциплинам, а также не имеющие академической задолженности.')}
                        </p>
                     </div>
                  </motion.div>

                  {/* Categories Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.categories.title', 'Категории студентов для получения льгот')}
                     </h2>
                     <div className="space-y-6">
                        {categories.map((category, idx) => (
                           <motion.div
                              key={idx}
                              className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                           >
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center shrink-0">
                                 <span className="text-white text-2xl font-bold">{idx + 1}</span>
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-2xl font-bold text-[#023E8A] mb-3">{category.title}</h3>
                                 <p className="text-gray-700 leading-relaxed">{category.description}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Commission Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.commission.title', 'Состав комиссии по социальной поддержке студентов')}
                     </h2>
                     <p className="text-xl font-semibold text-gray-700 mb-8">
                        {t('scholarships.commission.subtitle', 'Международного факультета медицины «Салымбеков Университет»')}
                     </p>
                     <div className="space-y-4">
                        {commissionMembers.map((member, idx) => (
                           <motion.div
                              key={idx}
                              className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                           >
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center shrink-0">
                                 <FiUsers className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                 <p className="font-bold text-[#023E8A] text-lg">{member.name}</p>
                                 <p className="text-gray-600">{member.position}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                     <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl">
                        <p className="text-gray-700 text-sm">
                           <strong>{t('scholarships.commission.basis', 'Основание:')}</strong> {t('scholarships.commission.basisText', 'решение ученого совета от 30 августа 2022 года.')}
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Scholarships;