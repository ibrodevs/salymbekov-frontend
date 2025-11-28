import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';

const EurasianCongress = () => {
  const photos = [
    '569463330_18091761859843726_8716094070503701710_n.jpg',
    '569862386_18091761841843726_5569057568147858840_n.jpg',
    '569967536_18091761832843726_2239720985157542705_n.jpg',
    '569971388_18091761886843726_3571262855514030918_n.jpg',
    '569988875_18091761850843726_4017047102020692955_n.jpg',
    '570374473_18091761823843726_1634521066787254073_n.jpg',
    '572996107_18091761820843726_4716391472489445203_n.jpg'
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
            backgroundImage: `url('/src/assets/applicant/orientatioin/news/1.jpg')`,
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
                  <span className="font-semibold">17-19 октября 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FiMapPin className="w-5 h-5" />
                  <span className="font-semibold">Бухара, Узбекистан</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                XII Евразийский конгресс детских врачей
              </h1>
              <p className="text-2xl text-blue-100 font-medium">
                «Ребёнок и общество: проблемы здоровья, развития и питания»
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
                    О конгрессе
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiUsers className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Участники</h3>
                        <p className="text-gray-600">Более 280 специалистов из 12 стран</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Страны-участницы</h3>
                        <p className="text-gray-600">США, Китай, Россия, Казахстан, Кыргызстан и др.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Описание</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      С 17 по 19 октября 2025 года в древнем городе Бухара (Узбекистан) состоялся XII Евразийский конгресс детских врачей под названием «Ребёнок и общество: проблемы здоровья, развития и питания».
                    </p>
                    
                    <p className="font-semibold text-gray-900">
                      Организаторы:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Министерство здравоохранения Республики Узбекистан</li>
                      <li>Бухарский государственный медицинский институт имени Абу Али ибн Сино</li>
                      <li>Евразийская федерация детских врачей</li>
                    </ul>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-800">
                        👨‍⚕️ <strong>От имени Кыргызстана и Салымбеков Университета</strong> активное участие в работе конгресса принял профессор К.А. Узакбаев, президент Евразийской федерации детских врачей.
                      </p>
                    </div>

                    <p>
                      Он представил доклад о диагностике, лечении и реабилитации детей с расстройствами аутистического спектра (РАС), отметив важность международного сотрудничества и обмена опытом.
                    </p>

                    <p>
                      🎯 Конгресс стал значимой площадкой для продвижения научных достижений, укрепления международных связей и поддержки молодых специалистов в сфере педиатрии.
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-purple-500 mt-6">
                      <p className="text-gray-800 font-semibold">
                        📅 Следующий, XIII Евразийский конгресс детских врачей, состоится 17–19 мая 2026 года в городе Сиань (Китай).
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
                      src={`/src/assets/applicant/orientatioin/news/first_scroll/${photo}`}
                      alt={`Конгресс детских врачей ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=XII+Eurasian+Congress';
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

export default EurasianCongress;
