import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiGlobe } from 'react-icons/fi';

const PaiChaiVisit = () => {
  const photos = [
    '568652878_18091498048843726_9076041554619489985_n.jpg',
    '568733386_18091498084843726_3987061983470437992_n.jpg',
    '569098254_18091498039843726_9045304502920873998_n.jpg',
    '569536443_18091498009843726_7540908119918244241_n.jpg',
    '569887620_18091498018843726_7558086145600800356_n.jpg',
    '570335778_18091498027843726_1305525082499958477_n.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/src/assets/applicant/orientatioin/news/3.jpg')`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-8 pb-16 text-white">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FiCalendar className="w-5 h-5" />
                  <span className="font-semibold">23 октября 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FiGlobe className="w-5 h-5" />
                  <span className="font-semibold">🇰🇷 Южная Корея</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Визит партнёров из Pai Chai University
              </h1>
              <p className="text-2xl text-blue-100 font-medium">
                Укрепление международного сотрудничества и академической мобильности
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Sidebar - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1 lg:sticky lg:top-8 lg:self-start"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                {/* Key Info */}
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-6">
                    О визите
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiGlobe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Университет-партнёр</h3>
                        <p className="text-gray-600">Pai Chai University 🇰🇷</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Студенты на обучении</h3>
                        <p className="text-gray-600">2 студента по программе академической мобильности</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Описание</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-800 font-semibold">
                        Встреча с партнерами из Южной Кореи! 🇰🇷
                      </p>
                    </div>

                    <p>
                      С радостью сообщаем, что сегодня мы имели удовольствие принять наших партнёров из университета Пай Чай (Pai Chai University). Этот визит стал познавательным опытом, который не только укрепил наше сотрудничество, но и открыл новые возможности для будущих проектов.
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-purple-500">
                      <p className="text-gray-800">
                        <strong>Академическая мобильность:</strong> На данный момент два наших студента обучаются в университете Пай Чай по программе академической мобильности. Их опыт за границей способствует как профессиональному, так и личностному развитию.
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900">
                      Результаты встречи:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Укрепление международного сотрудничества</li>
                      <li>Обсуждение новых возможностей для студентов</li>
                      <li>Планирование будущих проектов</li>
                      <li>Развитие программы академической мобильности</li>
                      <li>Обмен опытом в сфере образования</li>
                    </ul>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500 mt-6">
                      <p className="text-gray-800">
                        🎓 Мы с нетерпением ждём продолжения партнёрства и новых возможностей для студентов получить международный опыт!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Photo Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                Фотогалерея
              </h2>
              
              <div className="space-y-6">
                {photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={`/src/assets/applicant/orientatioin/news/third_scroll/${photo}`}
                      alt={`Визит Pai Chai University ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=Pai+Chai+University+Visit';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaiChaiVisit;
