import React from 'react';
import { useTranslation } from 'react-i18next';

const Appeal = () => {
  // URL для изображений
  const founderPhotoUrl = "https://salymbekov.com/wp-content/uploads/2021/02/salymbekov-askar-maatkabylovich-main-239x300.jpg";
  const backgroundImageUrl = "https://salymbekov.com/wp-content/uploads/2021/08/uchrediteli-askar-maatkabylovich-amangeldi-jesengeldi-e1629256318453.jpg";
  const sbsBannerUrl = "https://salymbekov.com/wp-content/uploads/2023/02/bc0b2014-1920x1008.jpg";
  const educationImageUrl = "https://mbbsadmissionwala.in/wp-content/uploads/2025/08/photo_2023-05-09_14-27-22-1024x768.jpg";
  const researchImageUrl = "https://salymbekov.com/wp-content/uploads/2023/02/bc0b2640-1920x1008.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция с фоновым изображением */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{backgroundImage: `url(${backgroundImageUrl})`}}
      >
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Обращение учредителя</h1>
         
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Введение */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            В видении каждого кыргызстанца, который питает надежду на лучшее, Кыргызстан к 2030 году станет страной конкурентоспособной, с диверсифицированной экономикой, высокими доходами на душу населения, полноправным и активным членом глобального сообщества. Для достижения этого необходимо делать упор на главное богатство – человеческие ресурсы. Движущей силой экономики, просвещенной элитой являются ученые, преподаватели, инвесторы, предприниматели и рабочие, которые создают знания, финансируют и развивают бизнес, обеспечивают экономику рабочей силой и создают фундамент конкурентоспособности на глобальном уровне.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Предоставить возможность гражданам овладеть знаниями и навыками мирового уровня, способностями к критическому мышлению – это один из стратегических приоритетов университета.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            В этом плане необходимо развивать следующие сферы:
          </p>
        </div>

        {/* Список направлений */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Систему среднего образования</h3>
                <p className="text-gray-700">
                  которая позволит молодым ребятам поступать в ведущие университеты мира, уменьшить разрыв в знаниях и обеспечить плавный переход к высшему профессиональному образованию.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Национальные научно-исследовательские центры</h3>
                <p className="text-gray-700">
                  которые позволят отечественным ученым быть в эпицентре решения наиболее острых проблем, а государству пользоваться внутренними ресурсами академии наук.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Систему профессионально-технического образования</h3>
                <p className="text-gray-700">
                  которая подготовит для страны рабочую силу, обладающую техническими навыками, необходимыми для конкурентоспособной и успешной экономики.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Систему высшего образования</h3>
                <p className="text-gray-700">
                  позволяющую готовить лидеров и высококвалифицированных специалистов, необходимых для роста и социально-экономического развития страны.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок о практических результатах */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            На сегодняшний день вышеуказанные реформы возможны только путем практических результатов, как модели реформ. Примером траектории развития для среднего образования университет имеет бизнес-школу «Salymbekov Business School» с рядом проектов, таких как «МЛК», «БЛК», «ЮЛК».
          </p>
        </div>

        {/* Баннер SBS */}
        <div className="mb-12">
          <img 
            src={sbsBannerUrl}
            alt="SBS Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x200/6B7280/FFFFFF?text=SBS+Banner";
            }}
          />
        </div>

        {/* Блок о Бизнес-школе */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Бизнес-школа "Салымбеков"</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Бизнес-школа является учреждением, предоставляющим комплексное обучение с современным подходом. Она обладает уникальной образовательной программой, узнаваемым брендом, сообществом квалифицированных тренеров и преподавателей. Школа Салымбекова предоставляет качественное и доступное дополнительное образование по направлениям: «школа лидерства», «школа бизнеса и управления», «STEM школа», «языковая школа» и «школа интенсивного развития». Бизнес-школа имеет 10 самостоятельных филиалов во всех областях страны, которые осуществляют деятельность по принципу социального предпринимательства в сфере образования.
            </p>
          </div>
        </div>

        {/* Изображение образования */}
        <div className="mb-12">
          <img 
            src={educationImageUrl}
            alt="Образовательная деятельность"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x200/6B7280/FFFFFF?text=Образовательная+деятельность";
            }}
          />
        </div>

        {/* Блок об образовательной деятельности */}
        <div className="mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Образовательная деятельность учредителей в первую очередь нацелена на открытие образовательных учреждений с комплексной, интенсивной, мотивационной и современной программой обучения, направленные на комплексное развитие человека.
            </p>
          </div>
        </div>

        {/* Блок о поддержке исследований */}
        <div className="mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              На сегодняшний день в стране отсутствует поддержка исследований и науки, которая необходима для создания знаний, необходимых для роста и диверсификации экономики, отсутствует система решения наиболее актуальных научных, инженерных, экономических и социальных вызовов, стоящих перед страной, а также ничтожная возможность сотрудничества с ведущими мировыми учеными и научно-исследовательскими институтами.
            </p>
          </div>
        </div>

        {/* Изображение исследований */}
        <div className="mb-12">
          <img 
            src={researchImageUrl}
            alt="Научные исследования"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x200/6B7280/FFFFFF?text=Научные+исследования";
            }}
          />
        </div>

        {/* Блок о задаче вуза */}
        <div className="mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Стать вузом – генератором знаний – это важнейшая задача для нас. Однако, предприниматели, бизнес-лидеры, финансисты, рабочие должны воспользоваться этими знаниями и трансформировать их в экономический рост и процветание всей страны.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Выпускники высших учебных заведений Кыргызстана должны обладать лучшими техническими навыками и возможностями, позволяющими использовать эти навыки творчески в постоянно меняющейся экономической реальности.
            </p>
          </div>
        </div>

        {/* Блок о миссии Университета */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Миссия Университета</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Университет должен стать одним из первых вузов по выдвижению системы высшего образования Кыргызстана на мировой уровень по качеству предоставляемых знаний. Для этого университет должен обладать академической свободой и автономией, а также образовательным процессом, интегрированным с научно-исследовательской деятельностью и производством, становится моделью для других университетов.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Университет является наглядным примером инвестирования частных инициатив в институт способный внести вклад в будущее страны. Для достижения успеха университет должен не только следовать своей миссии: «готовить выпускников, соответствующих высоким международным стандартам, способных внести вклад в научные исследования, образование и национальную экономику», но и всеми возможными путями доказать, что частные инициативы оказались оправданными и эффективными для решения задач глобального масштаба. Результаты исследований, их количество, качество и влияние на экономику станут реальным подтверждением этому.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Кроме того, с течением времени станет задача удерживать свою позицию в числе лучших университетов, для чего необходимо прилагать еще больше усилий и совершенствоваться из года в год.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Динамичная академическая и научно-исследовательская культура университета будет привлекать внимание лучших ученых и преподавателей страны, вызовет интерес у зарубежных университетов, превращаясь в активного члена международного академического и научного сообщества.
            </p>
          </div>
        </div>

        {/* Пустое пространство как на оригинале */}
        <div className="mb-8">
          <div className="h-8"></div>
        </div>

        {/* Блок с подписью и фотографией */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-end">
            <div className="text-center md:text-right mb-4 md:mb-0 md:mr-6 order-2 md:order-1">
              <p className="text-gray-600 text-lg mb-2">Учредитель Университета</p>
              <p className="text-2xl font-bold text-gray-900">Аскар Салымбеков</p>
            </div>
            
            <div className="order-1 md:order-2 mb-4 md:mb-0">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={founderPhotoUrl}
                  alt="Аскар Салымбеков"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200x200/6B7280/FFFFFF?text=Фото+не+загружено";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appeal;