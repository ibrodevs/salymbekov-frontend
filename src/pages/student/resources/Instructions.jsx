import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaFileAlt, FaDatabase, FaUniversity, FaFilePdf, FaDownload, FaRegFileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Instructions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const resourcesSections = [
    { 
      path: "/student/resources/instructions", 
      name: t('studentResources.sections.instructions'), 
      icon: FaFileAlt,
      active: true,
    },
    { 
      path: "/student/resources/infosystem", 
      name: t('studentResources.sections.infosystem'), 
      icon: FaDatabase,
    },
    { 
      name: t('studentResources.sections.library'), 
      icon: FaBook,
      disabled: true,
    },
    { 
      path: "/student/resources/edu-resources", 
      name: t('studentResources.sections.eduResources'), 
      icon: FaUniversity,
    },
  ];

  const instructionsData = [
    {
      category: t('instructions.categories.basic.title'),
      files: [
        { 
          name: t('instructions.categories.basic.files.0'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-promezhutochnoj-attestaczii.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.basic.files.1'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-praktike.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.basic.files.2'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-kuratore.pdf",
          icon: FaFilePdf
        }
      ]
    },
    {
      category: t('instructions.categories.educational.title'),
      files: [
        { 
          name: t('instructions.categories.educational.files.0'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-ob-itogovoj-attestaczii.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.educational.files.1'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-samostoyatelnoj-rabote.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.educational.files.2'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-modulnoj-sisteme.pdf",
          icon: FaFilePdf
        }
      ]
    },
    {
      category: t('instructions.categories.organizational.title'),
      files: [
        { 
          name: t('instructions.categories.organizational.files.0'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-studencheskom-obshhezhitii.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.organizational.files.1'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-SNO.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.organizational.files.2'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-Studencheskom-sovete.pdf",
          icon: FaFilePdf
        }
      ]
    },
    {
      category: t('instructions.categories.academic.title'),
      files: [
        { 
          name: t('instructions.categories.academic.files.0'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-ob-akademicheskoj-mobilnosti.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.academic.files.1'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-perevode-i-vosstanovlenii.pdf",
          icon: FaFilePdf
        },
        { 
          name: t('instructions.categories.academic.files.2'), 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-ob-otchislenii.pdf",
          icon: FaFilePdf
        }
      ]
    }
  ];

  // Получаем данные для документов с проверкой типа
  const documentsInfoItems = Array.isArray(t('instructions.documentsInfo.items', { returnObjects: true })) 
    ? t('instructions.documentsInfo.items', { returnObjects: true }) 
    : [
        "Все документы в формате PDF",
        "Для просмотра требуется PDF-ридер",
        "Документы можно скачать и распечатать",
        "Актуальные версии документов"
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background - Ускоренная анимация */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
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
              duration: 12,
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
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group duration-200"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            {t('studentResources.backToStudent')}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('instructions.category')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('instructions.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {t('instructions.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('studentResources.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {resourcesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path || section.name}
                      whileHover={section.disabled ? {} : { scale: 1.02 }}
                      whileTap={section.disabled ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={section.disabled ? undefined : () => navigate(section.path)}
                        disabled={section.disabled}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                          section.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'
                        } ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Категории инструкций */}
              {instructionsData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  {/* Заголовок категории */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 mb-4">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                      <FaRegFileAlt className="mr-3 text-[#023E8A]" />
                      {category.category}
                    </h2>
                  </div>

                  {/* Файлы инструкций */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.files.map((file, fileIndex) => (
                      <motion.a
                        key={fileIndex}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: fileIndex * 0.05 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-200 group"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                            <file.icon className="text-white text-xs" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#023E8A] transition-colors duration-200 text-xs leading-tight">
                              {file.name}
                            </h3>
                          </div>
                        </div>
                        <FaDownload className="text-gray-400 group-hover:text-[#023E8A] transition-colors duration-200 text-sm" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Информация о документах */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaBook className="mr-2 text-[#023E8A]" />
                  {t('instructions.documentsInfo.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {documentsInfoItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center p-2 bg-white/70 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 text-xs">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaRegFileAlt className="text-yellow-600 text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {t('instructions.contact.title')}
                    </h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      {t('instructions.contact.description')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('instructions.contact.phone')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('instructions.contact.email')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('instructions.contact.location')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Instructions;