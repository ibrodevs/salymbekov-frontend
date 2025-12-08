import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaDownload,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaStethoscope,
  FaLanguage,
  FaUsers,
  FaAward,
  FaGraduationCap,
  FaBook
} from "react-icons/fa";

const Rector = () => {
  const { t } = useTranslation();

  // Статистика у

  // Данные проректоров
  const viceRectors = [
    {
      id: 1,
      title: t('rector.viceRectors.externalRelations.title'),
      description: t('rector.viceRectors.externalRelations.description'),
      image: "https://salymbekov.com/wp-content/uploads/2023/06/qip-shot-screen-131-300x288.png",
      imageAlt: t('rector.viceRectors.externalRelations.imageAlt'),
      resumeUrl: "https://salymbekov.com/wp-content/uploads/2023/03/rezjume-kazakova-a.a..pdf",
      icon: <FaUsers className="text-white" size={20} />
    },
    {
      id: 2,
      title: t('rector.viceRectors.educationalWork.title'),
      description: t('rector.viceRectors.educationalWork.description'),
      image: "https://salymbekov.com/wp-content/uploads/2021/04/tulekeev-toktogazy-moldalievich-300x200.jpg",
      imageAlt: t('rector.viceRectors.educationalWork.imageAlt'),
      resumeUrl: "https://salymbekov.com/wp-content/uploads/2023/03/rezjume-tulekeeva.pdf",
      icon: <FaGraduationCap className="text-white" size={20} />
    },
    {
      id: 3,
      title: t('rector.viceRectors.clinicalWork.title'),
      description: t('rector.viceRectors.clinicalWork.description'),
      image: "https://salymbekov.com/wp-content/uploads/2021/03/monolov-nurbek-kytajbekovich-300x200.jpg",
      imageAlt: t('rector.viceRectors.clinicalWork.imageAlt'),
      resumeUrl: "https://salymbekov.com/wp-content/uploads/2023/03/resume-nurbek-monolov.pdf",
      icon: <FaStethoscope className="text-white" size={20} />
    },
    {
      id: 4,
      title: t('rector.viceRectors.stateLanguage.title'),
      description: t('rector.viceRectors.stateLanguage.description'),
      image: "https://salymbekov.com/wp-content/uploads/2021/04/mazekova-nazgul-zholochievna-300x200.jpg",
      imageAlt: t('rector.viceRectors.stateLanguage.imageAlt'),
      resumeUrl: null,
      icon: <FaLanguage className="text-white" size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Герой секция - теперь с тем же фоном что и вся страница */}
        <section className="relative py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaUserGraduate className="text-xl" />
              <span className="font-semibold">{t('rector.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('rector.hero.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* Основной контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        
        

          {/* Обращение ректора */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {t('rector.address.title')}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                  {t('rector.address.greeting')}
                </h3>
              </div>

              {/* Ректор с изображением */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl opacity-20 blur-lg"></div>
                    <motion.img 
                      src="https://salymbekov.com/wp-content/uploads/2021/01/%D0%96%D1%83%D0%BC%D0%B0%D0%B4%D0%B8%D0%BB%D0%BE%D0%B2-%D0%AD%D1%81%D0%B5%D0%BD%D0%B3%D0%B5%D0%BB%D0%B4%D0%B8-%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-1024x683.jpg"
                      alt={t('rector.rectorImageAlt')}
                      className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center"
                >
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {t('rector.description1')}
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {t('rector.description2')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Дополнительный текст ректора */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6 mb-8"
              >
                {[t('rector.description3'), t('rector.description4'), t('rector.description5'), t('rector.description6')].map((desc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A]"
                  >
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Подпись и кнопка скачивания */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-3"
                >
                  <p className="text-gray-700 text-lg">
                    {t('rector.signature.respectfully')}
                  </p>
                  <p className="text-gray-700 text-xl font-semibold">
                    {t('rector.signature.position')}
                  </p>
                  <p className="text-gray-700 text-lg">
                    {t('rector.signature.name')}
                  </p>
                </motion.div>

                <motion.a
                  href="https://salymbekov.com/wp-content/uploads/2023/03/rezjume-jesengeldi_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaDownload className="mr-3" />
                  {t('rector.downloadButton')}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Проректоры */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('rector.viceRectors.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('rector.viceRectors.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {viceRectors.map((viceRector, index) => (
                <motion.div
                  key={viceRector.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                      {/* Изображение и основная информация */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                            {viceRector.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {viceRector.title}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="flex items-center justify-center">
                            <div className="relative">
                              <div className="absolute -inset-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl opacity-20 blur-sm"></div>
                              <img 
                                src={viceRector.image}
                                alt={viceRector.imageAlt}
                                className="w-full h-auto rounded-lg shadow-lg relative z-10"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <p className="text-gray-700 text-lg leading-relaxed">
                              {viceRector.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Кнопка скачивания (если есть резюме) */}
                      {viceRector.resumeUrl && (
                        <div className="flex flex-col gap-4 lg:w-48">
                          <motion.a
                            href={viceRector.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <FaDownload className="text-sm" />
                            {t('rector.downloadButton')}
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Rector;