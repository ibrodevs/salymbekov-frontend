import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Directions = () => {
   const { t } = useTranslation();

   const backgroundBalls = useMemo(() => {
      return Array.from({ length: 25 }, (_, i) => ({
         id: i,
         size: Math.random() * 400 + 150,
         x: Math.random() * 100,
         y: Math.random() * 100,
         duration: Math.random() * 25 + 20,
         delay: Math.random() * 8,
         color: ['from-blue-400/20 to-purple-400/20', 'from-green-400/20 to-blue-400/20', 'from-purple-400/20 to-pink-400/20', 'from-cyan-400/20 to-blue-400/20', 'from-pink-400/20 to-rose-400/20'][i % 5]
      }));
   }, []);

   const floatingBubbles = useMemo(() => {
      return Array.from({ length: 20 }, (_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 8 + Math.random() * 7,
         delay: Math.random() * 6
      }));
   }, []);

   const smallBubbles = useMemo(() => {
      return Array.from({ length: 40 }, (_, i) => ({
         id: i,
         size: Math.random() * 40 + 20,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 4 + Math.random() * 3,
         delay: Math.random() * 2,
         opacity: 0.1 + Math.random() * 0.1
      }));
   }, []);

   const programs = [
      {
         degree: 'SPECIALTY',
         programs: [
            { name: 'General Medicine', form: 'Full-time', duration: '5 years' },
            { name: 'General Medicine', form: 'Full-time', duration: '6 years' }
         ]
      },
      {
         degree: 'BACHELOR',
         programs: [
            { name: 'Computer Science', form: 'Full-time', duration: '4 years' },
            { name: 'Business Informatics', form: 'Full-time', duration: '4 years' },
            { name: 'Global Business', form: 'Full-time', duration: '4 years' },
            { name: 'International Economics and Logistics', form: 'Full-time', duration: '4 years' },
            { name: 'Digital Financial Accounting', form: 'Full-time', duration: '4 years' }
         ]
      },
      {
         degree: 'SECONDARY VOCATIONAL EDUCATION',
         programs: [
            { name: 'Computer Science', form: 'Full-time', duration: '3 y. 6 m.' },
            { name: 'Multimedia Application', form: 'Full-time', duration: '2 y. 6 m.' },
            { name: 'Mobile Computing', form: 'Full-time', duration: '2 y. 6 m.' },
            { name: 'Artificial Intelligence', form: 'Full-time', duration: '2 y. 6 m.' },
            { name: 'Web development', form: 'Full-time', duration: '2 y. 6 m.' },
            { name: 'Global Business', form: 'Full-time', duration: '2 y. 6 m.' },
            { name: 'Digital Financial Accounting', form: 'Full-time', duration: '2 y. 6 m.' }
         ]
      },
      {
         degree: 'MASTER',
         programs: [
            { name: 'Computer Science', form: 'Full-time', duration: '2 years' }
         ]
      },
      {
         degree: 'RESIDENCY',
         programs: [
            { name: 'Therapy', form: 'Full-time', duration: '3 years' },
            { name: 'Urology', form: 'Full-time', duration: '3 years' },
            { name: 'Anesthesiology and Intensive Care', form: 'Full-time', duration: '3 years' },
            { name: 'Ophthalmology', form: 'Full-time', duration: '3 years' },
            { name: 'Cardiovascular Surgery', form: 'Full-time', duration: '4 years' },
            { name: 'Cardiology', form: 'Full-time', duration: '3 years' },
            { name: 'Otorhinolaryngology', form: 'Full-time', duration: '3 years' },
            { name: 'Traumatology and Orthopedics', form: 'Full-time', duration: '3 years' },
            { name: 'Surgery', form: 'Full-time', duration: '3 years' },
            { name: 'Obstetrics and Gynecology', form: 'Full-time', duration: '3 years' },
            { name: 'Pediatrics', form: 'Full-time', duration: '1 year' }
         ]
      },
      {
         degree: 'POSTGRADUATE_STUDIES',
         programs: [
            { name: 'Cardiovascular Surgery', form: 'Full-time', duration: '3 years' },
            { name: 'Oncology', form: 'Full-time', duration: '3 years' },
            { name: 'Human Anatomy', form: 'Full-time', duration: '3 years' },
            { name: 'Pediatrics', form: 'Full-time', duration: '3 years' },
            { name: 'PhD 561000 Public Health and Medicine', form: 'Full-time', duration: '3 years' }
         ]
      }
   ];

   const contacts = {
      addresses: [
         t('directions.addresses.college', 'ул. Малдыбаева, 24б / Ахунбаева, 125 (Международный колледж IT и бизнеса)'),
         t('directions.addresses.medical', 'ул. Фучика, 3 (Высшая Школа Медицины)')
      ],
      phones: [
         { number: '+996 778 99 88 89', label: t('directions.phones.college', 'Международный колледж IT и бизнеса') },
         { number: '+996 706 99 88 89', label: t('directions.phones.college', 'Международный колледж IT и бизнеса') },
         { number: '+996 774 83 88 83', label: t('directions.phones.medical', 'Высшая Школа Медицины') },
         { number: '+996 501 83 88 83', label: t('directions.phones.medical', 'Высшая Школа Медицины') }
      ],
      email: 'info@salymbekov.com'
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Large Animated Background Balls */}
         {backgroundBalls.map((ball) => (
            <motion.div
               key={ball.id}
               className={`absolute rounded-full bg-gradient-to-br ${ball.color} blur-3xl`}
               style={{
                  width: ball.size,
                  height: ball.size,
                  left: `${ball.x}%`,
                  top: `${ball.y}%`,
               }}
               animate={{
                  x: [0, 30, -30, 0],
                  y: [0, -30, 30, 0],
                  scale: [1, 1.1, 0.9, 1],
               }}
               transition={{
                  duration: ball.duration,
                  delay: ball.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
            />
         ))}

         {/* Medium Floating Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {floatingBubbles.map((bubble) => (
               <motion.div
                  key={`floating-${bubble.id}`}
                  className="absolute rounded-full opacity-10"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #023E8A, #0077B6)'
                  }}
                  animate={{
                     y: [0, -60, 0],
                     x: [0, 30, 0],
                     scale: [1, 1.3, 1],
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

         {/* Small Bubbles */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {smallBubbles.map((bubble) => (
               <motion.div
                  key={`small-${bubble.id}`}
                  className="absolute rounded-full"
                  style={{
                     width: bubble.size,
                     height: bubble.size,
                     left: bubble.left,
                     top: bubble.top,
                     background: 'linear-gradient(135deg, #0096C7, #00B4D8)',
                     opacity: bubble.opacity
                  }}
                  animate={{
                     y: [0, -30, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.2, 1],
                     rotate: [0, 90, 180]
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
            {/* Additional animated elements in hero section */}
            {[...Array(8)].map((_, i) => (
               <motion.div
                  key={`hero-element-${i}`}
                  className="absolute rounded-full opacity-15"
                  style={{
                     width: Math.random() * 200 + 100,
                     height: Math.random() * 200 + 100,
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
                  }}
                  animate={{
                     y: [0, -25, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.3, 1]
                  }}
                  transition={{
                     duration: 8 + Math.random() * 4,
                     delay: Math.random() * 3,
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
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  {t('directions.hero.title', 'Направления подготовки')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  {t('directions.hero.subtitle', 'Educational Programs of Salymbekov University')}
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
               <div className="flex-1">
                  {/* Contacts Section */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('directions.contacts.title', 'КОНТАКТЫ ПРИЕМНОЙ КОМИССИИ')}
                     </h2>

                     <div className="grid md:grid-cols-3 gap-6">
                        {/* Address */}
                        <div className="md:col-span-3">
                           <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center shrink-0">
                                 <FiMapPin className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {t('directions.contacts.address', 'Адрес')}
                                 </h3>
                                 {contacts.addresses.map((addr, idx) => (
                                    <p key={idx} className="text-gray-700 leading-relaxed mb-2">
                                       {addr}
                                    </p>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Phone */}
                        <div className="md:col-span-2">
                           <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl h-full">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] flex items-center justify-center shrink-0">
                                 <FiPhone className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {t('directions.contacts.phones', 'Телефоны')}
                                 </h3>
                                 {contacts.phones.map((phone, idx) => (
                                    <div key={idx} className="mb-2">
                                       <a href={`tel:${phone.number}`} className="text-[#0077B6] font-semibold hover:underline">
                                          {phone.number}
                                       </a>
                                       <span className="text-gray-600 text-sm ml-2">({phone.label})</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Email */}
                        <div className="md:col-span-1">
                           <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl h-full">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] flex items-center justify-center shrink-0">
                                 <FiMail className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {t('directions.contacts.email', 'Email')}
                                 </h3>
                                 <a href={`mailto:${contacts.email}`} className="text-[#0077B6] font-semibold hover:underline break-all">
                                    {contacts.email}
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  {/* Introduction */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('directions.introduction', 'На данный момент Салымбеков университет готовит квалифицированных специалистов в области IT и медицины по следующим направлениям:')}
                     </p>
                  </motion.div>

                  {/* Programs Table */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('directions.programs.title', 'EDUCATIONAL PROGRAMS')}
                     </h2>

                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-[#023E8A]">
                                 <th className="text-left py-4 px-4 font-bold text-gray-700">№</th>
                                 <th className="text-left py-4 px-4 font-bold text-gray-700">
                                    {t('directions.programs.degree', 'DEGREE')}
                                 </th>
                                 <th className="text-left py-4 px-4 font-bold text-gray-700">
                                    {t('directions.programs.educationalProgram', 'EDUCATIONAL PROGRAM')}
                                 </th>
                                 <th className="text-left py-4 px-4 font-bold text-gray-700">
                                    {t('directions.programs.studyForm', 'STUDY FORM')}
                                 </th>
                                 <th className="text-left py-4 px-4 font-bold text-gray-700">
                                    {t('directions.programs.duration', 'DURATION')}
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {programs.map((section, sectionIdx) => (
                                 <React.Fragment key={sectionIdx}>
                                    {section.programs.map((program, progIdx) => (
                                       <motion.tr
                                          key={`${sectionIdx}-${progIdx}`}
                                          className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                                          initial={{ opacity: 0, x: -20 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: (sectionIdx * section.programs.length + progIdx) * 0.02 }}
                                       >
                                          {progIdx === 0 && (
                                             <>
                                                <td className="py-4 px-4 text-gray-700 font-semibold" rowSpan={section.programs.length}>
                                                   {sectionIdx + 1}.
                                                </td>
                                                <td className="py-4 px-4 text-gray-800 font-bold" rowSpan={section.programs.length}>
                                                   {t(`directions.degrees.${section.degree}`, section.degree)}
                                                </td>
                                             </>
                                          )}
                                          <td className="py-4 px-4 text-gray-700">
                                             {t(`directions.programNames.${program.name.replace(/\s+/g, '_')}`, program.name)}
                                          </td>
                                          <td className="py-4 px-4 text-gray-600">
                                             {t(`directions.studyForms.${program.form.replace(/-/g, '_')}`, program.form)}
                                          </td>
                                          <td className="py-4 px-4">
                                             <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold text-sm">
                                                {program.duration}
                                             </span>
                                          </td>
                                       </motion.tr>
                                    ))}
                                 </React.Fragment>
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

export default Directions;