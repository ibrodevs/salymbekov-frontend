import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Building2, Users, Star } from 'lucide-react';

const PartnersSection = () => {
  const { t } = useTranslation();
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const containerRef = useRef(null);
  const scrollSpeed = 1; // Скорость прокрутки (пикселей за кадр)
  const animationRef = useRef(null);

  const partners = [
    // Международные университеты и образовательные партнёры
    {
      id: 1,
      name: 'Inha Technical College',
      countryKey: 'home.partners.countries.southKorea',
      typeKey: 'home.partners.cooperationTypes.memorandum',
      category: 'international',
      logoColor: 'from-blue-500 to-cyan-400',
      icon: Globe
    },
    {
      id: 2,
      name: 'Inha University',
      countryKey: 'home.partners.countries.southKorea',
      typeKey: 'home.partners.cooperationTypes.memorandum',
      category: 'international',
      logoColor: 'from-blue-600 to-blue-400',
      icon: Building2
    },
    {
      id: 3,
      name: 'Hosan University',
      countryKey: 'home.partners.countries.southKorea',
      typeKey: 'home.partners.cooperationTypes.dualDiploma',
      category: 'international',
      logoColor: 'from-red-500 to-pink-500',
      icon: Users
    },
    {
      id: 4,
      name: 'Lincoln University College',
      countryKey: 'home.partners.countries.malaysia',
      typeKey: 'home.partners.cooperationTypes.educationalCooperation',
      category: 'international',
      logoColor: 'from-yellow-500 to-orange-500',
      icon: Globe
    },
    {
      id: 5,
      name: 'Kazan Federal University',
      countryKey: 'home.partners.countries.russia',
      typeKey: 'home.partners.cooperationTypes.jointInitiatives',
      category: 'international',
      logoColor: 'from-green-600 to-emerald-400',
      icon: Building2
    },
    {
      id: 6,
      name: 'Tashkent University of Medicine',
      countryKey: 'home.partners.countries.uzbekistan',
      typeKey: 'home.partners.cooperationTypes.cooperationAgreement',
      category: 'international',
      logoColor: 'from-blue-700 to-indigo-500',
      icon: Users
    },
    {
      id: 7,
      name: 'ITM University Gwalior',
      countryKey: 'home.partners.countries.india',
      typeKey: 'home.partners.cooperationTypes.cooperationAgreement',
      category: 'international',
      logoColor: 'from-orange-600 to-amber-500',
      icon: Globe
    },
    {
      id: 8,
      name: 'Adam University',
      countryKey: 'home.partners.countries.india',
      typeKey: 'home.partners.cooperationTypes.cooperation',
      category: 'international',
      logoColor: 'from-purple-500 to-pink-500',
      icon: Building2
    },
    // Региональные и локальные партнёры
    {
      id: 9,
      name: 'Jalal-Abad State University',
      countryKey: 'home.partners.countries.kyrgyzstan',
      typeKey: 'home.partners.cooperationTypes.partnership',
      category: 'regional',
      logoColor: 'from-green-500 to-teal-400',
      icon: Users
    },
    {
      id: 10,
      name: 'European Medical University',
      countryKey: 'home.partners.countries.kyrgyzstan',
      typeKey: 'home.partners.cooperationTypes.regionalPartner',
      category: 'regional',
      logoColor: 'from-blue-400 to-cyan-300',
      icon: Globe
    },
    {
      id: 11,
      name: 'Institute of Biology of the National Academy of Sciences',
      countryKey: 'home.partners.countries.kyrgyzstan',
      typeKey: 'home.partners.cooperationTypes.memorandum',
      category: 'regional',
      logoColor: 'from-emerald-500 to-green-400',
      icon: Building2
    },
    {
      id: 12,
      name: 'Kyrgyz state medical institute of post-graduate training',
      countryKey: 'home.partners.countries.kyrgyzstan',
      typeKey: 'home.partners.cooperationTypes.partnership',
      category: 'regional',
      logoColor: 'from-red-600 to-orange-500',
      icon: Users
    },
    {
      id: 13,
      name: 'KSTU им. И. Раззакова',
      countryKey: 'home.partners.countries.kyrgyzstan',
      typeKey: 'home.partners.cooperationTypes.memorandum',
      category: 'regional',
      logoColor: 'from-indigo-500 to-blue-400',
      icon: Globe
    },
    // Международные альянсы и организации
    {
      id: 14,
      name: 'Global Virtual Convergence College Alliance',
      countryKey: 'home.partners.countries.international',
      typeKey: 'home.partners.cooperationTypes.allianceMember',
      category: 'alliance',
      logoColor: 'from-purple-600 to-violet-500',
      icon: Building2
    },
    {
      id: 15,
      name: 'Peter the Great St. Petersburg Polytechnic University',
      countryKey: 'home.partners.countries.russia',
      typeKey: 'home.partners.cooperationTypes.dualDiplomaPrograms',
      category: 'alliance',
      logoColor: 'from-rose-500 to-pink-500',
      icon: Users
    }
  ];

  // Дублируем партнеров для бесконечной прокрутки
  const duplicatedPartners = [...partners, ...partners, ...partners];

  // Анимация бесконечной горизонтальной прокрутки
  useEffect(() => {
    if (!containerRef.current) return;

    let animationId;
    let scrollPosition = 0;
    const container = containerRef.current;
    const contentWidth = container.scrollWidth / 3; // Так как контент продублирован 3 раза

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Если прокрутили одну треть (одну копию партнеров), сбрасываем на начало
      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Категории для фильтрации - убраны по запросу
  // const categories = [
  //   { id: 'all', label: 'Все партнеры', count: partners.length },
  //   { id: 'international', label: 'Международные', count: partners.filter(p => p.category === 'international').length },
  //   { id: 'regional', label: 'Региональные', count: partners.filter(p => p.category === 'regional').length },
  //   { id: 'alliance', label: 'Альянсы', count: partners.filter(p => p.category === 'alliance').length }
  // ];

  // const [activeCategory, setActiveCategory] = useState('all');
  // const filteredPartners = activeCategory === 'all' 
  //   ? partners 
  //   : partners.filter(p => p.category === activeCategory);

  // Функции для ручной прокрутки - убраны по запросу
  // const scrollLeft = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="py-16  overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('home.partners.title', 'Наши партнеры')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('home.partners.subtitle')}
          </p>
        </div>

        {/* Элементы управления - убраны по запросу */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 text-blue-600 font-medium"
            >
              {isPaused ? (
                <>
                  <Play className="w-4 h-4" />
                  <span>Продолжить</span>
                </>
              ) : (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Пауза</span>
                </>
              )}
            </button>

            <div className="h-6 w-px bg-gray-300"></div>

            <button
              onClick={scrollLeft}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div> */}

        {/* Бесконечная горизонтальная карусель */}
        <div className="relative mb-16">
          {/* Градиенты по бокам */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Карусель */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden py-8 scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => {
              const Icon = partner.icon;
              const isHovered = hoveredPartner === partner.id;
              
              return (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-80"
                  onMouseEnter={() => setHoveredPartner(partner.id)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 h-64 ${
                    isHovered 
                      ? 'scale-105 shadow-2xl -translate-y-2' 
                      : 'scale-100 shadow-lg'
                  }`}>
                    {/* Градиентная полоса */}
                    <div className={`h-3 bg-gradient-to-r ${partner.logoColor}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Иконка */}
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${partner.logoColor} flex items-center justify-center shadow-lg transform transition-transform duration-300 ${
                          isHovered ? 'scale-110 rotate-6' : ''
                        }`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Контент */}
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight line-clamp-2">
                            {partner.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Globe className="w-4 h-4 mr-2" />
                            {t(partner.countryKey)}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                            {t(partner.typeKey)}
                          </p>
                        </div>
                      </div>
                      
                      {/* Индикатор категории */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            partner.category === 'international' 
                              ? 'bg-blue-50 text-blue-600'
                              : partner.category === 'regional'
                              ? 'bg-green-50 text-green-600'
                              : 'bg-purple-50 text-purple-600'
                          }`}>
                            {partner.category === 'international' && t('home.partners.categories.international')}
                            {partner.category === 'regional' && t('home.partners.categories.regional')}
                            {partner.category === 'alliance' && t('home.partners.categories.alliance')}
                          </span>
                          
                          {isHovered && (
                            <div className="flex items-center text-blue-500 text-sm font-medium">
                              <Star className="w-4 h-4 mr-1 fill-current" />
                              {t('home.partners.partnership')}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Индикатор бесконечной прокрутки - убран по запросу */}
          {/* <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-red-400' : 'bg-green-500 animate-pulse'}`}></div>
              <span>
                {isPaused ? 'Прокрутка приостановлена' : 'Бесконечная прокрутка активна'}
              </span>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Анимация градиента для заголовка */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;