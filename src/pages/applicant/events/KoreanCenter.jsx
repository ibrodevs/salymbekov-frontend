import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';

const KoreanCenter = () => {
  const photos = [
    '544888915_18086649625843726_32511543409878500_n.jpg',
    '545392404_18086649550843726_5901533624627670400_n.jpg',
    '545493178_18086649652843726_7516573263629390164_n.jpg',
    '546680157_18086649514843726_334244845567251500_n.jpg',
    '547366708_18086649559843726_5400211479789001590_n.jpg',
    '547830379_18086649541843726_3566710244749953390_n.jpg',
    '547885661_18086649634843726_4072510537898689878_n.jpg',
    '547915427_18086649643843726_7640945777793873940_n.jpg',
    '547930577_18086649661843726_4111661904540839719_n.jpg',
    '547941123_18086649595843726_3124539098579620435_n.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientatioin/events/3/main.jpg)',
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
              <span className="text-xl">13.10.2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Визит Культурного центра Бэксан
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Республика Корея
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
                Baeksan Cultural Center Visit
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  On September 12, Salymbekov University was honored to host the Baeksan Cultural Center (Republic of Korea).
                </p>
                <p>
                  A vibrant cultural program was presented for our students and faculty:
                </p>
                <ul className="space-y-2">
                  <li>🎭 traditional Korean mask dance</li>
                  <li>💃 modern Korean dance</li>
                  <li>🎤 vocal performances</li>
                  <li>🎻 electronic violin performance</li>
                </ul>
                <p className="font-semibold">
                  A highlight of the event was the hands-on workshop on making a jewelry box from Korean paper Hanji (한지), giving participants a chance to experience the rich traditions and artistry of Korea. ✨✨
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
                    src={`/src/assets/applicant/orientatioin/events/third_scroll/${photo}`}
                    alt={`Baeksan Cultural Center photo ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=Korean+Cultural+Center';
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

export default KoreanCenter;
