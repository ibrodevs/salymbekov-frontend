import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';

const StateLanguageDay = () => {
  const photos = [
    '552941194_18087963724843726_3445844391489564981_n.jpg',
    '553246293_18087963751843726_2474283310125677929_n.jpg',
    '553659696_18087963814843726_6884903501001334417_n.jpg',
    '553675172_18087963742843726_7966268705464019644_n.jpg',
    '553904336_18087963826843726_4548831644923137191_n.jpg',
    '554100943_18087963796843726_1016361248918306675_n.jpg',
    '554294316_18087963805843726_6857720208475535531_n.jpg',
    '554672280_18087963766843726_1985668989154912074_n.jpg',
    '554693222_18087963787843726_8174074039821621971_n.jpg',
    '554861921_18087963778843726_475846944520812348_n.jpg',
    '555452466_18087963769843726_5163760921373359343_n.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientatioin/events/2/main.jpg)',
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
              День государственного языка
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Салымбеков Университет
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
          {/* Left Side - Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                📚✨ День государственного языка – гордость нации!
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  В Салымбеков Университете состоялось праздничное мероприятие, посвящённое Дню государственного языка. 🎉
                </p>
                <p>
                  Студенты выразительно прочитали произведения, прославляющие величие и духовную ценность языка, а также исполнили национальные песни и танцы, отражающие богатое наследие народа. 💃🎶
                </p>
                <p>
                  Кроме того, молодёжь поделилась мыслями о роли языка в обществе, подчеркнув его значение как основы единства и хранителя культуры.
                </p>
                <p className="font-semibold">
                  Через это мероприятие студенты ещё раз показали своё уважение к государственному языку и отметили, что развитие и популяризация кыргызского языка — это общий долг каждого из нас. 🇰🇬
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
                    src={`/src/assets/applicant/orientatioin/events/second_scroll/${photo}`}
                    alt={`День государственного языка фото ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=День+государственного+языка';
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

export default StateLanguageDay;
