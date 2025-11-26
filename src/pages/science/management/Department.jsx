import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaGlobe,
  FaBullseye,
  FaTasks,
  FaUserTie
} from 'react-icons/fa';
import abdyldaevPhoto from '../../../assets/science/management/rysbek-aldagandaevich-250x300.jpg';

const Department = () => {
  const { t } = useTranslation();

  const tasks = [
    "Организация на высоком профессиональном уровне международной деятельности факультетов и иных структурных подразделений Университета, координация их работы",
    "Участие в формировании и реализации политики Университета в области международных и внешнеэкономических связей",
    "Определение целесообразности заключения соглашений в области международных и внешнеэкономических связей Университета",
    "Определение целесообразности открытия представительств и филиалов Университета в регионах и осуществление контроля за их деятельностью",
    "Содействие в привлечении иностранных инвестиций",
    "Формирование и реализация международных проектов и программ за рубежом и в Кыргызской Республике",
    "Организация участия Университета в международных межвузовских ассоциациях и иных организациях",
    "Осуществление информационно-представительской деятельности Университета",
    "Развитие международных связей с учебными заведениями, фондами, и другими организациями зарубежных стран",
    "Проведение аналитической работы по оценке состояния международной деятельности Университета",
    "Ведение учета, анализа, информационное и организационное обеспечение деятельности Университета в сфере международных связей",
    "Вовлечение профессорско-преподавательского состава в международное сотрудничество",
    "Координация международного сотрудничества факультетов, кафедр и других структурных подразделений",
    "Осуществление текущей консультационной и иной помощи подразделениям и сотрудникам Университета",
    "Организация работы иностранных преподавателей в Университете",
    "Организация обучения студентов, аспирантов, стажировок преподавателей и сотрудников за рубежом",
    "Организация обучения иностранных студентов, аспирантов, докторантов и стажеров",
    "Проведение маркетинговых исследований рынка международных образовательных услуг"
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
                {t('science.management.department.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('science.management.department.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('science.management.department.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaGlobe className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">О департаменте</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('science.management.department.introText')}
          </p>
        </motion.div>

        {/* Руководитель */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaUserTie className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.department.headTitle')}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={abdyldaevPhoto} 
                alt="Абдылдаев Рыспек Алдагандаевич" 
                className="w-64 h-auto rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('science.management.department.headName')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('science.management.department.headDesc')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Цели */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaBullseye className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.department.objectivesTitle')}
            </h2>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('science.management.department.goalsTitle')}
          </h3>
          <div className="mb-8 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Организация и координация участия Университета в программах научного сотрудничества, способствующих повышению качества подготовки специалистов, реализации совместных научных исследований и, в целом, повышению престижа Университета на международном уровне.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Обеспечение интеграции Университета в международное университетское сообщество, получение дополнительных возможностей по ускоренному развитию в рамках:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="text-gray-700 text-lg flex items-start">
                <span className="text-[#023E8A] mr-2">•</span>
                программ академического обмена студентами
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="text-[#023E8A] mr-2">•</span>
                программ обмена научно-педагогическими работниками
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="text-[#023E8A] mr-2">•</span>
                программ повышения квалификации, стажировки
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="text-[#023E8A] mr-2">•</span>
                создания совместных образовательных программ
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="text-[#023E8A] mr-2">•</span>
                участия в совместных научно-исследовательских грантах
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="text-[#023E8A] mr-2">•</span>
                приема и обучения иностранных граждан
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t('science.management.department.tasksTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-[#0077B6]/30 group"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {task}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Department;
