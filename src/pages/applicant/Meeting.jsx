import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiGlobe, FiUsers } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';

const Meeting = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://salymbekov.com/ru/sostojalis-vstrechi-predstavitelej-salymbekov-universiteta-so-studentami-iz-respubliki-pakistana/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/intent/post?text=%D0%A1%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BB%D0%B8%D1%81%D1%8C%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B8%20%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0%20%D1%81%D0%BE%20%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8%20%D0%B8%D0%B7%20%D0%9F%D0%B0%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B0%C2%A0https%3A%2F%2Fsalymbekov.com%2Fru%2Fsostojalis-vstrechi-predstavitelej-salymbekov-universiteta-so-studentami-iz-respubliki-pakistana%2F',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://api.whatsapp.com/send/?text=https%3A%2F%2Fsalymbekov.com%2Fru%2Fsostojalis-vstrechi-predstavitelej-salymbekov-universiteta-so-studentami-iz-respubliki-pakistana%2F&type=custom_url&app_absent=0',
      color: 'hover:bg-green-500'
    },
    {
      name: 'VK',
      icon: FaVk,
      url: 'https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%3A%2F%2Fsalymbekov.com%2Fru%2Fsostojalis-vstrechi-predstavitelej-salymbekov-universiteta-so-studentami-iz-respubliki-pakistana%2F%26title%3D%25D0%25A1%25D0%25BE%25D1%2581%25D1%2582%25D0%25BE%25D1%258F%25D0%25BB%25D0%25B8%25D1%2581%25D1%258C%2520%25D0%25B2%25D1%2581%25D1%2582%25D1%2580%25D0%25B5%25D1%2587%25D0%25B8%2520%25D0%25BF%25D1%2580%25D0%25B5%25D0%25B4%25D1%2581%25D1%2582%25D0%25B0%25D0%25B2%25D0%25B8%25D1%2582%25D0%25B5%25D0%25BB%25D0%25B5%25D0%25B9%2520%25D0%25A3%25D0%25BD%25D0%25B8%25D0%25B2%25D0%25B5%25D1%2580%25D1%2581%25D0%25B8%25D1%2582%25D0%25B5%25D1%2582%25D0%25B0%2520%25D1%2581%25D0%25BE%2520%25D1%2581%25D1%2582%25D1%2583%25D0%25B4%25D0%25B5%25D0%25BD%25D1%2582%25D0%25B0%25D0%25BC%25D0%25B8%2520%25D0%25B8%25D0%25B7%2520%25D0%259F%25D0%25B0%25D0%25BA%25D0%25B8%25D1%2581%25D1%2582%25D0%25B0%25D0%25BD%25D0%25B0&display=widget',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://telegram.me/share/url?url=https://salymbekov.com/ru/sostojalis-vstrechi-predstavitelej-salymbekov-universiteta-so-studentami-iz-respubliki-pakistana/&title=%D0%A1%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BB%D0%B8%D1%81%D1%8C%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B8%20%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0%20%D1%81%D0%BE%20%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8%20%D0%B8%D0%B7%20%D0%9F%D0%B0%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B0',
      color: 'hover:bg-blue-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/src/assets/applicant/orientatioin/4.jpg"
            alt="Встречи с студентами из Пакистана"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/0077B6/FFFFFF?text=Встречи+с+студентами';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A]/90 to-[#0077B6]/90" />
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white text-sm font-semibold mb-6 shadow-lg">
            Новости
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Состоялись встречи представителей Университета со студентами из Пакистана
          </h1>
          <div className="flex items-center justify-center gap-8 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-6 h-6" />
              <span>Октябрь 2019</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe className="w-6 h-6" />
              <span>Международное сотрудничество</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            {/* Social Share Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block sticky top-24 h-fit"
            >
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 bg-white rounded-full shadow-lg ${social.color} text-gray-600 hover:text-white transition-all duration-300 hover:scale-110`}
                    title={`Поделиться в ${social.name}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12"
              >
                <Link
                  to="/applicants/career-guidance"
                  className="inline-flex items-center gap-2 text-[#0077B6] hover:text-[#023E8A] transition-colors font-semibold text-lg"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  Вернуться к мероприятиям
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-10 mb-12"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                  Состоялись встречи представителей Салымбеков Университета со студентами из Республики Пакистана
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    В октябре 2019 года были успешно проведены встречи представителей Салымбеков Университет – <strong className="text-[#0077B6]">вице-президента Университета Эсенгелди Жумадилова</strong> и <strong className="text-[#0077B6]">руководителя Департамента развития Аваза Казакова</strong> с представителями медицинских ВУЗов Республики Пакистан и будущими абитуриентами Университета.
                  </p>
                  <p>
                    Представители Университета провели <strong className="text-[#0077B6]">презентацию Университета</strong> и консультировали по вопросам поступления и учебной программы.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meeting;
