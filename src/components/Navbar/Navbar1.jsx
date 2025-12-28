import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Logo1 from '../../assets/Logo.png';
import Logo2 from '../../assets/Logo_white.png';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [navbarHeight, setNavbarHeight] = useState('h-20');
  const navbarRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 20;

      if (scrollY > 50) {
        setNavbarHeight('h-16');
      } else {
        setNavbarHeight('h-20');
      }

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedItems({});
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = useCallback((menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const toggleItemExpansion = (menuKey, itemKey) => {
    setExpandedItems(prev => {
      const key = `${menuKey}-${itemKey}`;
      const newState = { ...prev };

      if (newState[key]) {
        delete newState[key];
      } else {
        Object.keys(newState).forEach(k => {
          if (k.startsWith(menuKey + '-')) {
            delete newState[k];
          }
        });
        newState[key] = true;
      }

      return newState;
    });
  };

  const isItemExpanded = (menuKey, itemKey) => {
    return expandedItems[`${menuKey}-${itemKey}`];
  };

  const menuData = {
    university: {
      items: [
        { key: 'founderAppeal', link: '/university/Appeal' },
        { key: 'history', link: '/university/history' },
        { key: 'mission', link: '/university/mission' },
        { key: 'videos', link: '/university/videos' },
        { key: 'vacancies', link: '/university/vacancies' },
        { key: 'contacts', link: '/university/contacts' },
        { key: 'brandbook', link: 'https://salymbekov.com/wp-content/uploads/2023/10/brjendbuk_organized_new.pdf' },
        {
          key: 'structure',
          link: '/university/structure',
          subItems: [
            { key: 'universityMain', link: '/university/structure/University-main' },
            { key: 'internationalFaculty', link: '/university/structure/International-Faculty' },
            { key: 'itCollege', link: '/university/structure/it-college' }
          ]
        },
        {
          key: 'management',
          link: '/university/management',
          subItems: [
            { key: 'founder', link: '/university/management/founder' },
            { key: 'president', link: '/university/management/president' },
            { key: 'rectorate', link: '/university/management/rectorate' }
          ]
        },
        {
          key: 'departments',
          link: '/university/departments',
          subItems: [
            { key: 'financialDept', link: '/university/departments/financial' },
            { key: 'scienceDept', link: '/university/departments/science' },
            { key: 'managementDept', link: '/university/departments/management' },
            { key: 'hrDept', link: '/university/departments/hr' },
            { key: 'qualityDept', link: '/university/departments/quality' },
            { key: 'researchDept', link: '/university/departments' },
            { key: 'internationalDept', link: '/university/departments/international' },
            { key: 'studentDept', link: '/university/departments/student' },
            { key: 'careerCenter', link: '/university/departments/career' }
          ]
        },
        {
          key: 'accreditation',
          link: '/university/accreditation',
          subItems: [
            { key: 'national', link: '/university/accreditation/national' },
            { key: 'institutional', link: '/university/accreditation/institutional' },
            { key: 'programAccreditation', link: '/university/accreditation/program' }
          ]
        },
        {
          key: 'foundingDocs',
          link: '/university/founding-docs',
          subItems: [
            { key: 'charter', link: '/university/founding-docs/charter' },
            { key: 'licenses', link: '/university/founding-docs/licenses' },
            { key: 'acts', link: '/university/founding-docs/acts' }
          ]
        },
        {
          key: 'strategicDocs',
          link: '/university/StrategicDocs',
          subItems: [
            { key: 'vision', link: '/university/strategic-docs/strategic-vision' },
            { key: 'strategicPlan', link: '/university/strategic-docs/strategic-develop-plans' },
            { key: 'comprehensivePlans', link: 'https://salymbekov.com/wp-content/uploads/2022/05/5.9.4.-kompleksnyj-plan-meroprijatij-za-2021-2022-gg.pdf' },
            { key: 'accountingPolicy', link: '/university/strategic-docs/accounting-policy' },
            { key: 'hrPolicy', link: '/university/strategic-docs/hr-policy' }
          ]
        },
        {
          key: 'councils',
          link: '/university/Councils',
          subItems: [
            { key: 'devCouncil', link: '/university/councils/development-council' },
            { key: 'acadCouncil', link: '/university/councils/academic-council' },
            { key: 'eduCouncil', link: '/university/councils/educational-council' },
            { key: 'techCouncil', link: '/university/councils/technical-council' },
            { key: 'scienCouncil', link: '/university/councils/scientific-council' },
            { key: 'editBoard', link: '/university/councils/editorial-board' },
            { key: 'admisCommittee', link: '/university/councils/admissions-committee' },
            { key: 'supportCommission', link: '/university/councils/commission-support' },
            { key: 'bioethicsCommittee', link: '/university/councils/bioethics-committee' },
            { key: 'youngScientists', link: '/university/councils/council-scients' },
            { key: 'employersCouncil', link: '/university/councils/employers-council' },
            { key: 'parentsCouncil', link: '/university/councils/parents-council' },
            { key: 'studentCouncil', link: '/university/councils/student-councils' }
          ]
        },
        {
          key: 'normativeDocs',
          link: '/university/normative-docs',
          subItems: [
            { key: 'krActs', link: '/university/normative-docs/kr-acts' },
            { key: 'internalActs', link: '/university/normative-docs/internal-acts' }
          ]
        },
        {
          key: 'qualityManagement',
          link: '/university/quality-management-system',
          subItems: [
            { key: 'qualityPolicy', link: '/university/quality-management-system/quality-policy' },
            { key: 'qualityMonitoring', link: '/university/quality-management-system/quality-monitoring' }
          ]
        },
        {
          key: 'cooperation',
          link: '/university/cooperation',
          subItems: [
            { key: 'universitiesCoop', link: '/university/cooperation/universities' },
            { key: 'clinicsCoop', link: '/university/cooperation/clinics' }
          ]
        }
      ]
    },
    education: {
      items: [
        {
          key: 'ait',
          link: '/education/ait',
          subItems: [
            { key: 'aboutait', link: '/education/ait/about' },
            { key: 'aitLeadership', link: '/education/ait/leadership' },
            { key: 'aitDisciplines', link: '/education/ait/disciplines' },
            { key: 'aitTeachers', link: '/education/ait/teachers' },
            { key: 'contacts', link: '/education/ait/contacts' }
          ]
        },
        {
          key: 'mfm',
          link: '/education/mfm',
          subItems: [
            { key: 'aboutmfm', link: '/education/mfm/about' },
            { key: 'deanOffice', link: '/education/mfm/dekanat/dean' },
            { key: 'mfmCurriculum', link: '/education/mfm/dekanat/curriculum' },
            { key: 'departments', link: '/education/mfm/dekanat/departments' },
            { key: 'medicine5Years', link: '/education/mfm/programs/five-years' },
            { key: 'medicine6Years', link: '/education/mfm/programs/six-years' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'itCollege',
          link: '/education/itCollege',
          subItems: [
            { key: 'aboutIt', link: '/university/structure/it-college' },
            { key: 'director', link: '/education/it-college/director' },
            { key: 'computerScience', link: '/education/it-college/specialties/diplom-computational-sciences' },
            { key: 'multimediaApps', link: '/education/it-college/specialties/diplom-multimedia-applications' },
            { key: 'mobileComputing', link: '/education/it-college/specialties/diplom-mobile-computing' },
            { key: 'lincolnUniversity', link: 'https://www.lincoln.edu.my/' },
            { key: 'generalDisciplines', link: '/education/it-college/departments/general' },
            { key: 'itDepartment', link: '/education/it-college/departments/information' },
            { key: 'pedagogicalCouncil', link: '/education/it-college/pedagogical-council' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'businessSchool',
          link: '/education/business-school',
          subItems: [
            { key: 'aboutBusinessSchool', link: '/education/business-school/about' },
            { key: 'director', link: '/education/business-school/director' },
            { key: 'smartik', link: '/education/business-school/programs/smartik' },
            { key: 'futureLeaders', link: '/education/business-school/programs/future-leaders' },
            { key: 'youngLeaders', link: '/education/business-school/programs/young-leaders' },
            { key: 'olderLeaders', link: '/education/business-school/programs/older-leaders' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'postgraduatetitle',
          link: '/education/postgrad',
          subItems: [
            { key: 'internship', link: '/education/postgrad/internship' },
            { key: 'residency', link: '/education/postgrad/residency' },
            { key: 'postgraduate', link: '/education/postgrad/postgraduate' },
            { key: 'phd', link: '/education/postgrad/phd' }
          ]
        },
        {
          key: 'narynCenter',
          link: '/education/center',
          subItems: [
            { key: 'aboutCenter', link: '/education/center/about' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        }
      ]
    },
    clinical: {
      items: [
        { key: 'lazmed', link: '/clinical/lazmed' },
        { key: 'dordoiOphthalmic', link: '/clinical/dordoi-ophthalmic' },
        { key: 'docClinic', link: '/clinical/doc-clinic' },
        { key: 'docHospital', link: '/clinical/doc-hospital' },
        { key: 'agreements', link: '/clinical/agreements' }
      ]
    },
    science: {
      items: [
        {
          key: 'management',
          link: '/science/management',
          subItems: [
            { key: 'scientificCouncil', link: '/science/management/scientific-technical-council' },
            { key: 'bioethics', link: '/science/management/bioethics' },
            { key: 'youngScientists', link: '/science/management/young-scientists' },
            { key: 'researchDepartment', link: '/science/management/department' }
          ]
        },
        { key: 'journal', link: '/science/publications/journal' },
        { key: 'periodicals', link: '/science/publications/periodicals' },
        { key: 'library', link: '/science/library' },
        { key: 'labs', link: '/science/labs' },
        { key: 'honoredProfessors', link: '/science/professors' },
        {
          key: 'events',
          link: '/science/events',
          subItems: [
            { key: 'conferences', link: '/science/events/conferences' },
            { key: 'masterClasses', link: '/science/events/master-classes' },
            { key: 'roundTables', link: '/science/events/round-tables' }
          ]
        },
        {
          key: 'studentScience',
          link: '/science/student-science',
          subItems: [
            { key: 'studentSociety', link: '/science/student-society' },
            { key: 'scienceClubs', link: '/science/student-science/clubs' },
            { key: 'studentConferences', link: '/science/student-science/conferences' }
          ]
        },
        {
          key: 'researchProjects',
          link: '/science/projects',
          subItems: [
            { key: 'urology', link: '/science/projects/urology' },
            { key: 'gynecology', link: '/science/projects/gynecology' },
            { key: 'ophthalmology', link: '/science/projects/ophthalmology' },
            { key: 'oncology', link: '/science/projects/oncology' }
          ]
        }
      ]
    },
    student: {
      items: [
        {
          key: 'communities',
          link: '/student/community',
          subItems: [
            { key: 'council', link: '/student/community/council' },
            { key: 'scienceSociety', link: '/student/community/science' },
            { key: 'debateClub', link: '/student/community/debate' },
            { key: 'tutorMovement', link: '/student/community/tutor' },
            { key: 'creativeClubs', link: '/student/community/clubs' }
          ]
        },
        {
          key: 'schedules',
          link: '/student/schedule',
          subItems: [
            { key: 'studySchedule', link: '/student/schedule/study' },
            { key: 'modulesSchedule', link: '/student/schedule/modules' },
            { key: 'practiceSchedule', link: '/student/schedule/practice' },
            { key: 'mfmSchedule', link: '/student/schedule/mfm' },
            { key: 'collegeSchedule', link: '/student/schedule/college' }
          ]
        },
        {
          key: 'resources',
          link: '/student/resources',
          subItems: [
            { key: 'instructions', link: '/student/resources/instructions' },
            { key: 'infoSystem', link: '/student/resources/infosystem' },
            { key: 'eLibrary', link: '/student/resources/elib' },
            { key: 'eduResources', link: '/student/resources/edu-resources' }
          ]
        },
        {
          key: 'opportunities',
          link: '/student/opportunities',
          subItems: [
            { key: 'medicalCenter', link: '/student/opportunities/medical' },
            { key: 'dormitory', link: '/student/opportunities/dorm' },
            { key: 'socialSupport', link: '/student/opportunities/social' },
            { key: 'electiveCourses', link: '/student/opportunities/courses' },
            { key: 'academicMobility', link: '/student/opportunities/mobility' },
            { key: 'psychologicalSupport', link: '/student/opportunities/psychology' },
            { key: 'serviceCenter', link: '/student/opportunities/service-center' },
            { key: 'adaptationPrograms', link: '/student/opportunities/adaptation' }
          ]
        }
      ]
    },
    applicant: {
      items: [
        { key: 'directions', link: '/applicants/directions' },
        { key: 'tuitionCost', link: '/applicants/cost' },
        {
          key: 'admissionProcedure',
          link: '/applicants/admission',
          subItems: [
            { key: 'requiredDocuments', link: '/applicant/documents' },
            { key: 'admissionRules', link: '/applicant/rules' },
            { key: 'admissionSchedule', link: '/applicant/schedule' }
          ]
        },
        {
          key: 'rulesAndPlan',
          link: '/applicants',
          subItems: [
            { key: 'ortAdmission', link: '/applicants/ort' },
            { key: 'careerGuidance', link: '/applicants/career-guidance' }
          ]
        },
        {
          key: 'transferProcedure',
          link: '/applicants/transfer',
          subItems: [
            { key: 'transferDocuments', link: '/applicants/transfer/documents' },
            { key: 'transferRules', link: '/applicants/transfer/rules' },
            { key: 'transferSchedule', link: '/applicants/transfer/schedule' }
          ]
        },
        { key: 'commission', link: '/applicants/commission' },
        { key: 'scholarships', link: '/applicants/scholarships' },
        { key: 'officialDealers', link: '/applicants/dealers' },
        { key: 'adaptationProgram', link: '/applicants/adaptation' },
        { key: 'infrastructure', link: '/applicants/infrastructure' }
      ]
    }
  };

  const renderFullscreenDropdown = (menuKey, items) => {
    const itemsWithSubItems = items.filter(item => item.subItems && item.subItems.length > 0);
    const itemsWithoutSubItems = items.filter(item => !item.subItems || item.subItems.length === 0);

    return (
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-out border-b ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-gray-100'
          : 'bg-blue-900/95 backdrop-blur-lg border-blue-700/30'
          } ${activeDropdown === menuKey
            ? 'opacity-100 visible max-h-[70vh] overflow-y-auto shadow-xl'
            : 'opacity-0 invisible max-h-0 overflow-hidden'
          }`}
        style={{ top: navbarHeight === 'h-20' ? '5rem' : '4rem' }}
        onMouseEnter={() => handleDropdownEnter(menuKey)}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {itemsWithSubItems.length > 0 && (
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {itemsWithSubItems.map((item) => (
                    <div key={item.key} className="group">
                      <div className={`border rounded-xl transition-all duration-200 overflow-hidden hover:shadow-lg ${isScrolled
                        ? 'border-gray-100 hover:border-blue-300 bg-white/50'
                        : 'border-blue-800/30 hover:border-blue-400 bg-blue-800/20'
                        }`}>
                        <button
                          onClick={() => toggleItemExpansion(menuKey, item.key)}
                          className={`w-full p-3 md:p-4 text-left flex items-center justify-between transition-colors duration-200 group-hover:shadow-inner rounded-xl ${isScrolled
                            ? 'hover:bg-blue-50/80'
                            : 'hover:bg-blue-800/30'
                            }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center mr-3 transition-colors ${isScrolled
                              ? 'bg-blue-100 group-hover:bg-blue-200'
                              : 'bg-blue-700/30 group-hover:bg-blue-600/50'
                              }`}>
                              <svg className={`w-3 h-3 md:w-4 md:h-4 transition-colors ${isScrolled ? 'text-blue-600' : 'text-blue-300'
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <div>
                              <h3 className={`text-sm font-semibold transition-colors ${isScrolled
                                ? 'text-blue-800 group-hover:text-blue-700'
                                : 'text-white group-hover:text-blue-100'
                                }`}>
                                {t(`${menuKey}SUB.${item.key}`)}
                              </h3>
                            </div>
                          </div>
                          <svg
                            className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ease-out ${isItemExpanded(menuKey, item.key) ? 'rotate-180' : ''
                              } ${isScrolled ? 'text-blue-500' : 'text-blue-300'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-out ${isItemExpanded(menuKey, item.key)
                            ? 'max-h-64 opacity-100'
                            : 'max-h-0 opacity-0'
                            }`}
                        >
                          <div className={`px-3 md:px-4 pb-3 md:pb-4 pt-2 ml-10 md:ml-11 border-t ${isScrolled ? 'border-gray-100' : 'border-blue-700/30'
                            }`}>
                            <div className={`max-h-48 overflow-y-auto pr-2 space-y-1.5 navbar-scrollbar ${isScrolled ? 'navbar-scrollbar-light' : 'navbar-scrollbar-dark'
                              }`}>
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.key}
                                  to={subItem.link}
                                  className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 text-sm group/sub hover:no-underline ${isScrolled
                                    ? 'text-gray-600 hover:text-blue-700 hover:bg-blue-100/80'
                                    : 'text-blue-200 hover:text-white hover:bg-blue-700/30'
                                    }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-all duration-200 group-hover/sub:scale-125 flex-shrink-0 ${isScrolled
                                    ? 'bg-blue-400 group-hover/sub:bg-blue-600'
                                    : 'bg-blue-400 group-hover/sub:bg-blue-300'
                                    }`} />
                                  <span className="text-sm font-medium whitespace-normal break-words min-w-0">
                                    {t(`${menuKey}SUB.${subItem.key}`)}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {itemsWithoutSubItems.length > 0 && (
              <div className="md:w-64 flex-shrink-0">
                <div className={`rounded-xl border p-4 ${isScrolled
                  ? 'bg-blue-50/80 border-blue-200'
                  : 'bg-blue-800/30 border-blue-700/30'
                  }`}>
                  <h3 className={`text-base font-semibold mb-3 ${isScrolled ? 'text-blue-900' : 'text-white'
                    }`}>
                    {t('navbar.quickLinks', 'Quick Links')}
                  </h3>
                  <div className="space-y-1.5">
                    {itemsWithoutSubItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.link}
                        className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 group/link hover:no-underline ${isScrolled
                          ? 'text-gray-700 hover:text-blue-700 hover:bg-white'
                          : 'text-blue-200 hover:text-white hover:bg-blue-700/30'
                          }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <svg className={`w-4 h-4 mr-2 transition-all duration-200 group-hover/link:translate-x-1 flex-shrink-0 ${isScrolled ? 'text-blue-500' : 'text-blue-300'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm font-medium whitespace-normal break-words min-w-0">
                          {t(`${menuKey}SUB.${item.key}`)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderMobileMenu = () => (
    <div className={`lg:hidden fixed inset-0 top-0 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
      <div
        className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`absolute top-0 left-0 right-0 transition-all duration-300 ease-out overflow-y-auto ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg border-t border-gray-100'
        : 'bg-blue-900/95 backdrop-blur-lg border-t border-blue-700/30'
        } ${isMobileMenuOpen
          ? 'max-h-[calc(100vh-4rem)] opacity-100 shadow-xl'
          : 'max-h-0 opacity-0'
        }`}>
        <div className="container mx-auto px-4 py-4">
          {Object.entries(menuData).map(([menuKey, { items }]) => (
            <div key={menuKey} className="mb-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === menuKey ? null : menuKey)}
                className={`flex items-center justify-between w-full py-3 px-4 text-sm font-semibold transition-all duration-200 rounded-lg ${isScrolled
                  ? 'text-blue-900 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80'
                  : 'text-white hover:text-blue-100 bg-blue-800/30 hover:bg-blue-700/50'
                  }`}
              >
                <span>{t(`navbar.${menuKey}`)}</span>
                <svg
                  className={`w-4 h-4 transition-all duration-300 ease-out ${isScrolled ? 'text-blue-600' : 'text-blue-300'
                    } ${activeDropdown === menuKey ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-out ${activeDropdown === menuKey ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                <div className="space-y-1.5 py-2">
                  {items.map((item) => (
                    <div key={item.key} className={`rounded-lg overflow-hidden ${isScrolled
                      ? 'bg-white/50 border border-gray-100'
                      : 'bg-blue-800/20 border border-blue-700/20'
                      }`}>
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => toggleItemExpansion(menuKey, item.key)}
                            className={`w-full py-3 px-4 text-left flex items-center justify-between transition-all duration-200 ${isScrolled
                              ? 'hover:bg-blue-50/80 text-gray-800'
                              : 'hover:bg-blue-700/30 text-blue-200'
                              }`}
                          >
                            <span className="font-medium text-sm whitespace-normal break-words">
                              {t(`${menuKey}SU.${item.key}`)}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-all duration-300 ease-out flex-shrink-0 ${isItemExpanded(menuKey, item.key) ? 'rotate-180' : ''
                                } ${isScrolled ? 'text-blue-500' : 'text-blue-300'}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ease-out ${isItemExpanded(menuKey, item.key)
                              ? 'max-h-64 opacity-100'
                              : 'max-h-0 opacity-0'
                              }`}
                          >
                            <div className={`px-4 pb-3 space-y-2 border-t ${isScrolled ? 'border-gray-100' : 'border-blue-700/30'
                              }`}>
                              <Link
                                to={item.link}
                                className={`flex items-center py-2 transition-all duration-200 text-sm font-medium hover:no-underline ${isScrolled
                                  ? 'text-blue-700 hover:text-blue-800'
                                  : 'text-blue-300 hover:text-white'
                                  }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <svg className={`w-4 h-4 mr-2 flex-shrink-0 ${isScrolled ? 'text-blue-600' : 'text-blue-400'
                                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <span className="whitespace-normal break-words">
                                  {t('navbar.viewMainPage', 'View main page')}
                                </span>
                              </Link>

                              <div className={`max-h-40 overflow-y-auto pr-2 space-y-2 navbar-scrollbar ${isScrolled ? 'navbar-scrollbar-light' : 'navbar-scrollbar-dark'
                                }`}>
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.key}
                                    to={subItem.link}
                                    className={`flex items-start py-2 text-sm transition-all duration-200 rounded px-3 group/sub hover:no-underline ${isScrolled
                                      ? 'text-gray-600 hover:text-blue-700 hover:bg-blue-50/80'
                                      : 'text-blue-200 hover:text-white hover:bg-blue-700/30'
                                      }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <div className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-all duration-200 group-hover/sub:scale-125 flex-shrink-0 mt-1.5 ${isScrolled
                                      ? 'bg-blue-400 group-hover/sub:bg-blue-600'
                                      : 'bg-blue-400 group-hover/sub:bg-blue-300'
                                      }`}></div>
                                    <span className="whitespace-normal break-words min-w-0">
                                      {t(`${menuKey}SUB.${subItem.key}`)}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.link}
                          className={`flex items-center justify-between py-3 px-4 transition-all duration-200 font-medium text-sm hover:no-underline ${isScrolled
                            ? 'text-gray-800 hover:text-blue-700 hover:bg-blue-50/80'
                            : 'text-blue-200 hover:text-white hover:bg-blue-700/30'
                            }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="whitespace-normal break-words min-w-0">{t(`${menuKey}SU.${item.key}`)}</span>
                          <svg className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isScrolled ? 'text-blue-400' : 'text-blue-300'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-4 border-t border-gray-200">
            <LanguageSwitcher variant="solid" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-md'
          : 'bg-gradient-to-r from-blue-900/95 to-blue-800/95 backdrop-blur-lg border-b border-blue-700/30'
          } ${navbarHeight}`}
        style={{ transition: 'height 300ms ease-out, background-color 300ms ease-out' }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div className="h-12 md:h-14 px-3 md:px-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-active:scale-95">
                  <img
                    src={isScrolled ? Logo1 : Logo2}
                    alt="Logo"
                    className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {Object.entries(menuData).map(([menuKey, { items }]) => (
                <div
                  key={menuKey}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(menuKey)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-200 relative overflow-hidden group ${isScrolled
                      ? 'text-gray-700 hover:text-blue-700'
                      : 'text-white hover:text-blue-100'
                      } ${activeDropdown === menuKey ? (isScrolled ? 'text-blue-700' : 'text-white') : ''}`}
                  >
                    <span className="relative z-10 whitespace-nowrap">{t(`navbarSUB.${menuKey}`)}</span>
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 transform transition-transform duration-300 ease-out ${activeDropdown === menuKey ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      } ${isScrolled ? 'bg-blue-600' : 'bg-white'}`} />
                  </button>
                  {renderFullscreenDropdown(menuKey, items)}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="hidden lg:block ml-1">
                <LanguageSwitcher variant={isScrolled ? "outline" : "default"} />
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 active:scale-95 ${isScrolled
                  ? 'text-gray-700 hover:bg-gray-100/80'
                  : 'text-white hover:bg-blue-700/30'
                  }`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ease-out transform ${isScrolled ? 'bg-gray-700' : 'bg-white'
                    } ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1.5'}`} />
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ease-out ${isScrolled ? 'bg-gray-700' : 'bg-white'
                    } ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100 top-3'}`} />
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ease-out transform ${isScrolled ? 'bg-gray-700' : 'bg-white'
                    } ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-4.5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {Object.entries(menuData).map(([menuKey, { items }]) => (
          <div key={menuKey}>
            {renderFullscreenDropdown(menuKey, items)}
          </div>
        ))}
      </nav>

      {renderMobileMenu()}

      <div className={navbarHeight} />

      <style jsx global>{`
        .navbar-scrollbar {
          scrollbar-width: thin;
        }
        
        .navbar-scrollbar-light {
          scrollbar-color: #cbd5e1 #f1f5f9;
        }
        
        .navbar-scrollbar-light::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .navbar-scrollbar-light::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.5);
          border-radius: 10px;
          margin: 4px;
        }
        
        .navbar-scrollbar-light::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-radius: 10px;
          border: 2px solid rgba(241, 245, 249, 0.5);
        }
        
        .navbar-scrollbar-light::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb, #1e40af);
        }
        
        .navbar-scrollbar-dark {
          scrollbar-color: rgba(96, 165, 250, 0.7) rgba(30, 58, 138, 0.3);
        }
        
        .navbar-scrollbar-dark::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .navbar-scrollbar-dark::-webkit-scrollbar-track {
          background: rgba(30, 58, 138, 0.3);
          border-radius: 10px;
          margin: 4px;
        }
        
        .navbar-scrollbar-dark::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.9), rgba(59, 130, 246, 0.8));
          border-radius: 10px;
          border: 2px solid rgba(30, 58, 138, 0.3);
        }
        
        .navbar-scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 1), rgba(37, 99, 235, 0.9));
        }
        
        .navbar-scrollbar::-webkit-scrollbar {
          transition: all 0.3s ease;
        }
        
        .navbar-scrollbar::-webkit-scrollbar-thumb {
          transition: all 0.3s ease;
        }
        
        .navbar-scrollbar:not(:hover)::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.4);
        }
        
        .navbar-scrollbar-light:not(:hover)::-webkit-scrollbar-thumb {
          background: #cbd5e1;
        }
        
        .navbar-scrollbar-dark:not(:hover)::-webkit-scrollbar-thumb {
          background: rgba(96, 165, 250, 0.5);
        }
      `}</style>
    </>
  );
};

export default Navbar;