import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Mission = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // URL для изображений - замените на реальные с оригинала
  const images = {
    missionHero: "https://salymbekov.com/wp-content/uploads/2022/04/bc0b3788.jpg",
    mlkCarousel: [
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3814.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3797.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3848.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3862.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3796.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3860.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3890.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3802.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3899.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3927.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3932.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3965.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3940.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3928.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3951.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3944.jpg"
    ],
    valuesImage: "URL_ИЗОБРАЖЕНИЕ_ЦЕННОСТЕЙ",
    goalsImage: "URL_ИЗОБРАЖЕНИЕ_ЦЕЛЕЙ",
    teamImage: "URL_ИЗОБРАЖЕНИЕ_КОМАНДЫ",
    businessSchool: "URL_БИЗНЕС_ШКОЛА",
    students: "URL_СТУДЕНТЫ"
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.mlkCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.mlkCarousel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section с исправленным фоном */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
        style={{backgroundImage: `url(${images.missionHero})`}}
      >
        {/* Уменьшаем opacity оверлея или убираем его */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Миссия </h1>
          
        </div>
      </div>

      {/* Остальной код без изменений */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Миссия университета */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Миссия университета</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border-l-4 border-blue-600">
              <p className="text-blue-800 text-xl font-semibold italic text-center">
                "Подготовка современных кадров, способных реализовывать творческие инициативы и инновационные идеи на благо общества."
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Основанный в 2019 году Учреждение «Салымбеков Университет» является прямым продолжением ранее запущенных образовательных проектов основанного в 2012 году Общественного фонда «Фонд Аскара Салымбекова», который выделил наиболее важные направления для стимулирования развития человеческих ресурсов, образования, науки и формирования нового поколения просвещенной молодежи. Фондом были реализованы многие крупные проекты, связанные с обучением школьников и студентов, с изданием книг, с проведением семинаров, круглых столов, форумов и других площадок для различных компаний, организаций и учебных заведений, а также мероприятий с участием международных лекторов. Все эти проекты позволили обучить и просветить более 25 тысяч человек.
            </p>
          </div>
        </div>

        {/* Карусель с выпускниками МЛК */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            

            {/* Карусель */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={images.mlkCarousel[currentImageIndex]}
                  alt={`Аскар Салымбеков с выпускниками МЛК ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400/6B7280/FFFFFF?text=Аскар+Салымбеков+с+выпускниками+МЛК";
                  }}
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  ‹
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  ›
                </button>
                
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.mlkCarousel.length}
                </div>
              </div>

              <div className="flex overflow-x-auto space-x-2 mt-4 pb-2">
                {images.mlkCarousel.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/100x100/6B7280/FFFFFF?text=IMG";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                Так в 2014 году Фондом был запущен успешный образовательный проект для молодежи – Общественная школа «Молодые лидеры Кыргызстана», которая оказала огромный положительный эффект на новое поколение. Ее уникальные, не имеющие аналогов, комплексные курсы тренингов и мотивационных занятий дали студентам и молодежи возможность освоить так называемые «Soft skills», новые знания и навыки для личностного роста и формирования лидерских качеств. Несмотря на то, что данная школа задумывалась как площадка для обучения только 100 человек, ее работа на этом не прекратилась. Многочисленные положительные отзывы и просьбы стали поводом для продолжения данной инициативы, начали проводиться последующие наборы в эту школу. На сегодняшний день выпускниками 11 потоков общественной школы «Молодые лидеры Кыргызстана» стали около 1100 студентов и представителей молодежи Кыргызстана.
              </p>
            </div>
          </div>
        </div>

        {/* Развитие образовательных проектов */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Успешный опыт с общественной школой для студентов и молодежи, а также отзывы и обращения со стороны населения стали толчком к запуску аналогичных образовательных проектов для других возрастных групп. Так, в 2016 году для учащихся старших классов среднеобразовательных школ была запущена адаптированная для них Общественная школа «Юные лидеры Кыргызстана», обучение в которой завершили около 800 учеников старших классов. С 2017 года был запущен образовательный проект под названием Общественная школа «Будущие лидеры Кыргызстана» для учащихся средних и младших классов, общее количество выпускников данной школы составляет порядка 450 человек. Без внимания не остались и дети, специально для них в 2018 году был запущен образовательный проект для детей дошкольного возраста «Смартик».
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Важной ступенью нашего развития был 2017 год, когда все выше указанные проекты были объедены в один проект, а именно в Бизнес школу «Salymbekov Business School», деятельность которой была ориентирована по таким 5 направлениям как «Школа лидерства» (охватывающая образовательные проекты для всех возрастных групп), «Школа бизнеса и управления», «STEM школа», «Языковая школа» и «Школы интенсивного развития». При этом было уделено особое внимание на пропаганду и популяризацию английского языка в Кыргызской Республике, где посредством реализации ключевых проектов и инициатив был запущен процесс развития мультиязычной системы образования.
            </p>

            <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-l-4 border-yellow-500">
              <p className="text-gray-700">
                Положительные отзывы и слова благодарности столичных школьников и студентов, разовые образовательные мероприятия в областных центрах вызвали волну просьб со стороны жителей регионов страны, которые просили открыть у них аналогичные школы. На основе этого был запущен процесс Масштабирования Бизнес школы Салымбекова на принципах социального предпринимательства, т.е., был реализован образовательный проект с социально-экономической ориентацией. Были открыты филиалы Бизнес школы в городах Джалал-Абад, Ош, Баткен, Каракол, Талас Нарын, Балыкчы и в селах Ат-Башы и Ново-Покровка. Данные филиалы, как и головная школа в Бишкеке, ориентированы на воспитание и формирование нового поколения образованной, самостоятельной и ответственной молодежи и будущих лидеров. В рамках этих общественных школ предоставляется дополнительное современное образование, которое не входит в программу обучения общеобразовательных и высших учебных заведений страны.
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Благодаря успешному опыту и практике в реализации образовательных программ и проектов, а также из-за острой необходимости во внедрении современных методов и программ по подготовке высококвалифицированных и востребованных кадров было принято решение основать новое учебное заведение  «Салымбеков Университет».
            </p>
          </div>
        </div>

        {/* Стратегические цели */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Стратегические цели, исходя из миссии:</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Качественное образование</h3>
              <p className="text-gray-700 text-center">
                Предоставление образование и подготовка высококвалифицированных кадров по востребованным направлениям рынка труда и в соответствии с международными стандартами качества образования.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Развитие человеческих ресурсов</h3>
              <p className="text-gray-700 text-center">
                Развитие человеческих ресурсов, системы образования и здравоохранения страны путем открытия современных и инновационных образовательных и медицинских учреждений.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Инновационный университет</h3>
              <p className="text-gray-700 text-center">
                Превращение Университета в один из первоклассных, инновационных и современных образовательных организаций страны с сильной материальной-технической базой, качественным кадровым составом и высокой репутацией.
              </p>
            </div>
          </div>
        </div>

        {/* Приоритетные цели университета */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Приоритетные цели нашего Университета</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-3">IT-сфера</h3>
              <p className="text-red-800">Подготовка специалистов в области информационных технологий</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-3">Бизнес управление</h3>
              <p className="text-red-800">Образование в сфере менеджмента и предпринимательства</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-3">Сельское хозяйство</h3>
              <p className="text-red-800">Развитие аграрного сектора через образование</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-3">Профессиональное техническое образование</h3>
              <p className="text-red-800">Подготовка технических специалистов</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-3">Медицинское образование</h3>
              <p className="text-red-800">Подготовка медицинских кадров по международным стандартам</p>
            </div>
          </div>
        </div>

        {/* Медицинский факультет */}
        <div className="max-w-6xl mx-auto mb-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Медицинский факультет</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Одним из таких первых направлений нашего Университета является Медицинский факультет, где подготовка востребованных в нашей стране и за рубежом высококвалифицированных медицинских кадров будет осуществляться по международным стандартам. Применение эффективных методик обучения и современных образовательных программ обеспечивает высокую конкурентную способность наших выпускников как на внутреннем, так и на внешнем рынке труда, а также позволяет им успешно осуществлять свою трудовую деятельность на международной арене. Наш Университет готовит медицинские кадры по международным стандартам с ведением процесса обучения на английском языке.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Наша стратегия рассматривает подготовку по медицинскому направлению граждан:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-2">КЫРГЫЗСТАНА</h4>
                  <p className="text-blue-800">Для отечественного здравоохранения</p>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-2">СТРАН БЛИЖНЕГО ЗАРУБЕЖЬЯ</h4>
                  <p className="text-green-800">Для регионального сотрудничества</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-4">
                  <h4 className="font-bold text-purple-900 mb-2">СТРАН ДАЛЬНЕГО ЗАРУБЕЖЬЯ</h4>
                  <p className="text-purple-800">Для международного признания</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ожидаемые результаты обучения */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ожидаемые результаты обучения</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Применение знаний</h4>
                  <p className="text-gray-700 text-sm">
                    Умение применять знания базовых естественных, гуманитарных, социальных, фундаментальных и клинических дисциплин в практической деятельности работника здравоохранения;
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Коммуникативные навыки</h4>
                  <p className="text-gray-700 text-sm">
                    Умение четко излагать свои мысли, полемизировать в рамках освоенных компетенций на государственном, официальном и английском языках с использованием медицинской терминологии на латинском языке;
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Работа в команде</h4>
                  <p className="text-gray-700 text-sm">
                    Получение навыка работы в интернациональной команде, принимать решения и нести ответственность как лидера и члена команды с использованием коммуникативных и базовых психологических навыков, умение делегировать полномочия в команде;
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Профилактика заболеваний</h4>
                  <p className="text-gray-700 text-sm">
                    Знание основных форм и методов профилактики заболеваний, санитарно-просветительской работы с населением, знание противоэпидемических мероприятий на уровне врача общей практики;
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Информационные технологии</h4>
                  <p className="text-gray-700 text-sm">
                    Умение использовать современные информационные технологии для поиска, анализа, обработки и предоставлению общественности информации согласно получаемой компетенции, во врачебной, научной и педагогической деятельности;
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Самосовершенствование</h4>
                  <p className="text-gray-700 text-sm">
                    Владение навыками нравственного, культурного и профессионального самосовершенствования путем самостоятельного обзора учебников, научных статей, монографий и прочей литературы в рамках, формируемых компетенции;
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Научно-практические исследования</h4>
                  <p className="text-gray-700 text-sm">
                    Знать, уметь применять и представлять общественности приобретенные общенаучные, профессиональные знания и инструментальные навыки для проведения научно-практических исследований в области медицины на международном уровне;
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Профессиональные компетенции</h4>
                  <p className="text-gray-700 text-sm">
                    Демонстрация профессиональных компетенций во врачебной, научной и педагогической деятельности в организациях — потенциальных работодателей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;