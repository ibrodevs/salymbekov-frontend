import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiShield } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const ITSecurityMeeting = () => {
  const { t } = useTranslation();

  const photos = [
    '568323281_18091550332843726_3095975498296300573_n.jpg',
    '568407244_18091550419843726_3086538646049460228_n.jpg',
    '569221957_18091550365843726_1441582167954990680_n.jpg',
    '569903969_18091550395843726_7210365209369056174_n.jpg',
    '569920145_18091550437843726_743653912145598852_n.jpg',
    '570015748_18091550347843726_2607209222816382448_n.jpg',
    '570694592_18091550518843726_1945586846049183105_n.jpg',
    '571109617_18091550407843726_7680303607993900235_n.jpg'
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
            backgroundImage: `url('/src/assets/applicant/orientatioin/news/2.jpg')`,
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
                  <span className="font-semibold">
                    {t('itSecurityMeeting.hero.date', '25 октября 2025')}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FiMapPin className="w-5 h-5" />
                  <span className="font-semibold">
                    {t('itSecurityMeeting.hero.location', 'Международный колледж IT и бизнеса')}
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {t('itSecurityMeeting.hero.title', 'Встреча с сотрудниками УУР ГУВД г. Бишкек')}
              </h1>
              <p className="text-2xl text-blue-100 font-medium">
                {t('itSecurityMeeting.hero.subtitle', 'Информационная безопасность и борьба с интернет-мошенничеством')}
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
                    {t('itSecurityMeeting.about.title', 'О мероприятии')}
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiShield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {t('itSecurityMeeting.about.organizer.title', 'Организатор')}
                        </h3>
                        <p className="text-gray-600">
                          {t('itSecurityMeeting.about.organizer.name', 'УУР ГУВД г. Бишкек')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {t('itSecurityMeeting.about.venue.title', 'Место проведения')}
                        </h3>
                        <p className="text-gray-600">
                          {t('itSecurityMeeting.about.venue.name', 'Международный колледж IT и бизнеса')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('itSecurityMeeting.description.title', 'Описание')}
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      {t('itSecurityMeeting.description.paragraph1', 'Сегодня сотрудники Отдела по информационно-техническому обеспечению и борьбе с преступностью в сфере IT-технологий УУР ГУВД г. Бишкек провели встречу со студентами колледжа.')}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-800 font-semibold">
                        {t('itSecurityMeeting.description.highlight1', 'В Международном колледже IT и бизнеса Салымбеков Университета прошла встреча на тему интернет-мошенничества')}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900">
                      {t('itSecurityMeeting.description.topicsTitle', 'Темы, рассмотренные на встрече:')}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>{t('itSecurityMeeting.description.topic1', 'Наиболее распространённые виды интернет-мошенничества')}</li>
                      <li>{t('itSecurityMeeting.description.topic2', 'Киберугрозы и преступления в сфере IT')}</li>
                      <li>{t('itSecurityMeeting.description.topic3', 'Видеоматериалы и реальные примеры')}</li>
                      <li>{t('itSecurityMeeting.description.topic4', 'Информационная безопасность')}</li>
                      <li>{t('itSecurityMeeting.description.topic5', 'Защита персональных данных')}</li>
                      <li>{t('itSecurityMeeting.description.topic6', 'Ответственность за распространение фейковой информации')}</li>
                      <li>{t('itSecurityMeeting.description.topic7', 'Правовая грамотность в интернете')}</li>
                    </ul>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-purple-500 mt-6">
                      <p className="text-gray-800">
                        {t('itSecurityMeeting.description.highlight2', 'Подобные встречи помогают студентам повысить уровень цифровой культуры и осознать риски, связанные с интернет-мошенничеством и киберпреступностью.')}
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
                {t('itSecurityMeeting.gallery.title', 'Фотогалерея')}
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
                      src={`/src/assets/applicant/orientatioin/news/second_scroll/${photo}`}
                      alt={t('itSecurityMeeting.gallery.photoAlt', 'Встреча с УУР ГУВД') + ` ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/1200x800/0077B6/FFFFFF?text=IT+Security+Meeting';
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

export default ITSecurityMeeting;