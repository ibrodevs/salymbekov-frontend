import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaUsers, FaBook, FaAward, FaGraduationCap, FaUserFriends, FaBrain, FaComments, FaLightbulb, FaChalkboardTeacher, FaPaintBrush } from 'react-icons/fa';

const DebateClub = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const studentSections = [
    { 
      path: "/student/community/council", 
      nameKey: "debateClub.sections.council",
      icon: FaUsers,
    },
    { 
      path: "/student/community/science", 
      nameKey: "debateClub.sections.scienceUnion",
      icon: FaGraduationCap,
    },
    { 
      path: "/student/community/debate", 
      nameKey: "debateClub.sections.debateClub",
      icon: FaComments,
      active: true 
    },
    { 
      path: "/student/community/tutor", 
      nameKey: "debateClub.sections.tutorMovement",
      icon: FaChalkboardTeacher 
    },
    { 
      path: "/student/community/clubs", 
      nameKey: "debateClub.sections.creativeClubs",
      icon: FaPaintBrush 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('debateClub.studentCommunities')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('debateClub.debateClub')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('debateClub.debateClubUniversity')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('debateClub.forStudents')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {studentSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <div key={section.path}>
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{t(section.nameKey)}</span>
                      </button>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 transition-shadow">
              {/* Цель клуба */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaLightbulb className="mr-3 text-[#023E8A]" />
                  {t('debateClub.goalTitle')}
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('debateClub.goalDescription')}
                  </p>
                </div>
              </div>

              {/* Задачи */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaBook className="mr-3" />
                  {t('debateClub.tasksTitle')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t('debateClub.tasks', { returnObjects: true }).map((task, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4">
                          {task.icon === 'FaGraduationCap' && <FaGraduationCap className="text-white text-lg" />}
                          {task.icon === 'FaBrain' && <FaBrain className="text-white text-lg" />}
                          {task.icon === 'FaUserFriends' && <FaUserFriends className="text-white text-lg" />}
                          {task.icon === 'FaComments' && <FaComments className="text-white text-lg" />}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#023E8A] transition-colors">
                          {task.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Преимущества */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaAward className="mr-3" />
                  {t('debateClub.advantagesTitle')}
                </h3>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="space-y-3">
                    {t('debateClub.advantages', { returnObjects: true }).map((advantage, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Призыв к действию */}
              <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('debateClub.joinTitle')}
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  {t('debateClub.joinDescription')}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  <FaComments className="mr-3" />
                  {t('debateClub.joinButton')}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DebateClub;