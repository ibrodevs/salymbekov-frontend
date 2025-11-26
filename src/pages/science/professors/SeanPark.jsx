import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaUserGraduate, 
  FaBook, 
  FaAward, 
  FaGlobeAmericas, 
  FaGraduationCap, 
  FaUserMd,
  FaStethoscope,
  FaFlask,
  FaHeartbeat
} from 'react-icons/fa';
// Добавьте фото Sean Park в assets/science/professors/
// import seanParkPhoto from '../../../assets/science/professors/sean-park.jpg';

const SeanPark = () => {
  const seanParkPhoto = 'https://via.placeholder.com/300x400/023E8A/FFFFFF?text=Dr.+Sean+Park';
  const professorSections = [
    { 
      path: "/science/professors/sean-park", 
      name: "DR. SEAN PARK", 
      icon: FaUserGraduate,
      active: true 
    },
    { 
      path: "/science/professors/pendharkar", 
      name: "DR DINESH PENDHARKAR", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/potapova", 
      name: "ОЛЬГА ПОТАПОВА", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/osmonov", 
      name: "ДАНИЯР ОСМОНОВ", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/erkebaev", 
      name: "ЭРКЕБАЕВ АБДЫГАНЫ ЭРКЕБАЕВИЧ", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/madaminov", 
      name: "ГАПЫР МАДАМИНОВ", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/bilgaziev", 
      name: "ЭМИЛЬ БИЛГАЗИЕВ", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/kubatov", 
      name: "ЭДУАРД КУБАТОВ", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/shaltakova", 
      name: "ШАЛТАКОВА ГУЛБУ ЧАЛОВНА", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/kachibek", 
      name: "ПРОФЕССОР КАЧИБЕК", 
      icon: FaUserGraduate 
    }
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
                Профессорско-преподавательский состав
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Dr. Sean Park
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Международный эксперт в области медицинских исследований и инноваций
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUserGraduate className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">ПРОФЕССОРА</h3>
                </div>
              </div>
              <nav className="p-2">
                {professorSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={section.path}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Photo Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-80 flex-shrink-0"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={seanParkPhoto} 
                      alt="Dr. Sean Park" 
                      className="w-full h-96 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400/023E8A/FFFFFF?text=Dr.+Sean+Park';
                      }}
                    />
                  </div>
                  
                  {/* Quick Info */}
                  <div className="mt-6 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-blue-50 p-4 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center">
                        <FaUserMd className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Должность</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Международный медицинский эксперт</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <div className="flex items-center">
                        <FaFlask className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Специализация</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Медицинские исследования и инновации</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Dr. Sean Park</h2>
                    
                    {/* Description */}
                    <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                      <p className="text-lg leading-relaxed mb-6">
                        Доктор Шон Парк - признанный международный эксперт в области медицинских исследований 
                        и инновационных подходов в здравоохранении. Его работа охватывает широкий спектр 
                        медицинских дисциплин с акцентом на внедрение передовых технологий в клиническую практику.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Специализируется на разработке и внедрении инновационных методов диагностики и лечения, 
                        способствуя прогрессу в современной медицине через междисциплинарное сотрудничество.
                      </p>
                    </div>

                    {/* Education */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaBook className="mr-3 text-[#023E8A]" />
                        Образование и квалификация
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Доктор медицины (MD) - ведущий медицинский университет",
                          "Сертификация в области медицинских исследований",
                          "Международные стажировки и курсы повышения квалификации",
                          "Участие в программах обмена с мировыми медицинскими центрами"
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center p-3 bg-white/70 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Professional Focus */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaStethoscope className="mr-3 text-[#023E8A]" />
                        Профессиональный фокус
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Разработка инновационных медицинских технологий",
                          "Междисциплинарные исследования в медицине",
                          "Внедрение доказательной медицины в практику",
                          "Международное сотрудничество в здравоохранении"
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center p-3 bg-white/70 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaAward className="mr-3 text-[#023E8A]" />
                        Достижения и вклад
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Участие в международных медицинских исследованиях",
                          "Публикации в рецензируемых медицинских журналах",
                          "Выступления на международных конференциях",
                          "Разработка образовательных программ для медиков"
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center p-3 bg-white/70 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SeanPark;