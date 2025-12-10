import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiAward, FiStar, FiBook, FiUsers, FiFlag } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const DiplomaAward = () => {
  const { t } = useTranslation();

  const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
    'photo7.jpg',
    'photo8.jpg',
    'photo9.jpg',
    'photo10.jpg',
    'photo11.jpg',
    'photo12.jpg',
    'photo13.jpg',
    'photo14.jpg',
  ];

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
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiCalendar className="w-6 h-6" />
              <span className="text-xl">{t('diplomaAward.date', '19.06.2025')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('diplomaAward.title', 'Вручение дипломов')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t('diplomaAward.subtitle', 'Студенты 4 курса')}
            </p>
          </motion.div>
        </div>

        <Link
          to="/applicants/orientation"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>{t('diplomaAward.backButton', 'Назад')}</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t('diplomaAward.infoTitle', 'ДЕНЬ, КОТОРЫЙ МЫ ЖДАЛИ!')}
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('diplomaAward.infoText1', 'Сегодня мы провели вручение дипломов нашим дорогим студентам 4 курса — первым выпускникам, которые прошли обучение в Малайзии и получают двойной диплом:')}
                </p>
                <div className="flex items-center gap-2 font-semibold bg-blue-50 p-3 rounded-lg">
                  <FiAward className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{t('diplomaAward.infoText2', 'Кыргызстан, Салымбеков Университет + Малайзия, Lincoln University College.')}</span>
                </div>
                <p>
                  {t('diplomaAward.infoText3', 'Торжество началось с эмоционального сюрприза — фильма от студенческого парламента о жизни и учёбе за границей. Были приятные воспоминания об учебе и студенческой жизни в Куала-Лумпуре, смех и ностальгия.')}
                </p>
                <p>
                  {t('diplomaAward.infoText4', 'Особое вдохновение всем присутствующим подарило мощное мотивационное поздравление от ректора университета, Эсенгелди Жумадиловича. Его слова о силе образования, смелости мечтать и ответственности выпускников за будущее прозвучали как напутствие к новым вершинам.')}
                </p>
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FiStar className="w-5 h-5 text-red-600" />
                    <p className="font-bold text-red-800">
                      {t('diplomaAward.congratulationsTitle', 'Поздравляем наших отличников:')}
                    </p>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-red-500" />
                      {t('diplomaAward.excellentStudents.student1', 'Замирбеков Мирлан')}
                    </li>
                    <li className="flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-red-500" />
                      {t('diplomaAward.excellentStudents.student2', 'Муканбетова Кундуз')}
                    </li>
                    <li className="flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-red-500" />
                      {t('diplomaAward.excellentStudents.student3', 'Маматкеримова Айдай')}
                    </li>
                  </ul>
                  <p className="text-sm font-semibold text-red-600 mt-2">
                    {t('diplomaAward.excellentNote', '(Красные дипломы — вы лучшие!)')}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-semibold text-lg">
                  <FiUsers className="w-5 h-5 text-green-600" />
                  <span>{t('diplomaAward.infoText5', 'А также всех наших выпускников — мы вами гордимся!')}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-blue-600">
                  <FiBook className="w-5 h-5" />
                  <span>{t('diplomaAward.infoText6', 'Вы написали историю — и это только начало.')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Photo Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="space-y-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                >
                  <img
                    src={`/src/assets/applicant/orientatioin/events/six_scroll/${photo}`}
                    alt={`${t('diplomaAward.title', 'Вручение дипломов')} фото ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=${encodeURIComponent(t('diplomaAward.title', 'Вручение дипломов'))}`;
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