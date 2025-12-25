import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaUsers, FaGraduationCap, FaComments, FaChalkboardTeacher, FaPaintBrush } from 'react-icons/fa';

const StudentScience = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const councilSections = [
    { 
      path: "/student/community/council", 
      nameKey: "studentScience.sections.council",
      icon: FaUsers,
    },
    { 
      path: "/student/community/science", 
      nameKey: "studentScience.sections.scienceUnion",
      icon: FaGraduationCap,
      active: true 
    },
    { 
      path: "/student/community/debate", 
      nameKey: "studentScience.sections.debateClub",
      icon: FaComments 
    },
    { 
      path: "/student/community/tutor", 
      nameKey: "studentScience.sections.tutorMovement",
      icon: FaChalkboardTeacher 
    },
    { 
      path: "/student/community/clubs", 
      nameKey: "studentScience.sections.creativeClubs",
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
                {t('studentScience.studentGov')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('studentScience.studentScience')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('studentScience.scienceDescription')}
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
                  <h3 className="font-bold text-lg">{t('studentScience.forStudents')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {councilSections.map((section) => {
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#023E8A] pb-4">
                {t('studentScience.scienceTitle')}
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('studentScience.mainDescription')}
                </p>

                <h3 className="text-2xl font-semibold text-[#023E8A] mb-4 mt-8">
                  {t('studentScience.goalsTitle')}
                </h3>
                <ul className="space-y-3 mb-8">
                  {t('studentScience.goalsItems', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#023E8A] mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold text-[#023E8A] mb-4 mt-8">
                  {t('studentScience.activitiesTitle')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">
                      {t('studentScience.researchTitle')}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {t('studentScience.researchDescription')}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">
                      {t('studentScience.conferencesTitle')}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {t('studentScience.conferencesDescription')}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">
                      {t('studentScience.publicationsTitle')}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {t('studentScience.publicationsDescription')}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">
                      {t('studentScience.workshopsTitle')}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {t('studentScience.workshopsDescription')}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 italic text-center mt-8">
                  {t('studentScience.contactInfo')}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentScience;