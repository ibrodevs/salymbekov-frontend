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
  const { t } = useTranslation();

  const tasks = [
    "Развитие учеными Университета приоритетных направлений науки и техники, повышение роли вузовской науки в ускорении научно-технического прогресса, обеспечение эффективного использования интеллектуального и научного потенциала Университета, создание необходимых условий его стабильного развития.",
    "Обеспечение приоритетного развития фундаментальных и поисковых исследований в приоритетных направлениях развития научных исследований и работе с интеллектуальной собственностью.",
    "Совершенствование планирования и организационных форм научно-исследовательской работы и т.д.",
    "Разработка предложений и мер по сохранению научного потенциала Университета, развитию научно-педагогических коллективов, по подготовке научно-педагогических кадров высшей квалификации (докторов и кандидатов наук).",
    "Содействие интеграционным процессам между Университетом и научными организациями.",
    "Содействие развитию научно-исследовательской работы обучающихся.",
    "Разработка предложений и мер по информационному обеспечению научных исследований.",
    "Подготовка предложений и рекомендаций по использованию результатов научных исследований в образовательном процессе.",
    "Анализ и оценка основных результатов научных исследований и разработок, осуществляемых в Университете.",
    "Подготовка предложений по созданию и реорганизации научно-инновационных структур, обновлению научного оборудования."
  ];

  const members = [
    { name: "Toktogazy Moldalievich Tulekeev, MD, prof.", role: "chairman" },
    { name: "Uzakbaev Kamchibek Askarbekovich, MD, prof.", role: "deputy chairman" },
    { name: "Imankulova Asel Sansyzbaevna, MD, prof.", role: "scientific secretary" },
    { name: "Zhumadilov Esengeldi Zhumadilovich, PhD", role: "member" },
    { name: "Abdyldaev Rysbek Aldagandaevich, MD, prof.", role: "member" },
    { name: "Atikanov Arystanbek Orozalyevich, MD, prof.", role: "member" },
    { name: "Monolov Nurbek Chynbekovich MD, prof.", role: "member" },
    { name: "Umetalieva Maana Nurdinovna, PhD., Assoc.", role: "member" },
    { name: "Tolubaeva Munara Zholchuevna, PhD.", role: "member" }
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
              Назад к органам управления
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white/90 text-sm font-medium">
                  {t('science.management.scientificCouncil.badge')}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">
                {t('science.management.scientificCouncil.title')}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {t('science.management.scientificCouncil.subtitle')}
              </p>
            </motion.div>
          </div>
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
              <FaFileAlt className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.scientificCouncil.generalTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('science.management.scientificCouncil.generalText')}
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
              <FaClipboardCheck className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.scientificCouncil.goalsTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {t('science.management.scientificCouncil.goalsText')}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t('science.management.scientificCouncil.tasksTitle')}
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
                  {task}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Состав НТС */}
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
              {t('science.management.scientificCouncil.compositionTitle')}
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
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-[#0077B6]/30"
              >
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  {member.name}
                </p>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#023E8A]/10 to-[#0077B6]/10 text-[#023E8A] rounded-full text-sm font-medium">
                  {member.role}
                </span>
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
                  {t('science.management.scientificCouncil.downloadTitle')}
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                {t('science.management.scientificCouncil.downloadDesc')}
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
              {t('science.management.scientificCouncil.downloadBtn')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScientificTechnicalCouncil;
