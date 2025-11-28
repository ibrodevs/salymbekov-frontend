import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';

const TeachersDay = () => {
  const photos = [
    '560196518_18089232502843726_1870381636086821075_n.jpg',
    '560553062_18089232550843726_1085349650060356682_n.jpg',
    '560557356_18089232457843726_8591423646871165171_n.jpg',
    '561292681_18089232523843726_2495227642158945810_n.jpg',
    '561307646_18089232541843726_2317518854994709444_n.jpg',
    '561517731_18089232514843726_395685189131520176_n.jpg',
    '561822098_18089232466843726_4633116176807574802_n.jpg',
    '562021609_18089232559843726_7800609835248298669_n.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientatioin/events/1/main.jpg)',
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
              <span className="text-xl">15.10.2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              День учителя в Международном колледже IT и бизнеса
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Салымбеков Университет
            </p>
          </motion.div>
        </div>

        {/* Back Button */}
        <Link
          to="/applicants/orientation"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Назад</span>
        </Link>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Left Side - Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                📚✨ День учителя
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-lg">
                  День учителя в Международном колледже IT и бизнеса Салымбеков Университета!
                </p>
                <p>
                  Студенты нашего колледжа с благодарностью и теплом отметили День учителя! 🌸
                </p>
                <p>
                  🎉 В этот праздничный день звучали слова признательности в адрес преподавателей, которые каждый день делятся своими знаниями и вдохновляют студентов на успех.
                </p>
                <p>
                  Студенты подготовили музыкальные номера, поздравления и приятные сюрпризы, создав атмосферу радости и уважения.
                </p>
                <p className="font-semibold">
                  👏 Мы гордимся нашими преподавателями — людьми, которые не просто учат, а вдохновляют и помогают каждому студенту раскрыть свой потенциал!
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
                    src={`/src/assets/applicant/orientatioin/events/first_scroll/${photo}`}
                    alt={`День учителя фото ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=День+учителя';
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

export default TeachersDay;
