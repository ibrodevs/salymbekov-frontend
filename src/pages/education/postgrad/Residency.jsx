// Residency.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaGraduationCap,
  FaAward,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaCalendarAlt,
  FaBookMedical,
  FaClinicMedical,
  FaHeartbeat
} from "react-icons/fa";

const Residency = () => {
  const { t } = useTranslation();

  const programFeatures = [
    {
      icon: <FaUserMd className="text-white" size={24} />,
      title: t('residency.features.practical.title'),
      description: t('residency.features.practical.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBookMedical className="text-white" size={24} />,
      title: t('residency.features.specialization.title'),
      description: t('residency.features.specialization.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('residency.features.certification.title'),
      description: t('residency.features.certification.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaClinicMedical className="text-white" size={24} />,
      title: t('residency.features.clinics.title'),
      description: t('residency.features.clinics.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programStats = [
    {
      number: "2",
      label: t('residency.stats.years'),
      icon: <FaCalendarAlt className="text-[#023E8A]" />
    },
    {
      number: "4+",
      label: t('residency.stats.clinics'),
      icon: <FaHospital className="text-[#023E8A]" />
    },
    {
      number: "100%",
      label: t('residency.stats.practical'),
      icon: <FaStethoscope className="text-[#023E8A]" />
    },
    {
      number: "9",
      label: t('residency.stats.specialties'),
      icon: <FaUserMd className="text-[#023E8A]" />
    }
  ];

  const clinicalBases = [
    {
      name: t('residency.clinics.docUniversity.name'),
      description: t('residency.clinics.docUniversity.description'),
      icon: <FaHospital className="text-[#0077B6]" />
    },
    {
      name: t('residency.clinics.docUniversityHospital.name'),
      description: t('residency.clinics.docUniversityHospital.description'),
      icon: <FaClinicMedical className="text-[#0077B6]" />
    },
    {
      name: t('residency.clinics.lazmed.name'),
      description: t('residency.clinics.lazmed.description'),
      icon: <FaHeartbeat className="text-[#0077B6]" />
    },
    {
      name: t('residency.clinics.dordoiOphthalmic.name'),
      description: t('residency.clinics.dordoiOphthalmic.description'),
      icon: <FaStethoscope className="text-[#0077B6]" />
    }
  ];

  const specialties = [
    {
      title: t('residency.specialties.internal.title'),
      description: t('residency.specialties.internal.description')
    },
    {
      title: t('residency.specialties.surgery.title'),
      description: t('residency.specialties.surgery.description')
    },
    {
      title: t('residency.specialties.pediatrics.title'),
      description: t('residency.specialties.pediatrics.description')
    },
    {
      title: t('residency.specialties.obstetrics.title'),
      description: t('residency.specialties.obstetrics.description')
    },
    {
      title: t('residency.specialties.psychiatry.title'),
      description: t('residency.specialties.psychiatry.description')
    },
    {
      title: t('residency.specialties.ophthalmology.title'),
      description: t('residency.specialties.ophthalmology.description')
    }
  ];

  const admissionRequirements = [
    {
      requirement: t('residency.admission.degree.title'),
      description: t('residency.admission.degree.description')
    },
    {
      requirement: t('residency.admission.mfm.title'),
      description: t('residency.admission.mfm.description')
    },
    {
      requirement: t('residency.admission.exams.title'),
      description: t('residency.admission.exams.description')
    },
    {
      requirement: t('residency.admission.interview.title'),
      description: t('residency.admission.interview.description')
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
            <FaStethoscope className="text-xl" />
            <span className="font-semibold">{t('residency.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('residency.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('residency.subtitle')}
          </p>
        </motion.div>

        {/* Статистика программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {programStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* О программе */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('residency.about.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('residency.about.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('residency.about.description1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('residency.about.description2')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('residency.about.description3')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t('residency.about.programGoal')}
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  {t('residency.about.goalDescription')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Особенности программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('residency.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('residency.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Клинические базы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('residency.clinics.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('residency.clinics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clinicalBases.map((clinic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {clinic.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {clinic.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {clinic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Специальности */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('residency.specialties.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('residency.specialties.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Требования к поступлению */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('residency.admission.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('residency.admission.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {admissionRequirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-blue-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0077B6] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {requirement.requirement}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {requirement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('residency.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('residency.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('residency.cta.apply')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('residency.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Residency;