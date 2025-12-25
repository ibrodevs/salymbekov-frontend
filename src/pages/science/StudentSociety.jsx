import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaUsers, FaBook, FaGraduationCap, FaUserFriends } from 'react-icons/fa';

const StudentSociety = () => {
  const { t } = useTranslation();

  // Define members array with translation keys
  const memberKeys = [
    { key: 'hamza1', group: 'GM-1-19' },
    { key: 'mahnoor', group: 'GM-1-19' },
    { key: 'ali', group: 'GM-2-19' },
    { key: 'iqbal', group: 'GM-2-19' },
    { key: 'hamza2', group: 'GM-4-19' },
    { key: 'haider', group: 'GM-4-19' },
    { key: 'saqibullah', group: 'GM-5-19' },
    { key: 'umer', group: 'GM-7-19' },
    { key: 'sohira', group: 'GM-7-19' },
    { key: 'naveed', group: 'GM-8-19' },
    { key: 'ilyas', group: 'GM-9-19' },
    { key: 'wajeeh', group: 'GM-10-19' },
    { key: 'ibragim', group: 'GM-11-19' },
    { key: 'durraiz', group: 'GM-1-20' },
    { key: 'arif', group: 'GM-2-20' },
    { key: 'hussnain', group: 'GM-3-20' },
    { key: 'waqarAlam', group: 'GM-5-20' },
    { key: 'faisal', group: 'GM-6-20' },
    { key: 'sheraz', group: 'GM-7-20' },
    { key: 'waqar', group: 'GM-8-20' },
  ];

  // Get translation arrays safely
  const abbreviations = t('studentSociety.sections.generalProvisions.abbreviations', { returnObjects: true });
  const items = t('studentSociety.sections.generalProvisions.items', { returnObjects: true });
  
  const abbreviationsArray = Array.isArray(abbreviations) ? abbreviations : [];
  const itemsArray = Array.isArray(items) ? items : [];

  // Debug logging
  console.log('StudentSociety Debug:', {
    abbreviations,
    abbreviationsIsArray: Array.isArray(abbreviations),
    abbreviationsLength: abbreviationsArray.length,
    items,
    itemsIsArray: Array.isArray(items),
    itemsLength: itemsArray.length,
    sampleTitle: t('studentSociety.page.title'),
    sampleCategory: t('studentSociety.page.category')
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('studentSociety.page.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('studentSociety.page.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('studentSociety.page.subtitle')}
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
          className="max-w-5xl mx-auto"
        >
          {/* Document Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#023E8A]"
            >
              {t('studentSociety.document.title')}
            </motion.h2>

            {/* Общие положения */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                <FaBook className="mr-3" />
                {t('studentSociety.sections.generalProvisions.title')}
              </h3>
              
              {/* Abbreviations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
              >
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
                  <FaGraduationCap className="mr-2 text-[#023E8A]" />
                  {t('studentSociety.sections.generalProvisions.abbreviationsTitle')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {abbreviationsArray.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/70 p-4 rounded-xl text-center"
                    >
                      <div className="text-2xl font-bold text-[#023E8A] mb-2">{item.abbr}</div>
                      <div className="text-sm text-gray-600">{item.full}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="space-y-8">
                {itemsArray.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.number}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Состав СНО */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                <FaUsers className="mr-3" />
                {t('studentSociety.sections.members.title')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {memberKeys.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <FaUserFriends className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-[#023E8A] transition-colors">
                          {t(`studentSociety.members.${member.key}`)}
                        </p>
                        <p className="text-sm text-[#0077B6] font-medium">{member.group}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Download Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {t('studentSociety.download.title')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('studentSociety.download.description')}
                    </p>
                  </div>
                  <motion.a
                    href={t('studentSociety.download.fileUrl')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    download
                  >
                    <FaDownload className="mr-3" />
                    {t('studentSociety.download.buttonText')}
                  </motion.a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentSociety;