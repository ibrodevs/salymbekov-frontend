import React from 'react';
import { Link } from 'react-router-dom';

const ScienceMain = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Наука</h1>
          <p className="text-xl text-blue-100">
            Научная деятельность и исследования
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Научная работа в Университете – это деятельность профессорско-преподавательского состава, 
            магистров, аспирантов, соискателей и студентов, направленная на формирование и развитие 
            у сотрудников и обучаемых исследовательского типа мышления, решение актуальных медицинских, 
            гуманитарных, социально-экономических, педагогических и других фундаментальных и прикладных 
            задач, способствующих повышению общекультурного и профессионального уровня специалистов-выпускников.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Научная работа является одним из основных видов деятельности руководящего и 
            профессорско-преподавательского состава. Она осуществляется в интересах дальнейшего 
            развития теоретических основ изучаемых дисциплин, обеспечения органического единства 
            учебной, методической и научной работы, совершенствования всего образовательного процесса.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Направленность научной работы должна отвечать потребностям современного этапа общественного 
            развития, соответствовать профилю Университета и его структурных подразделений, способствовать 
            наиболее полной реализации творческого потенциала профессорско-преподавательского состава и студентов.
          </p>
        </div>

        {/* Priority Directions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Приоритетными направлениями научных исследований Университета являются:
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              <p className="text-gray-700 text-lg">
                научное, научно-методическое и информационное обеспечение учебно-воспитательного 
                процесса, включая подготовку научно-медицинских кадров по лицензированным научным 
                специальностям;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              <p className="text-gray-700 text-lg">
                теоретико-методологические и прикладные исследования актуальных общекультурных, 
                гуманитарных, социально-экономических, педагогических и других проблем.
              </p>
            </li>
          </ul>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/science/management"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Органы управления</h3>
            <p className="text-gray-600">Структура научного управления университета</p>
          </Link>

          <Link
            to="/science/publications"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Публикации</h3>
            <p className="text-gray-600">Научный журнал и периодические издания</p>
          </Link>

          <Link
            to="/science/library"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Научная библиотека</h3>
            <p className="text-gray-600">Доступ к научным ресурсам и базам данных</p>
          </Link>

          <Link
            to="/science/labs"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Лаборатории и центры</h3>
            <p className="text-gray-600">Научно-исследовательские лаборатории</p>
          </Link>

          <Link
            to="/science/professors"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Почетные профессора</h3>
            <p className="text-gray-600">Ведущие ученые и лекторы</p>
          </Link>

          <Link
            to="/science/events"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Мероприятия</h3>
            <p className="text-gray-600">Конференции, мастер-классы, круглые столы</p>
          </Link>

          <Link
            to="/science/student-science"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Студенческая наука</h3>
            <p className="text-gray-600">Научная деятельность студентов</p>
          </Link>

          <Link
            to="/science/projects"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-3xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Научные проекты</h3>
            <p className="text-gray-600">Текущие исследовательские проекты</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScienceMain;
