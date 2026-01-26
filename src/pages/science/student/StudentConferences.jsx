import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StudentConferences = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link to="/science/student-science" className="text-gray-200 hover:text-white mb-2 inline-block">
              ← {t('science.studentScience.conferences.backToStudentScience')}
            </Link>
            <h1 className="text-5xl font-bold mb-4">{t('science.studentScience.conferences.title')}</h1>
            <p className="text-xl text-gray-200">
              {t('science.studentScience.conferences.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-6xl mb-6">📊</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('science.studentScience.conferences.pageTitle')}</h2>
          <p className="text-gray-600 text-lg">
            {t('science.studentScience.conferences.underDevelopment')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentConferences;
