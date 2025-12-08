import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './ExtraNavigation';
import { FiExternalLink, FiMonitor, FiYoutube, FiUserPlus } from 'react-icons/fi';

const OnlineReg = () => {
   const { t } = useTranslation();

   const backgroundBalls = useMemo(() => {
      return Array.from({ length: 8 }, (_, i) => ({
         id: i,
         size: Math.random() * 200 + 80,
         x: Math.random() * 100,
         y: Math.random() * 100,
         duration: Math.random() * 8 + 6,
         delay: Math.random() * 2,
         color: ['from-blue-400/20 to-purple-400/20', 'from-green-400/20 to-blue-400/20', 'from-purple-400/20 to-pink-400/20'][i % 3]
      }));
   }, []);

   const links = [
      {
         title: t('onlineReg.links.registration.title'),
         description: t('onlineReg.links.registration.description'),
         url: 'https://2020.edu.gov.kg/spuz/',
         icon: FiUserPlus,
         color: 'from-[#023E8A] to-[#0077B6]'
      },
      {
         title: t('onlineReg.links.apply.title'),
         description: t('onlineReg.links.apply.description'),
         url: 'https://2020.edu.gov.kg/reports?id_university=64',
         icon: FiMonitor,
         color: 'from-[#0077B6] to-[#00B4D8]'
      }
   ];

   const videoTutorials = [
      {
         title: t('onlineReg.videos.registration.title'),
         description: t('onlineReg.videos.registration.description'),
         url: 'https://www.youtube.com/watch?v=RJRRUFEQZ7k',
         embedUrl: 'https://www.youtube.com/embed/RJRRUFEQZ7k'
      },
      {
         title: t('onlineReg.videos.personalAccount.title'),
         description: t('onlineReg.videos.personalAccount.description'),
         url: 'https://www.youtube.com/watch?v=WRWIwXICpBE',
         embedUrl: 'https://www.youtube.com/embed/WRWIwXICpBE'
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            duration: 0.4,
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.3,
            ease: "easeOut"
         }
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Fast Animated Background Balls */}
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
                  x: [0, 15, -15, 0],
                  y: [0, -15, 15, 0],
                  scale: [1, 1.05, 0.95, 1],
               }}
               transition={{
                  duration: ball.duration,
                  delay: ball.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
            />
         ))}

         {/* Hero Section */}
         <motion.div
            className="relative h-[60vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
               <div
                  className="absolute inset-0 opacity-30"
                  style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920)',
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
                  transition={{ delay: 0.1, duration: 0.4 }}
               >
                  <FiMonitor className="w-10 h-10" />
               </motion.div>
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
               >
                  {t('onlineReg.hero.title')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
               >
                  {t('onlineReg.hero.subtitle')}
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
               <motion.div
                  className="flex-1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
               >
                  {/* Introduction */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={itemVariants}
                  >
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('onlineReg.about.title')}
                     </h2>
                     <p className="text-lg text-gray-700 leading-relaxed">
                        {t('onlineReg.about.description')}
                     </p>
                  </motion.div>

                  {/* Registration Links */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                     {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                           <motion.a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-200"
                              variants={itemVariants}
                              whileHover={{ y: -5, scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                           >
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200`}>
                                 <Icon className="w-8 h-8 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#023E8A] transition-colors duration-200">
                                 {link.title}
                              </h3>
                              <p className="text-gray-600 mb-4 leading-relaxed">
                                 {link.description}
                              </p>
                              <div className="flex items-center gap-2 text-[#0077B6] font-semibold group-hover:gap-3 transition-all duration-200">
                                 <span>{t('onlineReg.links.goToPortal')}</span>
                                 <FiExternalLink className="w-5 h-5" />
                              </div>
                           </motion.a>
                        );
                     })}
                  </div>

                  {/* Video Tutorials */}
                  <motion.div
                     className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
                     variants={itemVariants}
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                           <FiYoutube className="w-8 h-8 text-white" />
                        </div>
                        <div>
                           <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                              {t('onlineReg.videos.title')}
                           </h2>
                        </div>
                     </div>

                     <div className="space-y-8">
                        {videoTutorials.map((video, index) => (
                           <motion.div
                              key={index}
                              className="space-y-4"
                              variants={itemVariants}
                           >
                              <div className="flex items-start gap-3">
                                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center text-white font-bold shrink-0">
                                    {index + 1}
                                 </div>
                                 <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                       {video.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                       {video.description}
                                    </p>
                                 </div>
                              </div>

                              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                 <iframe
                                    src={video.embedUrl}
                                    title={video.title}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                 />
                              </div>

                              <a
                                 href={video.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center gap-2 text-[#0077B6] hover:text-[#023E8A] font-semibold transition-colors duration-200"
                              >
                                 <FiYoutube className="w-5 h-5" />
                                 <span>{t('onlineReg.videos.openYouTube')}</span>
                                 <FiExternalLink className="w-4 h-4" />
                              </a>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default OnlineReg;