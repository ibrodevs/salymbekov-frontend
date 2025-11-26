import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaUserGraduate,
  FaLightbulb,
  FaUsers,
  FaDownload
} from 'react-icons/fa';

const YoungScientists = () => {
  const { t } = useTranslation();

  const members = [
    "Уметалиева М.Н. – аспирант",
    "Князев И.А. – аспирант",
    "Сырдыбаев А.Ж. – соискатель",
    "Сыдыкова С.Б. – соискатель",
    "Жолболдиева М. – соискатель",
    "Бопушева А. – соискатель"
  ];

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
            to="/science/management"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к органам управления
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('science.management.youngScientists.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('science.management.youngScientists.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('science.management.youngScientists.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Общие положения */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaUserGraduate className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.youngScientists.generalTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('science.management.youngScientists.generalText')}
          </p>
        </motion.div>

        {/* Цели и задачи */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaLightbulb className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.youngScientists.goalsTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('science.management.youngScientists.goalsText')}
          </p>
        </motion.div>

        {/* Состав */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaUsers className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.youngScientists.compositionTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-[#0077B6]/30 group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A]/10 to-[#0077B6]/10 rounded-full flex items-center justify-center mr-4 group-hover:from-[#023E8A]/20 group-hover:to-[#0077B6]/20 transition-colors">
                    <FaUserGraduate className="text-[#023E8A] text-lg" />
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {member}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl shadow-lg p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <FaDownload className="text-2xl mr-3" />
                <h3 className="text-2xl font-bold">
                  {t('science.management.youngScientists.downloadTitle')}
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                {t('science.management.youngScientists.downloadDesc')}
              </p>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <FaDownload />
              {t('science.management.youngScientists.downloadBtn')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default YoungScientists;
