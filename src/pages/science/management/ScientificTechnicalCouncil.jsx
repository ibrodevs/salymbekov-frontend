import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaUsers, 
  FaClipboardCheck,
  FaFileAlt,
  FaDownload 
} from 'react-icons/fa';
import heroImage from '../../../assets/science/management/science-hero.jpg';

const ScientificTechnicalCouncil = () => {
  const { t, i18n } = useTranslation();

  // safe string translation getter with fallback to English
  const isUrlLike = (s) => typeof s === 'string' && /^(https?:\/\/|www\.)/.test(s);
  const getRaw = (key, lng = undefined) => {
    const lang = typeof lng === 'string' ? lng : i18n.language;
    return t(key, { returnObjects: true, lng: lang });
  };
  const rstr = (key, defaultValue = '') => {
    let raw = getRaw(key, i18n.language);
    const fallbackNeeded = raw === undefined || raw === null || raw === '' || raw === key || isUrlLike(raw);
    if (fallbackNeeded) {
      const fallback = getRaw(key, 'en');
      raw = fallback ?? defaultValue;
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[i18n] Fallback to EN for key "${key}" (${i18n.language})`, raw);
      }
    }
    if (typeof raw === 'string') return raw;
    if (Array.isArray(raw)) return raw.join(' ');
    if (raw && typeof raw === 'object') return raw.title || raw.name || raw.description || Object.values(raw)[0] || defaultValue;
    return defaultValue;
  };

  // Debug: check available translations
  React.useEffect(() => {
    console.log('=== i18n DEBUG ===');
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('All science keys (current lang):', Object.keys(getRaw('science') || {}));
    console.log('Science management keys (current lang):', Object.keys(getRaw('science.management') || {}));
    
    // Test specific keys
    const testKeys = [
      'science.management.scientificCouncil.title',
      'science.management.scientificCouncil.tasks',
      'science.management.scientificCouncil.members'
    ];
    
    testKeys.forEach(key => {
      const value = getRaw(key);
      const enValue = getRaw(key, 'en');
      if (process.env.NODE_ENV === 'development') {
        console.log(`Key "${key}" (${i18n.language}):`, value);
        console.log(`Key "${key}" (en):`, enValue);
      }
    });
  }, [i18n.language, t]);

  // Simple translation function with fallback
  const getTranslation = (key, fallback = '') => {
    const value = getRaw(key, i18n.language);
    
    // If value is missing or equals key, use fallback
    if (!value || value === key || (typeof value === 'object' && Object.keys(value).length === 0)) {
      return fallback;
    }
    
    return value;
  };

  const getString = (key, fallback = '') => {
    const value = getTranslation(key, fallback);
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value[0] || fallback;
    if (typeof value === 'object') return value.title || value.name || value.text || fallback;
    return fallback;
  };

  const getArray = (key, fallback = []) => {
    const value = getTranslation(key, fallback);
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [value];
    if (typeof value === 'object') {
      // Handle different object structures
      if (value.items) return value.items;
      if (value.tasks) return value.tasks;
      if (value.members) return value.members;
      return Object.values(value);
    }
    return fallback;
  };

  // Get data with fallbacks
  const title = getString('science.management.scientificCouncil.title', 'Scientific and Technical Council');
  const subtitle = getString('science.management.scientificCouncil.subtitle', 'Permanent advisory body of the University');
  const generalText = getString('science.management.scientificCouncil.generalText', 
    'The Scientific and Technical Council is a permanent advisory body of the University. In its activities, the STC is guided by the regulatory legal acts of the Kyrgyz Republic, the Charter of the University, this Regulation and other local regulations.');
  
  const tasks = getArray('science.management.scientificCouncil.tasks', [
    'Development of priority areas of science and technology by university scientists',
    'Ensuring priority development of fundamental and exploratory research',
    'Improving planning and organizational forms of research work',
    'Development of proposals for preserving the scientific potential of the University',
    'Promoting integration processes between the University and scientific organizations',
    'Promoting the development of research work of students'
  ]);

  const members = getArray('science.management.scientificCouncil.members', [
    { name: 'Toktogazy Moldalievich Tulekeev, MD, prof.', role: 'Chairman' },
    { name: 'Uzakbaev Kamchibek Askarbekovich, MD, prof.', role: 'Deputy Chairman' },
    { name: 'Imankulova Asel Sansyzbaevna, MD, prof.', role: 'Scientific Secretary' },
    { name: 'Zhumadilov Esengeldi Zhumadilovich, PhD', role: 'Council Member' },
    { name: 'Abdyldaev Rysbek Aldagandaevich, MD, prof.', role: 'Council Member' },
    { name: 'Atikanov Arystanbek Orozalyevich, MD, prof.', role: 'Council Member' }
  ]);

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
      <div className="relative">
        <div 
          className="relative h-[400px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(2, 62, 138, 0.95), rgba(0, 119, 182, 0.9)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/science/management"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {getString('science.management.scientificCouncil.back', 'Back to Management')}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white/90 text-sm font-medium">
                  {getString('science.management.scientificCouncil.badge', 'Scientific Coordination')}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* General Provisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaFileAlt className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getString('science.management.scientificCouncil.generalTitle', 'General Provisions')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {generalText}
          </p>
        </motion.div>

        {/* Goals and Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaClipboardCheck className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getString('science.management.scientificCouncil.goalsTitle', 'Goals and Objectives')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {getString('science.management.scientificCouncil.goalsText', 
              'The purpose of the STC is to organize and coordinate activities in considering issues related to the implementation of state policy in the field of science and technology, development and improvement of the level of research conducted at departments and other departments.')}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {getString('science.management.scientificCouncil.tasksTitle', 'Main Tasks')}
          </h3>
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#023E8A]/10 to-[#0077B6]/10 rounded-lg flex items-center justify-center mr-4 mt-1 group-hover:from-[#023E8A]/20 group-hover:to-[#0077B6]/20 transition-colors">
                  <span className="text-[#023E8A] font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed flex-1">
                  {typeof task === 'string' ? task : task.text || task.title || JSON.stringify(task)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Council Members */}
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
              {getString('science.management.scientificCouncil.compositionTitle', 'Council Composition')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {members.map((member, index) => {
              const memberName = typeof member === 'string' ? member : member.name || member.title;
              const memberRole = typeof member === 'string' ? 'Council Member' : member.role || 'Council Member';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-[#0077B6]/30"
                >
                  <p className="text-gray-900 text-lg font-semibold mb-2">
                    {memberName}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#023E8A]/10 to-[#0077B6]/10 text-[#023E8A] rounded-full text-sm font-medium">
                    {memberRole}
                  </span>
                  <p className="text-gray-700">
                    {typeof member === 'string'
                      ? ''
                      : (member && (member.description || member.desc || rstr(`science.management.scientificCouncil.member${index + 1}Desc`, '')))}
                  </p>
                </motion.div>
              );
            })}
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
                  {getString('science.management.scientificCouncil.downloadTitle', 'Full Version of Regulations')}
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                {getString('science.management.scientificCouncil.downloadDesc', 'Download the complete document about the Scientific and Technical Council')}
              </p>
            </div>
            <motion.a
              href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-nauchno-tehnicheskom-sovete.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <FaDownload />
              {getString('science.management.scientificCouncil.downloadBtn', 'Download PDF')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScientificTechnicalCouncil;