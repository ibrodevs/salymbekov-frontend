import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap,
  FaUserGraduate,
  FaBook,
  FaGlobe,
  FaLightbulb,
  FaCalendarAlt,
  FaAward,
  FaUniversity,
  FaChalkboardTeacher,
  FaResearchgate,
  FaArrowRight,
  FaCheckCircle,
  FaFileAlt
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Postgraduate = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("admission");

  // Статистика аспирантуры
  const stats = [
  ];

  // Вступительные испытания
  const entranceExams = [
    {
      subject: t('postgraduate.exams.profile.title'),
      description: t('postgraduate.exams.profile.description'),
      icon: <FaBook className="text-white" size={24} />,
      color: "bg-[#023E8A]",
      details: t('postgraduate.exams.profile.details', { returnObjects: true })
    },
    {
      subject: t('postgraduate.exams.language.title'),
      description: t('postgraduate.exams.language.description'),
      icon: <FaGlobe className="text-white" size={24} />,
      color: "bg-[#0077B6]",
      details: t('postgraduate.exams.language.details', { returnObjects: true })
    },
    {
      subject: t('postgraduate.exams.philosophy.title'),
      description: t('postgraduate.exams.philosophy.description'),
      icon: <FaLightbulb className="text-white" size={24} />,
      color: "bg-[#0096C7]",
      details: t('postgraduate.exams.philosophy.details', { returnObjects: true })
    }
  ];

  // Преимущества аспирантуры
  const benefits = [
    {
      icon: <FaChalkboardTeacher className="text-white" size={24} />,
      title: t('postgraduate.benefits.professors.title'),
      description: t('postgraduate.benefits.professors.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaResearchgate className="text-white" size={24} />,
      title: t('postgraduate.benefits.research.title'),
      description: t('postgraduate.benefits.research.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('postgraduate.benefits.career.title'),
      description: t('postgraduate.benefits.career.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaUniversity className="text-white" size={24} />,
      title: t('postgraduate.benefits.legislation.title'),
      description: t('postgraduate.benefits.legislation.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Процесс поступления
  const admissionSteps = [
    {
      step: "01",
      title: t('postgraduate.admission.steps.application.title'),
      description: t('postgraduate.admission.steps.application.description')
    },
    {
      step: "02",
      title: t('postgraduate.admission.steps.exams.title'),
      description: t('postgraduate.admission.steps.exams.description')
    },
    {
      step: "03",
      title: t('postgraduate.admission.steps.results.title'),
      description: t('postgraduate.admission.steps.results.description')
    },
    {
      step: "04",
      title: t('postgraduate.admission.steps.enrollment.title'),
      description: t('postgraduate.admission.steps.enrollment.description')
    }
  ];

  // Формы обучения
  const studyForms = [
    {
      type: t('postgraduate.forms.fullTime.title'),
      duration: t('postgraduate.forms.fullTime.duration'),
      description: t('postgraduate.forms.fullTime.description'),
      features: t('postgraduate.forms.fullTime.features', { returnObjects: true })
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaUserGraduate className="text-xl" />
            <span className="font-semibold">{t('postgraduate.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('postgraduate.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('postgraduate.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* О программе */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {t('postgraduate.about.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('postgraduate.about.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('postgraduate.about.description2')}
                </p>
              </div>

              {/* Формы обучения */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className="text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{t('postgraduate.forms.title')}</h3>
                </div>
                {studyForms.map((form, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold">{form.type}</h4>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                        {form.duration}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm mb-2">{form.description}</p>
                    <div className="space-y-1">
                      
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Вступительные испытания */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {t('postgraduate.exams.title')}
              </h3>
              
              <div className="space-y-4">
                {entranceExams.map((exam, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${exam.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {exam.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-1">{exam.subject}</h4>
                        <p className="text-gray-600 text-sm mb-2">{exam.description}</p>
                        <div className="space-y-1">
                       
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Процесс поступления */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('postgraduate.admission.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('postgraduate.admission.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 md:p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Преимущества аспирантуры */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('postgraduate.benefits.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('postgraduate.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Галерея */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('postgraduate.gallery.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://salymbekov.com/wp-content/uploads/2023/03/1-1024x683.jpg",
              "https://salymbekov.com/wp-content/uploads/2023/03/10-1024x683.jpg",
              "https://salymbekov.com/wp-content/uploads/2023/03/3-1-1024x576.jpg"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={image}
                  alt={`Аспирантура ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </div>
  );
};

export default Postgraduate;