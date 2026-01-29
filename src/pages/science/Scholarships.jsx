import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiAward, FiUsers } from 'react-icons/fi';

const Scholarships = () => {
   const { t } = useTranslation();

   const animatedBalls = useMemo(() => {
      return [...Array(25)].map((_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 5 + Math.random() * 3,
         delay: Math.random() * 2
      }));
   }, []);

   // Получаем категории из перевода
   const categoriesData = t('scholarships.categories', { returnObjects: true });

   // Преобразуем объект категорий в массив для рендеринга
   const categoriesArray = useMemo(() => {
      if (!categoriesData || typeof categoriesData !== 'object') return [];

      return Object.keys(categoriesData)
         .filter(key => key.startsWith('category'))
         .sort((a, b) => {
            // Сортируем по номеру категории (I, II, III, IV, V)
            const order = { 'category1': 1, 'category2': 2, 'category3': 3, 'category4': 4, 'category5': 5 };
            return order[a] - order[b];
         })
         .map(key => ({
            title: categoriesData[key]?.title || '',
            description: categoriesData[key]?.description || ''
         }));
   }, [categoriesData]);

   // Имена остаются без перевода, должности - с переводом
   const commissionMembers = [
      {
         name: 'Уметалиева М.Н.',
         positionKey: 'chairman'
      },
      {
         name: 'Арзиева Н.Н.',
         positionKey: 'viceChairman'
      },
      {
         name: 'Акматова А.Т.',
         positionKey: 'umo'
      },
      {
         name: 'Шерали уулу Ж.',
         positionKey: 'economist'
      },
      {
         name: 'Бопушева А.Т.',
         positionKey: 'soc'
      },
      {
         name: 'Пиримбаева Ж.Ж.',
         positionKey: 'hr'
      },
      {
         name: 'Алиярова М.Ю.',
         positionKey: 'teacher'
      }
   ];

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
         {/* Hero Section */}
         <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
               <div
                  className="absolute inset-0 opacity-30"
                  style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <FiAward className="w-10 h-10" />
               </div>
               <h1 className="text-6xl md:text-7xl font-bold mb-6">
                  {t('scholarships.hero.title', 'Стипендии и льготы')}
               </h1>
               <p className="text-2xl md:text-3xl font-semibold text-white/90">
                  {t('scholarships.hero.subtitle', 'Scholarships and Benefits')}
               </p>
            </div>
         </div>

         {/* Main Content */}
         <div className="relative z-10 container mx-auto px-4 -mt-20">
            <div className="max-w-4xl mx-auto">
               {/* Content */}
               <div className="space-y-8">
                  {/* Introduction */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.policy.title', 'Льготная политика')}
                     </h2>
                     <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>
                           {t('scholarships.policy.description1', 'Социальная поддержка студентов университета представляет собой предоставление льгот студентам в виде снижения стоимости оплаты за обучение на сумму, выраженную в процентном соотношении к установленной стоимости обучения.')}
                        </p>
                        <p>
                           {t('scholarships.policy.description2', 'Льготы по социальной поддержке могут быть предоставлены в виде: бесплатное проживание в общежитии, льготное питание и др. Льготы могут быть предоставлены в виде исключений в других особых случаях при наличии веских оснований, которые комиссией посчитаются достаточными.')}
                        </p>
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-l-4 border-[#0077B6]">
                           <p className="font-semibold text-[#023E8A]">
                              {t('scholarships.policy.condition', 'Непременным условием социальной поддержки студентов является отличная и хорошая успеваемость, учебная дисциплина и активное участие в научно-исследовательской, культурно-массовой, спортивной и общественной работе Университета.')}
                           </p>
                        </div>
                        <p>
                           {t('scholarships.policy.description3', 'Право на получение льготы имеют студенты Университета очной формы обучения, имеющие по результатам предыдущего учебного года только отличные оценки по всем дисциплинам, а также не имеющие академической задолженности.')}
                        </p>
                     </div>
                  </div>

                  {/* Categories Section */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                     <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.categories.title', 'Категории студентов для получения льгот')}
                     </h2>
                     <div className="space-y-6">
                        {categoriesArray.map((category, idx) => (
                           <div
                              key={idx}
                              className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                           >
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center shrink-0">
                                 <span className="text-white text-2xl font-bold">{idx + 1}</span>
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-2xl font-bold text-[#023E8A] mb-3">{category.title}</h3>
                                 <p className="text-gray-700 leading-relaxed">{category.description}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Commission Section */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                     <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                        {t('scholarships.commission.title', 'Состав комиссии по социальной поддержке студентов')}
                     </h2>
                     <p className="text-xl font-semibold text-gray-700 mb-8">
                        {t('scholarships.commission.subtitle', 'Международного факультета медицины «Салымбеков Университет»')}
                     </p>
                     <div className="space-y-4">
                        {commissionMembers.map((member, idx) => (
                           <div
                              key={idx}
                              className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300"
                           >
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center shrink-0">
                                 <FiUsers className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                 <p className="font-bold text-[#023E8A] text-lg">{member.name}</p>
                                 <p className="text-gray-600">
                                    {t(`scholarships.commission.${member.positionKey}`, '')}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl">
                        <p className="text-gray-700 text-sm">
                           <strong>{t('scholarships.commission.basis', 'Основание:')}</strong> {t('scholarships.commission.basisText', 'решение ученого совета от 30 августа 2022 года.')}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Scholarships;
