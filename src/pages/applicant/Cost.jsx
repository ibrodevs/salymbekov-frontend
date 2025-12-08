import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiDollarSign } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Cost = () => {
   const { t } = useTranslation();

   const contactInfo = {
      addresses: [
         {
            location: t('cost.contacts.addresses.college', 'ул. Малдыбаева, 24б / Ахунбаева, 125 (Международный колледж IT и бизнеса/Американский институт технологий)')
         },
         {
            location: t('cost.contacts.addresses.medical', 'ул. Фучика, 3 (Высшая Школа Медицины)')
         }
      ],
      phones: [
         {
            number: '+996 778 99 88 89',
            description: t('cost.contacts.phones.college', 'International College of IT and Business')
         },
         {
            number: '+996 706 99 88 89',
            description: t('cost.contacts.phones.college', 'International College of IT and Business')
         },
         {
            number: '+996 774 83 88 83',
            description: t('cost.contacts.phones.medical', 'Высшая Школа Медицины')
         },
         {
            number: '+996 501 83 88 83',
            description: t('cost.contacts.phones.medical', 'Высшая Школа Медицины')
         },
         {
            number: '+996 704 83 88 83',
            description: t('cost.contacts.phones.ait', 'Американский институт технологий')
         }
      ],
      email: 'info@salymbekov.com'
   };

   const tuitionFees = {
      medicine: [
         {
            direction: t('cost.tuition.medicine.generalMedicine5', 'General Medicine 5 years'),
            cost: '3 500 USD'
         },
         {
            direction: t('cost.tuition.medicine.generalMedicine6', 'General Medicine 6 years'),
            cost: '100 000 сом'
         }
      ],
      itBusiness: [
         {
            direction: t('cost.tuition.itBusiness.computerScience', 'Компьютерная наука'),
            cost: '308 000 (3 500 USD)'
         },
         {
            direction: t('cost.tuition.itBusiness.ai', 'Artificial Intelligence'),
            cost: '308 000 (3 500 USD)'
         },
         {
            direction: t('cost.tuition.itBusiness.webDev', 'Web Development'),
            cost: '262 350 (3 000 USD)'
         },
         {
            direction: t('cost.tuition.itBusiness.internationalBusiness', 'Международный бизнес'),
            cost: '218 625 (2 500 USD)'
         },
         {
            direction: t('cost.tuition.itBusiness.digitalEntrepreneurship', 'Digital Entrepreneurship'),
            cost: '218 625 (2 500 USD)'
         }
      ],
      ait: [
         {
            direction: t('cost.tuition.ait.computerScience', 'Компьютерная наука'),
            cost: '437 250 (5 000 USD)'
         },
         {
            direction: t('cost.tuition.ait.businessInformatics', 'Бизнес-информатика'),
            cost: '437 250 (5 000 USD)'
         },
         {
            direction: t('cost.tuition.ait.masters', 'МАГИСТРАТУРА – Компьютерная наука'),
            cost: '262 350 (3 000 USD)'
         }
      ]
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-16"
            >
               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {t('cost.title', 'Tuition fees')}
               </h1>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('cost.subtitle', 'Admission committee contacts and tuition information')}
               </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Left Column - Contact Information */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
               >
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                     <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <FiMapPin className="w-6 h-6 text-blue-600" />
                        {t('cost.contacts.title', 'Admission committee contacts')}
                     </h2>

                     {/* Addresses */}
                     <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                           {t('cost.contacts.addresses.title', 'Address')}
                        </h3>
                        <div className="space-y-3">
                           {contactInfo.addresses.map((address, index) => (
                              <div key={index} className="flex items-start gap-3">
                                 <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                 <p className="text-gray-700">{address.location}</p>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Phone Numbers */}
                     <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                           <FiPhone className="w-5 h-5 text-green-600" />
                           {t('cost.contacts.phones.title', 'Mobile')}
                        </h3>
                        <div className="space-y-3">
                           {contactInfo.phones.map((phone, index) => (
                              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                                 <a
                                    href={`tel:${phone.number}`}
                                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                 >
                                    {phone.number}
                                 </a>
                                 <span className="text-gray-500 text-sm">— {phone.description}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Email */}
                     <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                           <FiMail className="w-5 h-5 text-red-600" />
                           Email
                        </h3>
                        <a
                           href={`mailto:${contactInfo.email}`}
                           className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
                        >
                           {contactInfo.email}
                        </a>
                     </div>
                  </div>

                  {/* Tuition Info Card */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="bg-blue-50 rounded-2xl p-6 mt-6 border border-blue-200"
                  >
                     <div className="flex items-center gap-3 mb-3">
                        <FiDollarSign className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">
                           {t('cost.info.title', 'Payment Information')}
                        </h3>
                     </div>
                     <p className="text-gray-700 leading-relaxed">
                        {t('cost.info.description', 'Tuition fees at Salymbekov University are determined in accordance with the Charter, Strategic Goals and Objectives, Accounting Policy, internal documents, as well as laws and regulations of the Kyrgyz Republic. In accordance with the decrees of the highest state bodies, university students have the right to pay the cost of education in equal installments during the academic year.')}
                     </p>
                  </motion.div>
               </motion.div>

               {/* Right Column - Tuition Fees */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
               >
                  {/* International Faculty of Medicine */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {t('cost.tuition.medicine.title', 'International Faculty of Medicine')}
                     </h3>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    {t('cost.tuition.direction', 'Direction')}
                                 </th>
                                 <th className="text-right py-3 px-4 font-semibold text-gray-700">
                                    {t('cost.tuition.costPerYear', 'Cost per year')}
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {tuitionFees.medicine.map((program, index) => (
                                 <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-gray-800">{program.direction}</td>
                                    <td className="py-3 px-4 text-right font-semibold text-blue-600">
                                       {program.cost}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>

                  {/* International College of IT and Business */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {t('cost.tuition.itBusiness.title', 'International College of IT and Business')}
                     </h3>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    {t('cost.tuition.direction', 'Direction')}
                                 </th>
                                 <th className="text-right py-3 px-4 font-semibold text-gray-700">
                                    {t('cost.tuition.costPerYear', 'Cost per year')}
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {tuitionFees.itBusiness.map((program, index) => (
                                 <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-gray-800">{program.direction}</td>
                                    <td className="py-3 px-4 text-right font-semibold text-blue-600">
                                       {program.cost}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>

                  {/* Американский институт технологий (AIT) */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {t('cost.tuition.ait.title', 'Американский институт технологий (AIT)')}
                     </h3>
                     <div className="overflow-x-auto">
                        <table className="w-full">
                           <thead>
                              <tr className="border-b-2 border-gray-200">
                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    {t('cost.tuition.direction', 'Direction')}
                                 </th>
                                 <th className="text-right py-3 px-4 font-semibold text-gray-700">
                                    {t('cost.tuition.costPerYear', 'Cost per year')}
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {tuitionFees.ait.map((program, index) => (
                                 <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-gray-800">{program.direction}</td>
                                    <td className="py-3 px-4 text-right font-semibold text-blue-600">
                                       {program.cost}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Cost;