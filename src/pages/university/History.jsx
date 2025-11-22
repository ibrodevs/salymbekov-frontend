import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// import HistoryImage1 from '../../assets/history/history1.jpg';
// import HistoryImage2 from '../../assets/history/history2.jpg';
// import HistoryImage3 from '../../assets/history/history3.jpg';
// import UniversityCampus from '../../assets/history/campus.jpg';
// import FounderPhoto from '../../assets/history/founder.jpg';



const History = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // URL для изображений - замените на реальные с оригинала
  const images = {
    background: "https://cdn-1.aki.kg/st_runews/.storage/limon3/images/December2023/e1e6c764252995247d75716b41142967.png",
    founder: "https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s-1024x679.jpg",
    docClinic: "https://salymbekov.com/wp-content/uploads/2023/03/4.jpg",
    lazmed: "https://salymbekov.com/wp-content/uploads/2020/12/%D0%9B%D0%B0%D0%B7%D0%BC%D0%B5%D0%B4-%D1%84%D0%B0%D1%81%D0%B0%D0%B4.jpg",
    
    batyraliev: "https://salymbekov.com/wp-content/uploads/2021/01/liv.jpg",

    conference1: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    conference2: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    students: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    campus: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    laboratory: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    sport: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    library: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    sagePublishing: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    deGruyter: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    akfaUniversity: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    europeanMedicalUniversity: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    rinc: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    neurologyConference: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",

    medicalPark: "https://salymbekov.com/wp-content/uploads/2023/03/5.jpg",
    universityHospital: "https://salymbekov.ewings.co.in/wp-content/uploads/2025/08/IMG-20250801-WA0038.jpg",

    pendharkar: "https://salymbekov.com/wp-content/uploads/2023/09/dinesh-pendharkar.png",
    
    ophthalmologyCarousel: [
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7153.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7154.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7150.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7155.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7146.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7149-scaled.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7152.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7144-scaled.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7151-scaled.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b6015.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7139-scaled.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7140.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b6001.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5966.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7137-scaled.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5953.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5975.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5990.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5983.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5977.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b5970.jpg"
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.ophthalmologyCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.ophthalmologyCarousel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
        style={{backgroundImage: `url(${images.background})`}}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">История Университетa</h1>
          
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Введение */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img 
                  src={images.founder}
                  alt="Аскар Салымбеков с выпускниками"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300/6B7280/FFFFFF?text=Основатель+с+выпускниками";
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong>Основатель Общественного Фонда «Фонд Аскара Салымбекова» Салымбеков Аскар Мааткабылович с выпускниками «Молодые лидеры Кыргызстана»</strong>
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  История Учреждения «Салымбеков университет» начинается с момента основания Ассоциации «Дордой» учредителем, меценатом и общественным деятелем Аскаром Салымбековым. С 1991 года развитие системы здравоохранения и сохранение здоровья граждан является одной из приоритетных направлений деятельности.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Для этого открыты и успешно функционируют ряд клиник и образовательных учреждений. Так, в 2012 году был основан Общественный фонд «Фонд Аскара Салымбекова», который успешно реализовал ряд образовательных проектов, связанных с обучением школьников и студентов, изданием книг, проведением международных конференций, семинаров и круглых столов и внедрением уникальной образовательной системы дополнительного образования.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Уникальными проектами являются общественные школы «Молодые лидеры Кыргызстана» (МЛК) для студентов, «Юные лидеры Кыргызстана» (ЮЛК) для школьников старших классов и «Будущие лидеры Кыргызстана» (БЛК) для школьников младших классов. Эти проекты позволили обучить и подготовить более 30 тысяч человек. Успешность и высокий спрос со стороны студентов, школьников, их родителей и общественности показали, что был выбран правильный путь развития образования и основываясь на этом опыте был сделан шаг в сторону создания высшего учебного заведения.
            </p>
          </div>
        </div>

        {/* 2019 год - Основание университета */}
        <div className="max-w-6xl mx-auto mb-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2019</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Основание университета</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Таким образом, прямым продолжением ранее успешно запущенных и реализованных образовательных программ является учреждение «Салымбеков университет» (далее – университет) в 2019 году для перехода к следующей стадии развития системы образования путем внедрения современных технологий, методик и программ для подготовки квалифицированных и востребованных кадров. Долгосрочной целью университета являются охват населения страны и привлечение иностранных граждан для предоставления качественного высшего образования по следующим направлениям, как:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
              <li>Медицинские науки;</li>
              <li>Технические науки;</li>
              <li>Экономические науки и бизнес;</li>
              <li>Сельскохозяйственные науки.</li>
            </ul>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              С 2019 года успешно функционирует Международный факультет медицины, имеющий передовую учебную и клиническую базу, научные лаборатории, сильную ресурсную базу, современные учебные программы на английском, русском языках, квалифицированный профессорско-преподавательский состав в полном соответствии с требованиями государственного образовательного стандарта Кыргызской Республики.
            </p>
          </div>

          {/* Клиники с каруселью */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Клиническая база университета</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img 
                  src={images.docClinic}
                  alt="DOC University Clinic"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200/6B7280/FFFFFF?text=DOC+University+Clinic";
                  }}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">DOC University Clinic</h4>
                <p className="text-gray-700">
                  Современная многопрофильная 6-этажная клиника, расположенная в деловом центре города Бишкек на пересечении улиц Тимирязева и Киевской. Клиника рассчитана на 39 койко-мест, оснащена самым передовым медицинским оборудованием.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <img 
                  src={images.lazmed}
                  alt="Клиника Лазмед"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200/6B7280/FFFFFF?text=Клиника+Лазмед";
                  }}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Клиника «Лазмед»</h4>
                <p className="text-gray-700">
                  Успешно функционирующий с 2010 года многопрофильный медицинский центр, применяющий передовые разработки лечения лазерной медицины.
                </p>
              </div>
            </div>

            {/* Карусель для Центра микрохирургии глаза */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Центр микрохирургии глаза «Дордой-Офтальмик Сервис»
              </h4>
              
              <p className="text-gray-700 mb-6 text-center">
                Офтальмологическая клиника, имеющая 20-летний успешный опыт качественного лечения глазных заболеваний, пользуется заслуженным высоким доверием среди граждан КР и иностранных граждан благодаря высококвалифицированному персоналу и передовому мировому оборудованию, как ультразвуковой факоэмульсификатор «LEGACI» производства США последней технологии.
              </p>

              {/* Карусель */}
              <div className="relative max-w-4xl mx-auto">
                <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={images.ophthalmologyCarousel[currentImageIndex]}
                    alt={`Дордой-Офтальмик Сервис ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x400/6B7280/FFFFFF?text=Дордой-Офтальмик+Сервис";
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
                    {currentImageIndex + 1} / {images.ophthalmologyCarousel.length}
                  </div>
                </div>

                <div className="flex overflow-x-auto space-x-2 mt-4 pb-2">
                  {images.ophthalmologyCarousel.map((image, index) => (
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

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Адрес центра: ул. Фучика, 3/4, г. Бишкек
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img 
                  src={images.medicalPark}
                  alt="Дордой Медикал Парк"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200/6B7280/FFFFFF?text=Дордой+Медикал+Парк";
                  }}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Медицинский центр «Дордой Медикал Парк»</h4>
                <p className="text-gray-700">
                  Современная медицинская клиника, которая занимается диагностикой и лечением терапевтических заболеваний в амбулаторных условиях дневного стационара.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <img 
                  src={images.universityHospital}
                  alt="DOC University Hospital"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200/6B7280/FFFFFF?text=DOC+University+Hospital";
                  }}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">«DOC University Hospital»</h4>
                <p className="text-gray-700">
                  Новая современная поликлиника, оснащенная необходимым медицинским оборудованием для проведения диагностики и лечения широкого спектра медицинских заболеваний.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Кроме усиленной клинической базы, с момента основания университет особое внимание уделяет оснащению лабораторной базы, симуляционных и фантомных центров. Студенты университета приобретают практические навыки в лабораториях по микробиологии, химии, биохимии, гистологии и патологической анатомии, симуляционных и фантомных центрах.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Внеучебная активность включает участие в спортивных мероприятиях и состязаниях в спортивном комплексе «Дордой-Спорт», где студенты занимаются футболом, мини-футболом, волейболом, баскетболом и настольным теннисом. Студенты и преподаватели также активно включаются в научную деятельность путем регулярного участия в международных и межвузовских конференциях, встречах и семинарах. Так, в 2019 году студенты и преподаватели приняли участие в 4 межвузовских конференциях на базе университетов страны. Активно работает Студенческий совет для представления интересов студентов.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Укрепление международных связей и усиление сотрудничества с местными и иностранными университетами и клиниками является одним из приоритетных направлений деятельности. Так, в 2019 году было подписано соглашение с ведущим университетом Южной Кореи об открытии совместного факультета информационных технологий для качественной подготовки технических специалистов с возможностью продолжения обучения в Южной Корее и получением двойного диплома. С момента деятельности университет находится в списке Всемирной организации здравоохранения (WDOMS).
            </p>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="max-w-6xl mx-auto mb-8">
          <hr className="border-gray-300" />
        </div>

        {/* 2020 год */}
        <div className="max-w-6xl mx-auto mb-16 bg-green-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2020</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Переход на дистанционное обучение и развитие</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              В 2020 году ознаменовался переходом университета на дистанционное обучение в связи с ухудшением эпидемиологической ситуации. В этих условиях университет оперативно перестроил учебный процесс на дистанционный форму. В полной мере использовались собственные образовательные платформы информационной системы Ebilim, платформы Google Classroom, Zoom, Google Meet.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Весь персонал прошел обучение по внедрению дистанционной формы обучения в учебный процесс, разработаны инструкции для студентов, преподавателей и администрации на русском и английском языках, созданы все условия для качественной связи и интернета, включая выдачу бесплатных сим-карт, выезд сотрудников на места проживания студентов, онлайн-лекции и семинары.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              В части международного сотрудничества по итогам визита представителей университета были подписаны меморандумы о сотрудничестве с Istinye University (г. Стамбул, Турция) и клиниками Liv Hospital и Gaziosmanpasha Hospital (г. Стамбул, Турция). Для предоставления возможности выпускникам продолжать обучение в развитых странах, как США и Канада, университет получил спонсорскую поддержку (Sponsor Notes) от международных медицинских ассоциаций США (ECFMG) и Канады.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              После проведенных переговоров было подписано соглашение с Техническим колледжем Инха (г. Инчхон, Южная Корея) о реализации совместных образовательных программ в сфере технических специальностей, в том числе программирования. Для открытия совместного факультета информационных технологий полностью реконструировано здание Бизнес школы Салымбекова. Используя передовые технологии в строительстве и дизайне, а также учитывая опыт передовых IT школ мира, как школа TUMO и школа 42, планируется создание открытой площадки (коворкинг центра) для технических специалистов.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Университет постоянно повышает квалификацию преподавателей и сотрудников. Организованы и оплачены курсы английского языка для преподавателей и сотрудников объёмом 400 академических часов, были сформированы малые группы по 2-4 человека. Были проведены тренинги по личностному росту для сотрудников по темам «Ораторское искусство», «Тайм-менеджмент» и др.
            </p>

            <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img 
                  src={images.batyraliev}
                  alt="Почетный профессор Батыралиев Т.А."
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300/6B7280/FFFFFF?text=Проф.+Батыралиев";
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 text-lg leading-relaxed">
                  В целях мотивации разработано и утверждено Положение о присвоении звания «Почетный профессор Салымбеков Университет». В 2020 году присвоено звание Почетного профессора Салымбеков Университет» доктору Эргюн Четинкая (Ergun Cetinkaya), Турция в честь достижений в области педиатрии и эндокринологии и д.м.н., профессору Батыралиеву Талантбеку Абдуллаевичу, Кыргызстан за вклад в развитие мировой кардиологии и хирургии сердца.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Для усиления научного потенциала в 2020 году университет принял участие в многостороннем проекте по получению исследовательского гранта SATREPS по направлению "The project for viral control through predictive prognostic factors" (Проект по борьбе с вирусами с помощью прогностических факторов) совместно с исследователями из КГМА, ОшГУ и Университета Осаки, Япония. Совместно с Liv Hospital была проведена онлайн-конференция на тему: «Причины возникновения и патогенетические механизмы неалкогольного жирового гепатоза» преподавателями кафедры клинических дисциплин Князевым И.А. и Перегудовой О.В.
            </p>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="max-w-6xl mx-auto mb-8">
          <hr className="border-gray-300" />
        </div>

        {/* 2021 год */}
        <div className="max-w-6xl mx-auto mb-16 bg-purple-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2021</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Аккредитация и развитие инфраструктуры</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              В 2021 году Университет, кроме предоставления качественных знаний и навыков, активно усиливал учебную, клиническую и ресурсную базу, укреплял международное сотрудничество и развивал научную деятельность.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Главным событием стало успешное прохождение институциональной аккредитации агентством ААОПО (Аккредитационное агентство по оценке образовательных программ и организаций). По итогам проведенной аккредитации было вынесено решение аккредитовать Учреждение «Салымбеков университет» до 2026 года.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Успешно проведенная приемная компания за 2020-2021 учебный год позволила расширить контингент студентов.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Благодаря постоянному развитию клинической базы в 2021 году удалось расширить собственную клиническую базу до пяти клиник. Завершилось строительство и ввод в эксплуатацию DOC University clinic по адресу: ул. Тимирязева, 78, который за короткое время стал одним из ведущих частных медицинских клиник в части проведения успешной диагностики и операций. Были заключены эксклюзивные соглашения о совместной деятельности со следующими аффилированными клиниками:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
              <li>Лечебно-диагностический центр «Андромед-DOC» (г.Ош);</li>
              <li>Медицинский центр «Азия МЕД»; (г. Каракол);</li>
              <li>Медицинский лечебно-диагностический центр «ЭОС ПЛЮС»;</li>
              <li>Скорая помощь «ЭОС-Мед».</li>
            </ul>

            <p className="text-gray-700 text-lg leading-relaxed">
              История продолжается…
            </p>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="max-w-6xl mx-auto mb-8">
          <hr className="border-gray-300" />
        </div>

        {/* 2022 год */}
        <div className="max-w-6xl mx-auto mb-16 bg-orange-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2022</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Усиление международного сотрудничества и ресурсной базы</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              В 2022 году основными задачами университета являются усиление международного сотрудничества и укрепление ресурсной базы.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              В 2022 году продолжается постоянное усиление ресурсной базы университета. Университет получил доступ к одному из крупнейших мировых издательств SAGE Publishing, выпускающий ежемесячно более 1000 журналов, книг по медицинской, гуманитарной и естественно-научной тематике. Университет имеет доступ к ресурсам De Gruyter, включающий базу данных из 210 журналов по академическим и гуманитарным наукам.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              В рамках программы академической мобильности и обмена методами обучения студентов состоялся визит представителей университета в Akfa University и Европейский медицинский университет (г. Ташкент). Были проведены встречи и лекции для студентов, представители ознакомились с учебным процессом и методиками обучения. По итогам встреч были подписаны соглашения с обоими университетами о разработке программ академической мобильности и реализации совместных образовательных программ. Были заключены договоренности о сотрудничестве с Университетом Адам (БФЭА) и Жалал-Абадским государственным университетом им. Б.Осмонова для совместного развития академической и научной деятельности, обмена студентами и преподавателями и реализации совместных учебных программ. Совместно с Университетом Адам (БФЭА) проводится 3-х недельный тренинг по изучению генетики на примере скрещивания мух дрозофил с разными мутациями.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Научная деятельность университета находится в стадии постоянного развития, в 2022 году университет получил доступ к РИНЦ (российский индекс научного цитирования), включая доступ к базе данных публикаций российских авторов (более 12 млн. публикаций) и более 6000 журналов. Проводятся научные конференции и семинары. В феврале 2022 года состоялась международная конференция «Неврология – матриархат медицины» с целью привлечения внимания общественности и научных кругов к проблемам по неврологии и психиатрии.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Проведена онлайн-лекция для студентов известного профессора-онколога д.м.н. Абдылдаева Р.А. «Об особенностях высшего медицинского образования в разных странах мира и Кыргызстана» для ознакомления со спецификой высшего образования в зарубежных странах.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Совместно с ЦПОРТ в апреле 2022 года проведены 72-часовые курсы по теме «Педагогика и психология в процессе обучения» с вручением сертификата. Университетом оплачено обучение 20 преподавателей кафедры клинических дисциплин. Также на базе Центра проводятся курсы для постоянного совершенствования уровня английского языка.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <img 
                    src={images.pendharkar}
                    alt="Доктор Динеш Пендхаркар"
                    className="w-48 h-48 rounded-full object-cover mx-auto"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x200/6B7280/FFFFFF?text=Др.+Пендхаркар";
                    }}
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">Доктор Динеш Пендхаркар</h4>
                  <p className="text-gray-700 mb-2">Президент Индийского общества онкологии</p>
                  <p className="text-gray-700">
                    В мае 2022 года проведены лекции по радиологии для преподавателей и студентов известного ученого доктора Динеш Пендхаркар (Dinesh Pendharkar), президента Индийского общества онкологии, редактора Индийского журнала медицинской детской онкологии, председателя комитета внутренних дел Американского общества клинической онкологии.
                  </p>
                </div>
              </div>
            </div>

            

            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">История продолжается…</h3>
              <p className="text-gray-700 text-lg">
                Университет продолжает развиваться и расширять свои горизонты
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;