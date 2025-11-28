import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';

const DiplomaAward = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientatioin/events/6/main.jpg)',
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
              <span className="text-xl">19.06.2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Вручение дипломов
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Студенты 4 курса
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
                ДЕНЬ, КОТОРЫЙ МЫ ЖДАЛИ!
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Сегодня мы провели вручение дипломов нашим дорогим студентам 4 курса — первым выпускникам, которые прошли обучение в Малайзии и получают двойной диплом:
                </p>
                <p className="font-semibold">
                  🎓 Кыргызстан, Салымбеков Университет + Малайзия, Lincoln University College.
                </p>
                <p>
                  Торжество началось с эмоционального сюрприза — фильма от студенческого парламента о жизни и учёбе за границей. Были приятные воспоминания об учебе и студенческой жизни в Куала-Лумпуре, смех и ностальгия.
                </p>
                <p>
                  Особое вдохновение всем присутствующим подарило мощное мотивационное поздравление от ректора университета, Эсенгелди Жумадиловича. Его слова о силе образования, смелости мечтать и ответственности выпускников за будущее прозвучали как напутствие к новым вершинам.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg">
                  <p className="font-bold text-red-800 mb-2">Поздравляем наших отличников:</p>
                  <ul className="space-y-1 text-red-700">
                    <li>🏆 Замирбеков Мирлан</li>
                    <li>🏆 Муканбетова Кундуз</li>
                    <li>🏆 Маматкеримова Айдай</li>
                  </ul>
                  <p className="text-sm font-semibold text-red-600 mt-2">(Красные дипломы — вы лучшие!)</p>
                </div>
                <p className="font-semibold text-lg">
                  А также всех наших выпускников — мы вами гордимся!
                </p>
                <p className="font-bold text-blue-600">
                  Вы написали историю — и это только начало. 🎉
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: num * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                >
                  <img
                    src={`/applicant/orientation/events/six_scroll/${num}.jpg`}
                    alt={`Вручение дипломов фото ${num}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=Вручение+дипломов';
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

export default DiplomaAward;
