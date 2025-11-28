import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';

const Graduation2025 = () => {
  const photos = [
    '492548742_1342999840778203_269414137275815319_n.jpg',
    '503613429_18079262716843726_1405329290281041624_n.jpg',
    '503645508_18079262800843726_7284857816446639723_n.jpg',
    '503680251_18079262848843726_1394352808932091144_n.jpg',
    '504009587_18079262698843726_1850017012595209940_n.jpg',
    '505408379_1342999814111539_1078070469520223458_n.jpg',
    '506711127_1342999890778198_340452995720484011_n.jpg',
    '509628553_18079262809843726_8383290952203748705_n.jpg',
    '510430720_18079262743843726_1536102180660677668_n.jpg',
    '510452536_18079262830843726_413052517121911212_n.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientatioin/events/5/main.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiCalendar className="w-6 h-6" />
              <span className="text-xl">26.06.2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ВЫПУСКНОЙ 2025
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              День, наполненный гордостью, радостью и новыми надеждами!
            </p>
          </motion.div>
        </div>

        <Link
          to="/applicants/orientation"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Назад</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ВЫПУСКНОЙ 2025
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-lg">
                  ВЫПУСКНОЙ 2025 — день, наполненный гордостью, радостью и новыми надеждами!
                </p>
                <p>
                  Сегодня в Салымбеков Университете состоялся торжественный выпускной для студентов Международного колледжа IT и бизнеса и Высшей школы медицины.
                </p>
                <p>
                  На мероприятии присутствовали руководство университета, преподаватели, сотрудники, а также почётные гости из Hosang University (Южная Корея) — нашего международного партнёра по программе двойного диплома, во главе с ректором Mr. Kim Jae Hyun.
                </p>
                <p>
                  Их визит стал символом прочных дружеских и академических связей между нашими вузами и открывающихся для студентов глобальных возможностей.
                </p>
                <p>
                  Поздравляем выпускников с окончанием важного этапа! Желаем успешного профессионального пути, вдохновения и реализации самых амбициозных целей.
                </p>
                <p className="font-semibold">
                  Этот день навсегда останется в истории нашего университета — как праздник достижений, партнёрства и веры в светлое будущее молодёжи.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Photo Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-2/3"
          >
            <div className="space-y-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                >
                  <img
                    src={`/src/assets/applicant/orientatioin/events/fifth_scroll/${photo}`}
                    alt={`Выпускной 2025 фото ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=Выпускной+2025';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Graduation2025;
