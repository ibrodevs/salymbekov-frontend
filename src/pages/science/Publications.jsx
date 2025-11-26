import React from 'react';
import { Link } from 'react-router-dom';

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link to="/science" className="text-blue-200 hover:text-white">
              Наука
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Публикации</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Публикации</h1>
          <p className="text-xl text-blue-100">
            Научный журнал и периодические издания
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Scientific Journal */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="text-blue-600 text-4xl mr-4">📘</div>
              <h2 className="text-2xl font-bold text-gray-900">Научный журнал</h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                «Вестник медицины и образования»
              </h3>
              <p className="text-gray-700">
                Официальный научный журнал Салымбеков Университета, публикующий результаты 
                исследований в области медицины, образования и смежных наук.
              </p>
              <div className="pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Основные направления:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Медико-биологические науки
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Клиническая медицина
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Педагогические науки
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Естественно-гуманитарные науки
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Periodicals */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="text-blue-600 text-4xl mr-4">📰</div>
              <h2 className="text-2xl font-bold text-gray-900">Периодические издания</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Регулярные научные публикации, сборники материалов конференций и 
                тематические издания университета.
              </p>
              <div className="pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Виды изданий:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Сборники научных статей
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Материалы конференций
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Методические пособия
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Тематические выпуски
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Требования к публикациям
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Оформление статей:</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Объем: до 10 страниц (включая таблицы, рисунки и список литературы)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Шрифт: Times New Roman, 12 кегль, через 1,5 интервал
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Поля: верхнее и нижнее – 20 мм, левое – 30 мм, правое – 15 мм
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Формат файла: Microsoft Word (.docx)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Структура статьи:</h3>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>Название статьи</li>
                <li>Сведения об авторах</li>
                <li>Аннотация (200-250 слов)</li>
                <li>Ключевые слова (5-7 слов)</li>
                <li>Введение (актуальность)</li>
                <li>Цель исследования</li>
                <li>Материал и методы</li>
                <li>Результаты и обсуждение</li>
                <li>Заключение/Выводы</li>
                <li>Список литературы</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <p className="font-semibold text-gray-800 mb-2">Контакты для подачи статей:</p>
              <p className="text-gray-700">
                Email: <a href="mailto:shuvalova.88@internet.ru" className="text-blue-600 hover:underline">
                  shuvalova.88@internet.ru
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                Все принятые статьи публикуются бесплатно
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
