import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import ExtraNavigation from './extrapages/ExtraNavigation';

const Commission = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: FiMapPin,
      title: t('commission.contacts.address'),
      items: [
        t('commission.addresses.street1'),
        t('commission.addresses.street2'),
        t('commission.addresses.ait'),
        t('commission.addresses.medical')
      ],
      color: 'from-[#023E8A] to-[#0077B6]'
    },
    {
      icon: FiPhone,
      title: t('commission.contacts.phones'),
      items: [
        t('commission.phones.it1'),
        t('commission.phones.it2'),
        t('commission.phones.ait'),
        t('commission.phones.medical')
      ],
      color: 'from-[#023E8A] to-[#48CAE4]'
    },
    {
      icon: FiMail,
      title: t('commission.contacts.email'),
      items: [t('commission.email')],
      color: 'from-[#0077B6] to-[#00B4D8]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {t('commission.title')}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {t('commission.welcome')}
          </motion.p>
        </div>
      </div>

      {/* Main Content with Navigation */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${contact.color} mb-6`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {contact.title}
                  </h3>
                  <div className="space-y-2">
                    {contact.items.map((item, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Welcome Message Section */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-12 mb-16"
              variants={itemVariants}
            >
              <div className="max-w-5xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                >
                  {t('commission.dearApplicants')}
                </motion.h2>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {t('commission.paragraph1')}
                  </motion.p>

                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {t('commission.paragraph2')}
                  </motion.p>

                  {/* Decorative divider */}
                  <motion.div
                    className="flex items-center justify-center my-8"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="h-1 w-32 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full"></div>
                  </motion.div>

                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {t('commission.paragraph3')}
                  </motion.p>

                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {t('commission.paragraph4')}
                  </motion.p>

                  {/* Decorative divider */}
                  <motion.div
                    className="flex items-center justify-center my-8"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="h-1 w-32 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] rounded-full"></div>
                  </motion.div>

                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {t('commission.paragraph5')}
                  </motion.p>

                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {t('commission.paragraph6')}
                  </motion.p>

                  {/* Decorative divider */}
                  <motion.div
                    className="flex items-center justify-center my-8"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="h-1 w-32 bg-gradient-to-r from-[#023E8A] to-[#48CAE4] rounded-full"></div>
                  </motion.div>

                  <motion.p
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {t('commission.paragraph7')}
                  </motion.p>

                  <motion.div
                    className="text-center mt-12 pt-8 border-t border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                      {t('commission.finalWelcome')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Commission;