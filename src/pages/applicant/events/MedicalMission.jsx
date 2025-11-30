import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const MedicalMission = () => {
  const { t } = useTranslation();

  const photos = [
    '510859500_18079375405843726_8866767482677414866_n.jpg',
    '510918081_18079375528843726_5332527353816471044_n.jpg',
    '510935496_18079375444843726_4657414234723295562_n.jpg',
    '510940659_18079375555843726_5826688560758098698_n.jpg',
    '510952929_18079375414843726_5380721049544207726_n.jpg',
    '510952931_18079375492843726_6801512540818986966_n.jpg',
    '510956711_18079375453843726_3749929143374931459_n.jpg',
    '511248726_18079375429843726_6843009540581387299_n.jpg',
    '511369905_18079375366843726_5922224592876759000_n.jpg',
    '511441559_18079375510843726_8992520168441010363_n.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientatioin/events/4/main.jpg)',
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
              <span className="text-xl">27.06.2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('medicalMission.hero.title', 'Международная медицинская миссия')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t('medicalMission.hero.subtitle', 'Asan Medical Center & DOC University Hospital')}
            </p>
          </motion.div>
        </div>

        <Link
          to="/applicants/orientation"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>{t('medicalMission.hero.backButton', 'Назад')}</span>
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
                {t('medicalMission.description.title', 'Международная медицинская миссия')}
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('medicalMission.description.paragraph1', 'С 15 по 18 июня 2025 года на базе DOC University Hospital Салымбеков Университета прошла международная медицинская миссия в сотрудничестве с Asan Medical Center (г. Сеул, Республика Корея) — одной из ведущих клиник мира.')}
                </p>
                <p>
                  {t('medicalMission.description.paragraph2', 'В рамках гуманитарной инициативы была оказана безвозмездная медицинская помощь жителям Кыргызстана. Команда южнокорейских врачей провела:')}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t('medicalMission.description.listItem1', '937 бесплатных консультаций и диагностических обследований')}</li>
                  <li>{t('medicalMission.description.listItem2', '49 операций, включая 40 по катаракте, 5 по птеригиуму, 4 при птозе век')}</li>
                  <li>{t('medicalMission.description.listItem3', 'бесплатную выдачу лекарств по показаниям')}</li>
                </ul>
                <p>
                  {t('medicalMission.description.paragraph3', 'Приём вели специалисты по педиатрии, кардиологии, офтальмологии, гастроэнтерологии, семейной медицине и другим направлениям. Основное внимание уделялось социально уязвимым категориям граждан.')}
                </p>
                <p className="font-semibold">
                  {t('medicalMission.description.paragraph4', 'Миссия стала важным вкладом Салымбеков Университета в развитие здравоохранения и международного гуманитарного сотрудничества.')}
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
                    src={`/src/assets/applicant/orientatioin/events/fourth_scroll/${photo}`}
                    alt={t('medicalMission.photoAlt', 'Медицинская миссия фото') + ` ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=' + t('medicalMission.photoAlt', 'Медицинская+миссия');
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

export default MedicalMission;