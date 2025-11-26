import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaUsers, FaBook, FaGraduationCap, FaUserFriends } from 'react-icons/fa';

const StudentSociety = () => {
  const { t } = useTranslation();

  const members = [
    { name: 'Hamza Muhammad', group: 'GM-1-19' },
    { name: 'Mahnoor', group: 'GM-1-19' },
    { name: 'Ali Muhammad', group: 'GM-2-19' },
    { name: 'Iqbal Muhammad Ahmad', group: 'GM-2-19' },
    { name: 'Hamza Muhammad', group: 'GM-4-19' },
    { name: 'Haider Muhammad Safeer', group: 'GM-4-19' },
    { name: 'Khan Saqibullah', group: 'GM-5-19' },
    { name: 'Umer Muhammad', group: 'GM-7-19' },
    { name: 'But Sohira Naz', group: 'GM-7-19' },
    { name: 'Hussain Naveed', group: 'GM-8-19' },
    { name: 'Muhammad Ilyas', group: 'GM-9-19' },
    { name: 'Wajeeh-ul-Hassan', group: 'GM-10-19' },
    { name: 'Khan Ibragim', group: 'GM-11-19' },
    { name: 'Durraiz Md', group: 'GM-1-20' },
    { name: 'Arif Md Abdullah', group: 'GM-2-20' },
    { name: 'Shehzad Md Hussnain', group: 'GM-3-20' },
    { name: 'Waqar Alam', group: 'GM-5-20' },
    { name: 'Faisal Khan', group: 'GM-6-20' },
    { name: 'Sheraz Ali', group: 'GM-7-20' },
    { name: 'Muhammad Waqar', group: 'GM-8-20' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                Научная деятельность
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Студенческое научное общество
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Общественная организация для студентов, проявляющих интерес к научно-исследовательской работе
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Document Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#023E8A]"
            >
              ПОЛОЖЕНИЕ О СТУДЕНЧЕСКОМ НАУЧНОМ ОБЩЕСТВЕ
            </motion.h2>

            {/* Общие положения */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                <FaBook className="mr-3" />
                Общие положения
              </h3>
              
              {/* Abbreviations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
              >
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
                  <FaGraduationCap className="mr-2 text-[#023E8A]" />
                  Сокращения:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { abbr: 'СНО', full: 'Студенческое научное общество' },
                    { abbr: 'СМУ', full: 'Совет молодых ученых' },
                    { abbr: 'НИРС', full: 'Научно-исследовательская работа Студентов' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/70 p-4 rounded-xl text-center"
                    >
                      <div className="text-2xl font-bold text-[#023E8A] mb-2">{item.abbr}</div>
                      <div className="text-sm text-gray-600">{item.full}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="space-y-8">
                {[
                  {
                    number: "1.1",
                    text: "Студенческое научное общество Учреждения «Салымбеков Университет» (далее – СНО) – общественная организация, объединяющая на добровольных началах студентов Университета, проявляющих склонность к научно-организационной и исследовательской работе, активно участвующих в научно-организационной и исследовательской работе, членов студенческих научных кружков кафедр."
                  },
                  {
                    number: "1.2",
                    text: "Членом СНО имеет право быть любой студент Университета, занимающийся научно-исследовательской работой в составе научного кружка (семинара, рабочей группы и т.п.) или индивидуально участвующий в подготовке докладов, рефератов, сообщений, проведении научных исследований."
                  },
                  {
                    number: "1.3",
                    text: "Деятельность СНО курируется Советом молодых ученых (СМУ) Университета и строит свою работу во взаимодействии с Советом по НИРС Университета, заместителями деканов факультетов по науке и кафедрами и другими структурными подразделениями Университета."
                  },
                  {
                    number: "1.4",
                    text: "СНО осуществляет свою деятельность в соответствии с законодательством Кыргызской Республики, Уставом Университета, приказами ректора, проректоров, распоряжениями СМУ, настоящим Положением и принятым в соответствии с ним документами."
                  },
                  {
                    number: "1.5",
                    text: "СНО осуществляет свою деятельность на принципах самоуправления, открытого характера деятельности, добровольности, равноправия, законности духа взаимного уважения и культуры научного общения студентов."
                  },
                  {
                    number: "1.6",
                    text: "СНО в соответствии с настоящим Положением может вступать в международные общественные объединения, приобретать права и нести обязанности, соответствующие статусу этих международных общественных объединений, поддерживать международные контакты и связи, заключать соглашения с иностранными некоммерческими неправительственными образовательными и научными объединениями, зарубежными учебными заведениями и научными учреждениями."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.number}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Состав СНО */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                <FaUsers className="mr-3" />
                Состав Студенческого научного общества
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <FaUserFriends className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-[#023E8A] transition-colors">
                          {member.name}
                        </p>
                        <p className="text-sm text-[#0077B6] font-medium">{member.group}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Download Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Скачать полное положение
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Официальный документ о студенческом научном обществе
                    </p>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    <FaDownload className="mr-3" />
                    Положение о студенческом научном обществе
                  </motion.a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentSociety;