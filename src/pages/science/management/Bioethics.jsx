import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaBalanceScale,
  FaShieldAlt,
  FaUserMd,
  FaClipboardList
} from 'react-icons/fa';
import batyralievPhoto from '../../../assets/science/management/batyraliev-235x300.jpeg';

const Bioethics = () => {
  const { t } = useTranslation();

  const tasks = [
    "Защита прав, достоинства, интересов, безопасности и здоровья участников клинических исследований, а также контроль над соблюдением прав пациентов при получении медицинской помощи в клиниках университета",
    "Решение морально-этических проблем, связанных с публикациями результатов научных исследований, в т.ч. проблем плагиата, недостоверности результатов научных исследований, соблюдения авторских прав",
    "Регулирование этических вопросов научно-исследовательских работ, клинических испытаний лекарственных средств на основе принятых нормативно-правовых документов",
    "Соблюдение международных и национальных стандартов апробации и внедрения в практику клинических подразделений университета новых технологий диагностики, лечения и профилактики, новых лекарственных препаратов",
    "Достижение независимой и объективной оценке безопасности и неприкосновенности прав человека по отношению к испытуемым, как на стадии планирования, так и на стадии проведения исследования",
    "Обеспечение быстрого и четкого информирования соответствующих организаций о возникновении любых нежелательных реакций при проведении исследования",
    "Выявление случаев нарушения принципов медицинской этики и деонтологии медицинскими, научными и иными работниками университета"
  ];

  const functions = [
    "Проведение этической экспертизы проектов научных исследований, планируемых к проведению на площадках университета",
    "Проведение качественной этической экспертизы материалов планируемых клинических исследований лекарственных средств или изделий медицинского назначения",
    "Экспертиза научно-исследовательских проектов и исследований, в которых привлекаются как больные, так и здоровые люди, животные",
    "Анализ этической обоснованности клинических и биомедицинских исследований и предполагаемой эффективности и безопасности изучаемых лекарственных средств",
    "Подготовка заключений о целесообразности проведения клинических и биомедицинских исследований",
    "Осуществление контроля над соблюдением этико-правовых норм в ходе клинического исследования",
    "Осуществление контроля за соблюдением принципов медицинской этики и деонтологии",
    "Изучение и применение международного опыта правового и этического регулирования при проведении исследований",
    "Организация и проведение научно-теоретических и практических мероприятий по биоэтической проблематике",
    "Участие в этико-правовом просвещении медицинских работников и граждан",
    "Участие в экспертной оценке рекламы медицинской и фармацевтической деятельности",
    "Разработка и внедрение различных методов этического воспитания сотрудников университета"
  ];

  const committee = [
    { name: "Батыралиев Т.А.", role: "Зам.председателя: Тулекеев Т.М., д.м.н., проф." },
    { name: "Ответственный секретарь", role: "Князев И.А." }
  ];

  const members = [
    "Кулданбаев Н.К. – д.м.н.",
    "Монолов Н.К. – к.м.н."
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
                {t('science.management.bioethics.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('science.management.bioethics.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('science.management.bioethics.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Описание */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.bioethics.descTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('science.management.bioethics.descText')}
          </p>
        </motion.div>

        {/* Председатель комитета */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaUserMd className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.bioethics.chairmanTitle')}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={batyralievPhoto} 
                alt="Батыралиев Талантбек Абдуллаевич" 
                className="w-64 h-auto rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('science.management.bioethics.chairmanName')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('science.management.bioethics.chairmanDesc')}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold text-[#023E8A]">Зам.председателя:</span> Тулекеев Т.М., д.м.н., проф.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold text-[#023E8A]">Ответственный секретарь:</span> Князев И.А.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-900 mb-3">Члены:</p>
              <div className="space-y-2">
                {members.map((member, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-100">
                    <p className="text-gray-700">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Основные задачи */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaBalanceScale className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.bioethics.tasksTitle')}
            </h2>
          </div>
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

        {/* Основные функции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaClipboardList className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('science.management.bioethics.functionsTitle')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {functions.map((func, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-[#0077B6]/30"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {func}
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

export default Bioethics;
