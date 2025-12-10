import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiFileText, FiCheckCircle, FiList, FiExternalLink } from 'react-icons/fi';

const Documents = () => {
  const { t } = useTranslation();

  const animatedBalls = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2
    }));
  }, []);

  const requiredDocuments = [
    'Академическая справка установленного образца',
    'Транскрипт',
    'Выписка из приказов',
    'Данные о дополнительных видах подготовки, которые он освоил',
    'Сведения об особых академических достижениях (дипломы, сертификаты, поощрения)'
  ];

  return (
    <div className="w-full relative min-h-screen bg-gray-50">
      {/* Animated gradient balls */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: ball.size,
              height: ball.size,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ball.delay
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-6 shadow-xl">
              <FiFileText size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Необходимые документы для перевода
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8"
          >
            {/* Process Description */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <FiCheckCircle size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Процедура перевода</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Перевод студента осуществляется путем рассмотрения транскрипта/оценочного листа членами аттестационной комиссии и по согласованию с деканом факультета. На основании поданных документов готовится список дисциплин по академической разнице часов.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    В случае необходимости ликвидации академической разницы для студента разрабатывается <a 
                      href="https://salymbekov.com/wp-content/uploads/2021/04/whatsapp-image-2021-04-20-at-14.30.09.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 font-bold hover:text-blue-800 transition-all duration-300 underline decoration-2 underline-offset-2 hover:underline-offset-4"
                    >
                      индивидуальный план
                      <FiExternalLink size={16} className="inline-block" />
                    </a>, который предусматривает перечень дисциплин (или их разделов), подлежащих изучению, их объемы и установленные сроки сдачи экзаменов/зачетов.
                  </p>
                  <p className="text-gray-800 font-semibold bg-amber-50 px-4 py-3 rounded-lg border-l-4 border-amber-400">
                    ⚠️ Академическая разница должна быть ликвидирована в пределах данного академического года.
                  </p>
                </div>
              </div>
            </div>

            {/* Documents for Transfer to Another University */}
            <div className="mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <FiList size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Документы для перевода в другой вуз
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    В случае, если студент пожелает перевестись в другой вуз, он получает всю необходимую документацию, которая позволит ему получить признание периода обучения в университете, а именно:
                  </p>

                  <div className="space-y-4">
                    {requiredDocuments.map((doc, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium leading-relaxed">
                            {doc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle size={28} />
                Важная информация
              </h3>
              <p className="leading-relaxed opacity-95">
                Все документы выдаются в соответствии с установленными образцами и стандартами. 
                Для получения дополнительной информации обратитесь в деканат вашего факультета 
                или в учебный отдел университета.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Documents;

