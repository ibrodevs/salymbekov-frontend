import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft,
  FaBook,
  FaDownload,
  FaFileAlt
} from 'react-icons/fa';

const ScientificJournal = () => {
  const { t } = useTranslation();
  const [activeIssue, setActiveIssue] = useState(1);

  const issues = Array.from({ length: 9 }, (_, i) => i + 1);

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
            Назад к науке
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('science.journal.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('science.journal.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('science.journal.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Issues Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaBook className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('science.journal.issuesTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {issues.map((issue) => (
                  <motion.button
                    key={issue}
                    onClick={() => setActiveIssue(issue)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                      activeIssue === issue
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t('science.journal.issue')} №{issue}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Journal Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                  <FaFileAlt className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">О журнале</h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('science.journal.description')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('science.journal.publishes')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{t('science.journal.directions.medical')}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{t('science.journal.directions.biological')}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{t('science.journal.directions.education')}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Active Issue Content */}
            <motion.div
              key={activeIssue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {t('science.journal.issue')} №{activeIssue}
                </h2>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <FaDownload />
                  {t('science.journal.downloadPdf')}
                </motion.a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                {t('science.journal.articlesList')}
              </h3>

              {activeIssue === 1 && (
                <div className="space-y-8">
                  {/* Section I */}
                  <div>
                    <h4 className="font-bold text-lg text-[#023E8A] mb-4 uppercase">
                      I. Вопросы фундаментальной и клинической медицины. Медицинское образование
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Сравнительный анализ представлений о профессии бакалавра сестринского дела у студентов и преподавателей.",
                          authors: "Лапик С.В., Матвиенко В.В., Захарчук О.В."
                        },
                        {
                          title: "Кыргыз Республикадагы мите курт ооруларынын жана бир нече мите курттарынын айкалышынын эпидемиологиялык абалы",
                          authors: "Раимкулов К.М., Мамбет к. Гулина, АкылбековаА.А."
                        },
                        {
                          title: "Современная эпидемиологическая ситуация по эхинококкозам в Кыргызской Республике на примере Ошской области",
                          authors: "Раимкулов К.М., Тойгомбаева В.С., Куттубаев О.Т., Акылбекова А.А"
                        }
                      ].map((article, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#0077B6]/30 hover:shadow-md transition-all group"
                        >
                          <p className="text-gray-900 font-medium mb-2">{article.title}</p>
                          <p className="text-sm text-gray-600 mb-3">{article.authors}</p>
                          <a href="#" className="text-[#0077B6] hover:text-[#023E8A] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            <FaDownload className="text-xs" />
                            PDF
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Placeholder for other sections */}
                  <div className="text-center py-8 text-gray-500">
                    <p>Остальные разделы и статьи...</p>
                  </div>
                </div>
              )}

              {activeIssue !== 1 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-4xl text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    Содержание выпуска №{activeIssue} скоро будет добавлено
                  </p>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ScientificJournal;
