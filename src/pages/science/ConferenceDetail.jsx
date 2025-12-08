import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaImages, FaVideo, FaShare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { getConferenceById } from '../../data/conferences';

const ConferenceDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const conference = getConferenceById(Number(id));


  const [selectedImage, setSelectedImage] = useState(null);

  if (!conference) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <p className="text-gray-500 mb-4">{t('conferences.detail.notFound')}</p>
          <Link 
            to="/science/events/conferences" 
            className="inline-flex items-center text-[#023E8A] hover:text-[#0077B6] font-semibold transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            {t('conferences.detail.backToList')}
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-20 overflow-hidden">
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
            to="/science/events/conferences"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('conferences.detail.allConferences')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t(conference.category)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
              {t(conference.title)}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-xl" />
                <span className="font-semibold">
                  {conference.date || t('conferences.page.dateToBeAnnounced')}
                </span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-xl" />
                <span className="font-semibold">{t('conferences.page.location')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Conference Content */}
              {/* Conference Content */}
                 <div className="prose prose-lg max-w-none mb-8">
                        <div 
                        className="conference-content"
                   dangerouslySetInnerHTML={{ __html: t(conference.content) }} 
                            />
                 </div>
              {/* Summary Card */}
              {conference.summary && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaVideo className="mr-3 text-[#023E8A]" />
                    {t('conferences.detail.summary')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{t(conference.summary)}</p>
                </motion.div>
              )}

              {/* Back Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/science/events/conferences" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <FaArrowLeft className="mr-3" />
                  {t('conferences.detail.allConferences')}
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="space-y-6">
              {/* Gallery Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FaImages className="mr-3 text-[#023E8A]" />
                  {t('conferences.detail.gallery')}
                </h3>
                {conference.gallery && conference.gallery.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {conference.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img 
                          src={image} 
                          alt={`${t(conference.title)} - ${t('conferences.detail.photo')} ${index + 1}`} 
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity" 
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <FaImages className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">{t('conferences.detail.photosComingSoon')}</p>
                  </div>
                )}
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('conferences.detail.information')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white/70 rounded-lg">
                    <FaCalendarAlt className="text-[#023E8A] mr-3" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t('conferences.detail.eventDate')}</p>
                      <p className="text-sm text-gray-700">{conference.date || t('conferences.page.dateToBeAnnounced')}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white/70 rounded-lg">
                    <FaMapMarkerAlt className="text-[#023E8A] mr-3" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t('conferences.detail.eventLocation')}</p>
                      <p className="text-sm text-gray-700">{t('conferences.page.location')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Card */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FaShare className="mr-3 text-[#023E8A]" />
                  {t('conferences.detail.share')}
                </h3>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: t(conference.title),
                        text: t(conference.summary),
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert(t('conferences.detail.linkCopied'));
                    }
                  }}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <FaShare className="mr-2" />
                  {t('conferences.detail.shareButton')}
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Modal for Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt={t('conferences.detail.enlargedPhoto')}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConferenceDetail;