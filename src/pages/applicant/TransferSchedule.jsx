import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TransferSchedule = () => {
   const { t } = useTranslation();

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-12"
            >
               <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  График перевода студентов
               </h1>
               <p className="text-xl text-gray-600">
                  Сроки и порядок приема документов на перевод
               </p>
            </motion.div>

            {/* Content Placeholder */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-2xl shadow-xl p-8"
            >
               <div className="text-center text-gray-500 py-12">
                  <p className="text-lg">
                     Содержимое страницы будет добавлено позже
                  </p>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default TransferSchedule;
