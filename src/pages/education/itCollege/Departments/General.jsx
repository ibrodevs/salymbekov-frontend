import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaAward,
  FaHeart,
  FaQuoteLeft,
  FaStar,
  FaCalendarAlt,
  FaUserGraduate,
  FaLightbulb,
  FaHandshake
} from "react-icons/fa";

const GeneralEducationDepartmentPage = () => {
  const { t } = useTranslation();
  const [activeTeacher, setActiveTeacher] = useState(0);

  const stats = [
  ];

  const features = [
    {
      icon: <FaBook className="text-white" size={24} />,
      title: t('generalEducation.features.foundation.title'),
      description: t('generalEducation.features.foundation.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('generalEducation.features.individual.title'),
      description: t('generalEducation.features.individual.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('generalEducation.features.modern.title'),
      description: t('generalEducation.features.modern.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('generalEducation.features.practical.title'),
      description: t('generalEducation.features.practical.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const teachers = [
    {
      name: t('generalEducation.teachers.teacher1.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/alijarova-mukaddas-juldashevna-300x200.jpg',
      text: t('generalEducation.teachers.teacher1.text'),
      subject: t('generalEducation.teachers.teacher1.subject'),
      experience: t('generalEducation.teachers.teacher1.experience'),
      achievements: t('generalEducation.teachers.teacher1.achievements', { returnObjects: true })
    },
    {
      name: t('generalEducation.teachers.teacher2.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/arykov-danijar-kanybekovich-300x200.png',
      text: t('generalEducation.teachers.teacher2.text'),
      subject: t('generalEducation.teachers.teacher2.subject'),
      experience: t('generalEducation.teachers.teacher2.experience'),
      achievements: t('generalEducation.teachers.teacher2.achievements', { returnObjects: true })
    },
    {
      name: t('generalEducation.teachers.teacher3.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/kurbanbaeva-nurgul-toktoshevna-300x200.jpg',
      text: t('generalEducation.teachers.teacher3.text'),
      subject: t('generalEducation.teachers.teacher3.subject'),
      experience: t('generalEducation.teachers.teacher3.experience'),
      achievements: t('generalEducation.teachers.teacher3.achievements', { returnObjects: true })
    },
    {
      name: t('generalEducation.teachers.teacher4.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2021/04/mazekova-nazgul-zholochievna-300x200.jpg',
      text: t('generalEducation.teachers.teacher4.text'),
      subject: t('generalEducation.teachers.teacher4.subject'),
      experience: t('generalEducation.teachers.teacher4.experience'),
      achievements: t('generalEducation.teachers.teacher4.achievements', { returnObjects: true })
    },
    {
      name: t('generalEducation.teachers.teacher5.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/pirimbaeva-zharkyn-zhusupzhanovna-300x200.jpg',
      text: t('generalEducation.teachers.teacher5.text'),
      subject: t('generalEducation.teachers.teacher5.subject'),
      experience: t('generalEducation.teachers.teacher5.experience'),
      achievements: t('generalEducation.teachers.teacher5.achievements', { returnObjects: true })
    },
    {
      name: t('generalEducation.teachers.teacher7.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/toktoraliev-jerkinbek-torobekovich-300x200.png',
      text: t('generalEducation.teachers.teacher7.text'),
      subject: t('generalEducation.teachers.teacher7.subject'),
      experience: t('generalEducation.teachers.teacher7.experience'),
      achievements: t('generalEducation.teachers.teacher7.achievements', { returnObjects: true })
    }
  ];

  const headOfDepartment = {
    name: t('generalEducation.headOfDepartment.name'),
    image: 'https://salymbekov.com/wp-content/uploads/2023/02/foto-batrakeeva-gulina-211x300.jpg',
    text: t('generalEducation.headOfDepartment.text'),
    position: t('generalEducation.headOfDepartment.position'),
    experience: t('generalEducation.headOfDepartment.experience'),
    education: t('generalEducation.headOfDepartment.education')
  };

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
            <strong className="font-bold text-[#023E8A]">
              {line.replace(/<strong>|<\/strong>/g, '')}
            </strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
              y: [0, -30, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Герой секция */}
        <section className="relative py-24 bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 right-10 opacity-10">
            <FaGraduationCap size={200} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <FaBook size={150} className="text-white" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative container mx-auto px-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/20 text-white px-6 py-3 rounded-full mb-6 backdrop-blur-sm"
            >
              <FaGraduationCap className="text-xl" />
              <span className="font-semibold">{t('generalEducation.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('generalEducation.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('generalEducation.subtitle')}
            </p>
          </motion.div>
        </section>

  

        {/* Основной контент */}
        <section className="py-16  relative">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Описание отделения */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('generalEducation.department.title')}
              </h2>
              <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                {formatTextWithBold(t('generalEducation.department.content'))}
              </div>
            </motion.div>

            {/* Особенности обучения */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {t('generalEducation.features.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {t('generalEducation.features.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
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
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Заведующая отделением */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white mb-8">
                <div className="text-center mb-6">
                  <FaQuoteLeft className="text-4xl opacity-50 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-2">{headOfDepartment.name}</h2>
                  <p className="text-white/80 text-lg">{headOfDepartment.position}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    <img 
                      src={headOfDepartment.image} 
                      alt={headOfDepartment.name}
                      className="w-full h-80 object-cover object-top"
                    />
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaAward className="text-[#023E8A]" />
                          <span className="font-semibold">{headOfDepartment.experience}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaGraduationCap className="text-[#023E8A]" />
                          <span>{headOfDepartment.education}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                    <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                      {formatTextWithBold(headOfDepartment.text)}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Преподаватели */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {t('generalEducation.teachers.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {t('generalEducation.teachers.subtitle')}
                </p>
              </div>

              {/* Навигация по преподавателям */}
              <div className="flex overflow-x-auto gap-3 mb-8 pb-4">
                {teachers.map((teacher, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTeacher(index)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeTeacher === index
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {teacher.name.split(' ')[0]}
                  </motion.button>
                ))}
              </div>

              {/* Карточка преподавателя */}
              <motion.div
                key={activeTeacher}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Фото и основная информация */}
                    <div className="md:col-span-1">
                      <img 
                        src={teachers[activeTeacher].image} 
                        alt={teachers[activeTeacher].name}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
                      />
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {teachers[activeTeacher].name}
                        </h3>
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          {teachers[activeTeacher].subject}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaCalendarAlt className="text-[#023E8A]" />
                          <span>{teachers[activeTeacher].experience}</span>
                        </div>
                      </div>
                    </div>

                    {/* Описание и достижения */}
                    <div className="md:col-span-2">
                      <div className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6">
                        {formatTextWithBold(teachers[activeTeacher].text)}
                      </div>

                    
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Индикаторы преподавателей */}
              <div className="flex justify-center mt-6 space-x-2">
                {teachers.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTeacher(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTeacher 
                        ? 'bg-[#023E8A] shadow-lg scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Призыв к действию */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('generalEducation.cta.title')}
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                {t('generalEducation.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('generalEducation.cta.contact')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  {t('generalEducation.cta.learnMore')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneralEducationDepartmentPage;