import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUserGraduate, FaBook, FaAward, FaGlobeAmericas, FaGraduationCap, FaMountain, FaFlag, FaHandshake, FaTrophy } from 'react-icons/fa';
import kubatovPhoto from '../../../assets/science/professors/jeduard-kubatov-221x300.png';

const Kubatov = () => {
  const professorSections = [
    { 
      path: "/science/professors", 
      name: "DR. SEAN PARK", 
      icon: FaUserGraduate,
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
      icon: FaUserGraduate,
      active: true 
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
              Эдуард Кубатов
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Президент Федерации альпинизма и скалолазания КР, почетный консул Республики Индонезия в КР
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
                      src={kubatovPhoto} 
                      alt="Эдуард Кубатов" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Quick Info */}
                  <div className="mt-6 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-blue-50 p-4 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center">
                        <FaMountain className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Основная деятельность</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Президент Федерации альпинизма и скалолазания КР</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <div className="flex items-center">
                        <FaFlag className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Дипломатическая должность</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Почетный консул Республики Индонезия в КР</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-purple-50 p-4 rounded-xl border border-purple-200"
                    >
                      <div className="flex items-center">
                        <FaHandshake className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Международная деятельность</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Развитие спортивных и дипломатических связей</p>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Эдуард Кубатов</h2>
                    
                    {/* Description */}
                    <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                      <p className="text-lg leading-relaxed mb-6">
                        Выдающийся спортивный деятель и дипломат, президент Федерации альпинизма и скалолазания Кыргызской Республики, 
                        почетный консул Республики Индонезия в Кыргызстане. Активный promoter развития альпинизма и скалолазания в Центральной Азии.
                      </p>
                    </div>

                    {/* Sports Activities */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaMountain className="mr-3 text-[#023E8A]" />
                        Спортивная деятельность
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Федерация альпинизма и скалолазания КР",
                            description: "Руководство развитием альпинизма и скалолазания в Кыргызстане, организация соревнований и экспедиций"
                          },
                          {
                            title: "Международное сотрудничество",
                            description: "Установление партнерских отношений с альпинистскими федерациями других стран"
                          },
                          {
                            title: "Развитие спорта",
                            description: "Популяризация альпинизма и скалолазания среди молодежи, создание тренировочных программ"
                          },
                          {
                            title: "Организация мероприятий",
                            description: "Проведение национальных и международных соревнований по альпинизму и скалолазанию"
                          }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start p-4 bg-white/70 rounded-lg border border-gray-200"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                              <p className="text-gray-700 text-sm">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Diplomatic Activities */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaFlag className="mr-3 text-[#023E8A]" />
                        Дипломатическая деятельность
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Почетный консул Индонезии",
                            description: "Представительство интересов Республики Индонезия в Кыргызстане"
                          },
                          {
                            title: "Культурный обмен",
                            description: "Содействие развитию культурных и экономических связей между Кыргызстаном и Индонезией"
                          },
                          {
                            title: "Дипломатические инициативы",
                            description: "Участие в международных форумах и дипломатических мероприятиях"
                          },
                          {
                            title: "Поддержка граждан",
                            description: "Оказание консульской помощи гражданам Индонезии в Кыргызстане"
                          }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start p-4 bg-white/70 rounded-lg border border-gray-200"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                              <p className="text-gray-700 text-sm">{item.description}</p>
                            </div>
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
                        <FaTrophy className="mr-3 text-[#023E8A]" />
                        Достижения и вклад
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Развитие альпинизма как вида спорта в Кыргызстане",
                          "Укрепление международных спортивных связей",
                          "Содействие дипломатическим отношениям с Индонезией",
                          "Организация международных альпинистских экспедиций",
                          "Популяризация активного образа жизни",
                          "Поддержка молодых спортсменов и тренеров"
                        ].map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center p-3 bg-white/50 rounded-lg"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                              <FaAward className="text-white text-xs" />
                            </div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Additional Information */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaGlobeAmericas className="mr-3 text-[#023E8A]" />
                        Международное признание
                      </h4>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="leading-relaxed mb-4">
                          Эдуард Кубатов признан на международной арене как активный promoter развития альпинизма и укрепления 
                          международных отношений. Его деятельность способствует позитивному имиджу Кыргызстана в мировом сообществе.
                        </p>
                        <p className="leading-relaxed">
                          Под его руководством Федерация альпинизма и скалолазания КР стала одной из наиболее активных спортивных 
                          организаций в Центральной Азии, организующей международные соревнования и экспедиции.
                        </p>
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

export default Kubatov;