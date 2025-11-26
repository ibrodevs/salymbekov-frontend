import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaCode,
  FaLaptop,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaAward,
  FaLinkedin,
  FaEnvelope,
  FaBook,
  FaLightbulb,
  FaChartLine,
  FaMicrochip
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const ITDepartmentPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: t('itDepartment.filters.all'), count: 7 },
    { id: "faculty", label: t('itDepartment.filters.faculty'), count: 4 },
    { id: "staff", label: t('itDepartment.filters.staff'), count: 3 }
  ];

  const stats = [
    { number: "50+", label: t('itDepartment.stats.courses'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "15", label: t('itDepartment.stats.labs'), icon: <FaLaptop className="text-[#023E8A]" /> },
    { number: "1000+", label: t('itDepartment.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "95%", label: t('itDepartment.stats.employment'), icon: <FaChartLine className="text-[#023E8A]" /> }
  ];

  const features = [
    {
      icon: <FaCode className="text-white" size={24} />,
      title: t('itDepartment.features.modernTech.title'),
      description: t('itDepartment.features.modernTech.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaMicrochip className="text-white" size={24} />,
      title: t('itDepartment.features.research.title'),
      description: t('itDepartment.features.research.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('itDepartment.features.innovation.title'),
      description: t('itDepartment.features.innovation.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('itDepartment.features.career.title'),
      description: t('itDepartment.features.career.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const teachers = [
    {
      id: 1,
      name: t('itDepartment.teachers.teacher1.name'),
      position: t('itDepartment.teachers.teacher1.position'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/alisa.png',
      text: t('itDepartment.teachers.teacher1.text'),
      subjects: t('itDepartment.teachers.teacher1.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher1.experience'),
      category: "faculty",
      featured: true,
      social: {
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 2,
      name: t('itDepartment.teachers.teacher2.name'),
      position: t('itDepartment.teachers.teacher2.position'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/nursultan.png',
      text: t('itDepartment.teachers.teacher2.text'),
      subjects: t('itDepartment.teachers.teacher2.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher2.experience'),
      category: "faculty",
      featured: true,
      social: {
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 3,
      name: t('itDepartment.teachers.teacher3.name'),
      position: t('itDepartment.teachers.teacher3.position'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/syrdybaev.png',
      text: t('itDepartment.teachers.teacher3.text'),
      subjects: t('itDepartment.teachers.teacher3.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher3.experience'),
      category: "faculty",
      featured: false,
      social: {
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 4,
      name: t('itDepartment.teachers.teacher4.name'),
      position: t('itDepartment.teachers.teacher4.position'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/kalbaeva.png',
      text: t('itDepartment.teachers.teacher4.text'),
      subjects: t('itDepartment.teachers.teacher4.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher4.experience'),
      category: "faculty",
      featured: false,
      social: {
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 5,
      name: t('itDepartment.teachers.teacher5.name'),
      position: t('itDepartment.teachers.teacher5.position'),
      image: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-man-avatar-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2-215427929.jpg',
      text: t('itDepartment.teachers.teacher5.text'),
      subjects: t('itDepartment.teachers.teacher5.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher5.experience'),
      category: "staff",
      featured: false,
      social: {
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 6,
      name: t('itDepartment.teachers.teacher6.name'),
      position: t('itDepartment.teachers.teacher6.position'),
      image: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-man-avatar-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2-215427929.jpg',
      text: t('itDepartment.teachers.teacher6.text'),
      subjects: t('itDepartment.teachers.teacher6.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher6.experience'),
      category: "staff",
      featured: false,
      social: {
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 7,
      name: t('itDepartment.teachers.teacher7.name'),
      position: t('itDepartment.teachers.teacher7.position'),
      image: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-man-avatar-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2-215427929.jpg',
      text: t('itDepartment.teachers.teacher7.text'),
      subjects: t('itDepartment.teachers.teacher7.subjects', { returnObjects: true }),
      experience: t('itDepartment.teachers.teacher7.experience'),
      category: "staff",
      featured: false,
      social: {
        linkedin: '#',
        email: '#'
      }
    }
  ];

  const filteredTeachers = teachers.filter(teacher => 
    activeFilter === "all" || teacher.category === activeFilter
  );

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            <strong className="text-xl font-bold text-gray-800">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-lg text-gray-600">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <FaCode className="text-xl" />
            <span className="font-semibold">{t('itDepartment.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('itDepartment.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('itDepartment.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
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

        {/* Информация о кафедре */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {t('itDepartment.department.title')}
            </h2>
            <div className="prose max-w-none">
              {formatTextWithBold(t('itDepartment.department.content'))}
            </div>
          </div>
        </motion.div>

        {/* Особенности кафедры */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('itDepartment.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('itDepartment.features.subtitle')}
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

        {/* Фильтры преподавателей */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Преподаватели */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="grid gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Фото и основная информация */}
                    <div className="lg:w-1/3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative group"
                      >
                        <img 
                          src={teacher.image} 
                          alt={teacher.name}
                          className="w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                        />
                        {teacher.featured && (
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            <FaAward className="text-xs" />
                            {t('itDepartment.featured')}
                          </span>
                        )}
                      </motion.div>

                      <div className="text-center mt-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {teacher.name}
                        </h3>
                        <p className="text-lg text-[#023E8A] font-semibold mb-3">
                          {teacher.position}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {teacher.experience}
                        </p>

                        {/* Социальные сети */}
                        <div className="flex justify-center gap-4">
                          <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href={teacher.social.linkedin}
                            className="bg-gray-100 text-[#023E8A] p-3 rounded-xl hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                          >
                            <FaLinkedin />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href={`mailto:${teacher.social.email}`}
                            className="bg-gray-100 text-[#023E8A] p-3 rounded-xl hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                          >
                            <FaEnvelope />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Текст и предметы */}
                    <div className="lg:w-2/3">
                      <div className="text-gray-700 mb-6">
                        {formatTextWithBold(teacher.text)}
                      </div>

                      {/* Преподаваемые предметы */}
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaBook className="text-[#023E8A]" />
                          {t('itDepartment.subjects')}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('itDepartment.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('itDepartment.cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('itDepartment.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ITDepartmentPage;