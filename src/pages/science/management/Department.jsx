import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUniversity, FaUserGraduate, FaBullseye, FaTasks, FaHandshake, FaGlobe, FaGraduationCap, FaExchangeAlt, FaUserFriends, FaChartLine, FaFileContract, FaBuilding, FaMoneyBillWave, FaProjectDiagram, FaUsers, FaInfoCircle, FaDatabase, FaChalkboardTeacher, FaMicroscope, FaUserTie, FaArrowLeft } from 'react-icons/fa';
import DirectorPhoto from '../../../assets/science/management/rysbek-aldagandaevich-250x300.jpg';

const ScienceDepartment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Цели департамента
  const goals = [
    {
      icon: <FaHandshake className="text-white text-xl" />,
      titleKey: "scienceDepartment.goals.cooperation",
      descriptionKey: "scienceDepartment.goals.cooperationDesc"
    },
    {
      icon: <FaGlobe className="text-white text-xl" />,
      titleKey: "scienceDepartment.goals.integration",
      descriptionKey: "scienceDepartment.goals.integrationDesc"
    }
  ];

  // Программы интеграции
  const integrationPrograms = [
    { nameKey: "scienceDepartment.integrationPrograms.academicExchange", icon: <FaExchangeAlt /> },
    { nameKey: "scienceDepartment.integrationPrograms.staffExchange", icon: <FaUserFriends /> },
    { nameKey: "scienceDepartment.integrationPrograms.training", icon: <FaGraduationCap /> },
    { nameKey: "scienceDepartment.integrationPrograms.jointPrograms", icon: <FaFileContract /> },
    { nameKey: "scienceDepartment.integrationPrograms.researchGrants", icon: <FaMicroscope /> },
    { nameKey: "scienceDepartment.integrationPrograms.foreignStudents", icon: <FaUserTie /> }
  ];

  // Задачи департамента
  const tasks = [
    { nameKey: "scienceDepartment.tasks.organization", icon: <FaBuilding /> },
    { nameKey: "scienceDepartment.tasks.policy", icon: <FaChartLine /> },
    { nameKey: "scienceDepartment.tasks.agreements", icon: <FaFileContract /> },
    { nameKey: "scienceDepartment.tasks.branches", icon: <FaBuilding /> },
    { nameKey: "scienceDepartment.tasks.investments", icon: <FaMoneyBillWave /> },
    { nameKey: "scienceDepartment.tasks.projects", icon: <FaProjectDiagram /> },
    { nameKey: "scienceDepartment.tasks.associations", icon: <FaUsers /> },
    { nameKey: "scienceDepartment.tasks.promotion", icon: <FaInfoCircle /> },
    { nameKey: "scienceDepartment.tasks.connections", icon: <FaGlobe /> },
    { nameKey: "scienceDepartment.tasks.analytics", icon: <FaChartLine /> },
    { nameKey: "scienceDepartment.tasks.documentation", icon: <FaDatabase /> },
    { nameKey: "scienceDepartment.tasks.staffInvolvement", icon: <FaChalkboardTeacher /> },
    { nameKey: "scienceDepartment.tasks.coordination", icon: <FaUsers /> },
    { nameKey: "scienceDepartment.tasks.consultation", icon: <FaHandshake /> },
    { nameKey: "scienceDepartment.tasks.grants", icon: <FaMoneyBillWave /> },
    { nameKey: "scienceDepartment.tasks.foreignTeachers", icon: <FaUserFriends /> },
    { nameKey: "scienceDepartment.tasks.studentTraining", icon: <FaGraduationCap /> },
    { nameKey: "scienceDepartment.tasks.foreignTraining", icon: <FaUserTie /> },
    { nameKey: "scienceDepartment.tasks.marketing", icon: <FaChartLine /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Кнопка назад */}
        <div className="mb-6">
          <button 
            onClick={() => navigate('/science')}
            className="inline-flex items-center text-[#023E8A] hover:text-[#0077B6] transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('scienceDepartment.backToScience')}
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6">
            <FaUniversity className="text-xl" />
            <span className="font-semibold">{t('scienceDepartment.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('scienceDepartment.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('scienceDepartment.subtitle')}
          </p>
        </div>

        {/* Основная информация о департаменте */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('scienceDepartment.about.title')}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t('scienceDepartment.about.description')}</p>
            </div>
          </div>

          {/* Руководитель С ФОТО */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaUserGraduate className="mr-3 text-[#023E8A]" />
              {t('scienceDepartment.director.title')}
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Фото руководителя */}
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                  {/* Если фото есть - используем его, если нет - заглушка */}
                  {DirectorPhoto ? (
                    <img 
                      src={DirectorPhoto} 
                      alt={t('scienceDepartment.director.name')}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#023E8A] to-[#0077B6] flex items-center justify-center"><FaUserGraduate className="text-white text-5xl" /></div>';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#023E8A] to-[#0077B6] flex items-center justify-center">
                      <FaUserGraduate className="text-white text-5xl" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('scienceDepartment.director.name')}
                  </h3>
                  <p className="text-lg text-[#0077B6] font-semibold mb-2">
                    {t('scienceDepartment.director.position')}
                  </p>
                  <div className="text-gray-700 space-y-2">
                    <p>{t('scienceDepartment.director.education')}</p>
                    <p>{t('scienceDepartment.director.career')}</p>
                    <p>{t('scienceDepartment.director.achievements')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Цели */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaBullseye className="mr-3 text-[#023E8A]" />
              {t('scienceDepartment.goals.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4">
                      {goal.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {t(goal.titleKey)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(goal.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Программы интеграции */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#023E8A] mb-4">
              {t('scienceDepartment.integration.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrationPrograms.map((program, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 text-white">
                    {program.icon}
                  </div>
                  <span className="text-gray-700">{t(program.nameKey)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Задачи */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaTasks className="mr-3 text-[#023E8A]" />
              {t('scienceDepartment.tasks.title')}
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-700 mr-2">{t(task.nameKey)}</span>
                      <div className="text-[#023E8A]">
                        {task.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('scienceDepartment.contact.title')}
              </h3>
              <p className="text-gray-600 mb-2">
                {t('scienceDepartment.contact.description')}
              </p>
              <p className="text-gray-600">
                <strong>{t('scienceDepartment.contact.email')}:</strong> science@salymbekov-university.edu.kg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceDepartment;