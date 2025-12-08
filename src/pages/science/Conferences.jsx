import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaVideo, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { conferences } from '../../data/conferences';

const Conferences = () => {
  const { t, i18n } = useTranslation();

  const sortedConferences = conferences
    .map(c => ({ ...c }))
    .sort((a,b) => {
      if(!a.date) return 1;
      if(!b.date) return -1;
      const [da,ma,ya] = a.date.split('.').map(Number);
      const [db,mb,yb] = b.date.split('.').map(Number);
      return new Date(yb, mb-1, db) - new Date(ya, ma-1, da);
    });


  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/science"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('conferences.page.backToScience')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('conferences.page.scientificEvents')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('conferences.page.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('conferences.page.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedConferences.map((conference, index) => (
            <motion.div
              key={conference.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Link to={`/science/events/conferences/${conference.id}`} className="group block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Image Section */}
                  <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                    <motion.img
                      src={conference.image}
                      alt={t(conference.title)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#023E8A]">
                        {t(conference.category)}
                      </span>
                    </div>
                    {conference.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <FaVideo className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaCalendarAlt className="mr-2 text-[#023E8A]" />
                      <span>{conference.date || t('conferences.page.dateToBeAnnounced')}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#023E8A] transition-colors">
                      {t(conference.title)}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {t(conference.summary)}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center text-xs text-gray-500">
                        <FaMapMarkerAlt className="mr-1" />
                        {t('conferences.page.location')}
                      </span>
                      <span className="text-xs font-semibold text-[#023E8A] group-hover:underline">
                        {t('conferences.detail.allConferences')} →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <p className="text-sm text-gray-500">
              {t('conferences.page.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Conferences;