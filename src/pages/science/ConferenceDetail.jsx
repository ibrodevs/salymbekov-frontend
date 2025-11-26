import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaImages, FaVideo, FaShare } from 'react-icons/fa';
import { getConferenceById } from '../../data/conferences';

const ConferenceDetail = () => {
  const { id } = useParams();
  const conf = getConferenceById(id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!conf) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <p className="text-gray-500 mb-4">Конференция не найдена.</p>
          <Link 
            to="/science/events/conferences" 
            className="inline-flex items-center text-[#023E8A] hover:text-[#0077B6] font-semibold transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Вернуться к списку конференций
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
            Все конференции
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {conf.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
              {conf.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-xl" />
                <span className="font-semibold">
                  {conf.date || 'Дата уточняется'}
                </span>
              </div>
              {conf.location && (
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-xl" />
                  <span className="font-semibold">{conf.location}</span>
                </div>
              )}
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
              <div className="prose prose-lg max-w-none mb-8">
                {conf.content ? (
                  <div dangerouslySetInnerHTML={{ __html: conf.content }} />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">
                      Информация о конференции готовится к публикации.
                    </p>
                  </div>
                )}
              </div>

              {/* Summary Card */}
              {conf.summary && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaVideo className="mr-3 text-[#023E8A]" />
                    Краткое описание
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{conf.summary}</p>
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
                  Все конференции
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
                  Галерея
                </h3>
                {conf.gallery && conf.gallery.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {conf.gallery.map((g, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                        onClick={() => setSelectedImage(g)}
                      >
                        <img 
                          src={g} 
                          alt={`Фото ${i+1}`} 
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity" 
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <FaImages className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">Фотографии будут добавлены позже</p>
                  </div>
                )}
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Информация</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white/70 rounded-lg">
                    <FaCalendarAlt className="text-[#023E8A] mr-3" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Дата проведения</p>
                      <p className="text-sm text-gray-700">{conf.date || 'Уточняется'}</p>
                    </div>
                  </div>
                  {conf.location && (
                    <div className="flex items-center p-3 bg-white/70 rounded-lg">
                      <FaMapMarkerAlt className="text-[#023E8A] mr-3" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Место проведения</p>
                        <p className="text-sm text-gray-700">{conf.location}</p>
                      </div>
                    </div>
                  )}
                </div>
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
                alt="Увеличенное фото"
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