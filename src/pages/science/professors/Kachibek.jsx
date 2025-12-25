import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUserGraduate, FaBook, FaAward, FaGlobeAmericas, FaGraduationCap, FaUserMd, FaFlask, FaHandsHelping } from 'react-icons/fa';

// Ожидаемое изображение: добавьте файл kachibek.png в assets/science/professors/
// Fallback фото (форум в Сиане)
const remotePhoto = 'https://salymbekov.com/wp-content/uploads/2025/10/560461145_18089210416843726_5595910347630151498_n-300x300.jpg';
const galleryImages = [
  'https://salymbekov.com/wp-content/uploads/2025/10/560461145_18089210416843726_5595910347630151498_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/561760744_18089210434843726_5887615645209446797_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/560622935_18089210398843726_3987520263590391449_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/561739635_18089210425843726_134303716018119628_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/560919168_18089210407843726_91126948990447242_n-300x300.jpg'
];

const Kachibek = () => {
  const professorSections = [
    { 
      path: "/science/professors/sean-park", 
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
      icon: FaUserGraduate,
      active: true 
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
              Д.м.н., профессор Узакбаев Камчибек Аскарбекович
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Ученый, исследователь, участник международного Евразийского форума
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
                      src={remotePhoto}
                      alt="Д.м.н., профессор Узакбаев Камчибек Аскарбекович"
                      className="w-full h-auto object-cover"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = remotePhoto; }}
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
                      <p className="text-gray-700 text-sm mt-2">Доктор медицинских наук, профессор</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <div className="flex items-center">
                        <FaFlask className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Специализация</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Медицина, научные исследования</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-purple-50 p-4 rounded-xl border border-purple-200"
                    >
                      <div className="flex items-center">
                        <FaGlobeAmericas className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">Международная деятельность</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">Участник Евразийского форума в Сиане</p>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Д.м.н., профессор Узакбаев Камчибек Аскарбекович</h2>
                    
                    {/* Biography Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaUserGraduate className="mr-3 text-[#023E8A]" />
                        Биография
                      </h4>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="leading-relaxed mb-4">
                          Выдающийся ученый-медик, доктор медицинских наук, профессор с многолетним опытом научной и преподавательской деятельности. 
                          Специализируется в области медицинских исследований с акцентом на международное сотрудничество и инновационные подходы в здравоохранении.
                        </p>
                        <p className="leading-relaxed">
                          Активный участник международных научных форумов и конференций, автор многочисленных научных работ, 
                          посвященных актуальным вопросам современной медицины и здравоохранения.
                        </p>
                      </div>
                    </motion.div>

                    {/* Forum Participation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaGlobeAmericas className="mr-3 text-[#023E8A]" />
                        Участие в Международном Евразийском форуме (Сиань, КНР)
                      </h4>
                      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                          Салымбеков Университет — на международной научной арене! Д.м.н., профессор Узакбаев Камчибек Аскарбекович принял участие в Международном Евразийском форуме,
                          состоявшемся в городе Сиань (КНР) в рамках инициативы «Один пояс — один путь».
                        </p>
                        <p className="leading-relaxed">
                          В рамках форума прошла конференция по традиционной китайской медицине (ТКМ), посвящённая современным вызовам и достижениям данной области. На секции по медицине профессор
                          представил доклад о развитии ТКМ в Кыргызстане и её распространении в странах Центральной Азии.
                        </p>
                        <p className="leading-relaxed">
                          В ходе визита были подписаны соглашения с Комитетом по делам здравоохранения города Сиань об обмене научными исследованиями и подготовке кадров. Делегация также посетила фармацевтические
                          предприятия и больницы ТКМ, где продемонстрировали высокую эффективность методов традиционной китайской медицины при лечении заболеваний головного мозга.
                        </p>
                        <p className="leading-relaxed font-semibold">
                          Это сотрудничество открывает новые горизонты для развития медицины и укрепления научных связей между Кыргызстаном и Китаем.
                        </p>
                      </div>
                    </motion.div>

                    {/* Key Topics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-8"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <FaAward className="mr-3 text-[#023E8A]" />
                        Ключевые темы участия в форуме
                      </h4>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                          {
                            title: 'Доклад о развитии ТКМ',
                            text: 'Представлено состояние и перспективы традиционной китайской медицины в Кыргызстане и Центральной Азии.',
                            icon: FaBook
                          },
                          {
                            title: 'Международное сотрудничество',
                            text: 'Подписаны соглашения по обмену исследованиями и подготовке медицинских кадров с городом Сиань.',
                            icon: FaHandsHelping
                          },
                          {
                            title: 'Клиники и предприятия ТКМ',
                            text: 'Посещение фармацевтических производств и больниц традиционной медицины с демонстрацией технологий.',
                            icon: FaUserMd
                          },
                          {
                            title: 'Эффективность методов',
                            text: 'Отмечена результативность ТКМ в лечении заболеваний головного мозга и неврологических состояний.',
                            icon: FaFlask
                          },
                          {
                            title: 'Расширение горизонтов',
                            text: 'Укрепление научных связей Кыргызстана и Китая открывает новые образовательные и клинические возможности.',
                            icon: FaGlobeAmericas
                          },
                          {
                            title: 'Следующие шаги',
                            text: 'Планируется развитие совместных программ, углубление академической мобильности и обмен экспертизой.',
                            icon: FaGraduationCap
                          }
                        ].map((card, idx) => {
                          const CardIcon = card.icon;
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:border-[#0077B6]/30"
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mb-4">
                                <CardIcon className="text-white text-lg" />
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h5>
                              <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Photo Gallery */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mb-8"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <FaAward className="mr-3 text-[#023E8A]" />
                        Фото с Международного Евразийского форума
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {galleryImages.map((src, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                          >
                            <img
                              src={src}
                              alt={`Форум Сиань фото ${i + 1}`}
                              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaBook className="mr-3 text-[#023E8A]" />
                        Основные акценты визита
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <ul className="space-y-3">
                          {[
                            "Доклад о развитии традиционной китайской медицины в Кыргызстане и Центральной Азии",
                            "Подписание соглашений об обмене исследованиями и подготовке кадров",
                            "Посещение фармацевтических предприятий и клиник ТКМ"
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        <ul className="space-y-3">
                          {[
                            "Демонстрация методов ТКМ при лечении заболеваний головного мозга",
                            "Расширение международного научно-образовательного сотрудничества",
                            "Укрепление партнерских отношений между Кыргызстаном и Китаем"
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
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

export default Kachibek;