import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCertificate, FaBook, FaDownload, FaFilePdf } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import certificate1 from '../../assets/science/management/k-b-l-k-vestnik-salymbekov-universitet-726x1024.jpg';
import certificate2 from '../../assets/science/management/svidetelstvo-vestnik-salymbekov-universitet-714x1024.jpg';

const Periodicals = () => {
  const { t } = useTranslation();
  const [activeIssue, setActiveIssue] = useState(1);

  const issues = [
    { id: 1, title: t('journal.issues.1'), year: t('journal.year2023') },
    { id: 2, title: t('journal.issues.2'), year: t('journal.year2023') },
    { id: 3, title: t('journal.issues.3'), year: t('journal.year2024') },
    { id: 4, title: t('journal.issues.4'), year: t('journal.year2024') },
    { id: 5, title: t('journal.issues.5'), year: t('journal.year2024') },
    { id: 6, title: t('journal.issues.6'), year: t('journal.year2024') },
    { id: 7, title: t('journal.issues.7'), year: t('journal.year2024') },
    { id: 8, title: t('journal.issues.8'), year: t('journal.year2024') },
    { id: 9, title: t('journal.issues.9'), year: t('journal.year2024') }
  ];

  const journalData = {
    1: {
      title: t('journal.issues.1'),
      articles: [
        {
          section: t('journal.sections.medical'),
          items: [
            t('journal.articles.comparativeAnalysis'),
            t('journal.articles.kyrgyzParasites'),
            t('journal.articles.echinococcosisSituation'),
            t('journal.articles.constitutionalFeatures'),
            t('journal.articles.muscleComponent'),
            t('journal.articles.somatotypologicalCharacteristics'),
            t('journal.articles.vascularTissueRelations'),
            t('journal.articles.placentalIndicators')
          ]
        },
        {
          section: t('journal.sections.biological'),
          items: [
            t('journal.articles.parasitesAndHealth'),
            t('journal.articles.ixodidTicks')
          ]
        },
        {
          section: t('journal.sections.pedagogical'),
          items: [
            t('journal.articles.physicalConditionGames'),
            t('journal.articles.volleyballProblems'),
            t('journal.articles.mentalQualities'),
            t('journal.articles.nationalGamesInfluence'),
            t('journal.articles.communicationSkills'),
            t('journal.articles.poetryTeaching'),
            t('journal.articles.professionalCompetence'),
            t('journal.articles.criticalThinking'),
            t('journal.articles.nationalValues'),
            t('journal.articles.morphologyResearch'),
            t('journal.articles.ethnopedagogy'),
            t('journal.articles.distanceLearning')
          ]
        },
        {
          section: t('journal.sections.reviews'),
          items: [
            t('journal.articles.liverDisease'),
            t('journal.articles.covidLungs')
          ]
        }
      ]
    },
    2: {
      title: t('journal.issues.2'),
      articles: [
        {
          section: t('journal.sections.medical'),
          items: [
            t('journal.articles.epidemiologicalCharacteristics'),
            t('journal.articles.morphofunctionalFeatures'),
            t('journal.articles.modernApproaches'),
            t('journal.articles.physicalDevelopment')
          ]
        },
        {
          section: t('journal.sections.biological'),
          items: [
            t('journal.articles.biodiversityHelminths'),
            t('journal.articles.ecologicalCharacteristics')
          ]
        }
      ]
    },
    3: {
      title: t('journal.issues.3'),
      articles: [
        {
          section: t('journal.sections.medicalEducation'),
          items: [
            t('journal.articles.innovativeTechnologies'),
            t('journal.articles.professionalCompetencies'),
            t('journal.articles.psychologicalAspects')
          ]
        },
        {
          section: t('journal.sections.clinicalResearch'),
          items: [
            t('journal.articles.covidFeatures'),
            t('journal.articles.surgicalResults')
          ]
        }
      ]
    },
    4: {
      title: t('journal.issues.4'),
      articles: [
        {
          section: t('journal.sections.fundamentalResearch'),
          items: [
            t('journal.articles.morphologicalChanges'),
            t('journal.articles.immunologicalAspects'),
            t('journal.articles.geneticMarkers')
          ]
        },
        {
          section: t('journal.sections.publicHealth'),
          items: [
            t('journal.articles.preventionApproaches'),
            t('journal.articles.medicalOrganization')
          ]
        }
      ]
    },
    5: {
      title: t('journal.issues.5'),
      articles: [
        {
          section: t('journal.sections.medical'),
          items: [
            t('journal.articles.thyroidState'),
            t('journal.articles.comparativeCharacteristics'),
            t('journal.articles.morphometricIndicators'),
            t('journal.articles.adrenalStructure'),
            t('journal.articles.hypoxiaInfluence'),
            t('journal.articles.giardiasisAspects')
          ]
        },
        {
          section: t('journal.sections.biological'),
          items: [
            t('journal.articles.protozoaDiversity'),
            t('journal.articles.helminthCharacteristics'),
            t('journal.articles.molecularResearch')
          ]
        },
        {
          section: t('journal.sections.pedagogical'),
          items: [
            t('journal.articles.innovativeMethods'),
            t('journal.articles.professionalFormation'),
            t('journal.articles.traditionsRole'),
            t('journal.articles.digitalizationProcess')
          ]
        },
        {
          section: t('journal.sections.reviews'),
          items: [
            t('journal.articles.modernApproachesParasitic'),
            t('journal.articles.morphologicalAspects'),
            t('journal.articles.educationProspects')
          ]
        }
      ]
    },
    6: {
      title: t('journal.issues.6'),
      articles: [
        {
          section: t('journal.sections.clinicalMedicine'),
          items: [
            t('journal.articles.diagnosisOptimization'),
            t('journal.articles.surgicalTreatment'),
            t('journal.articles.patientRehabilitation')
          ]
        },
        {
          section: t('journal.sections.experimentalResearch'),
          items: [
            t('journal.articles.experimentalModel'),
            t('journal.articles.immuneStatus')
          ]
        }
      ]
    },
    7: {
      title: t('journal.issues.7'),
      articles: [
        {
          section: t('journal.sections.publicHealth'),
          items: [
            t('journal.articles.epidemiologicalMonitoring'),
            t('journal.articles.parasitologicalService'),
            t('journal.articles.preventiveMeasures')
          ]
        },
        {
          section: t('journal.sections.medicalPsychology'),
          items: [
            t('journal.articles.qualityLife'),
            t('journal.articles.medicalAdaptation')
          ]
        }
      ]
    },
    8: {
      title: t('journal.issues.8'),
      articles: [
        {
          section: t('journal.sections.medicalInnovations'),
          items: [
            t('journal.articles.nanotechnologyApplication'),
            t('journal.articles.digitalTechnologies'),
            t('journal.articles.telemedicineConsultation')
          ]
        },
        {
          section: t('journal.sections.internationalCooperation'),
          items: [
            t('journal.articles.cooperationExperience'),
            t('journal.articles.internationalPrograms')
          ]
        }
      ]
    },
    9: {
      title: t('journal.issues.9'),
      articles: [
        {
          section: t('journal.sections.prospectiveResearch'),
          items: [
            t('journal.articles.genomicResearch'),
            t('journal.articles.newDrugs'),
            t('journal.articles.immunoprophylaxis')
          ]
        },
        {
          section: t('journal.sections.resultsProspects'),
          items: [
            t('journal.articles.achievementsProspects'),
            t('journal.articles.scienceDevelopment'),
            t('journal.articles.researchDirections')
          ]
        }
      ]
    }
  };

  const currentIssue = journalData[activeIssue];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('journal.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('journal.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('journal.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Issues Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaBook className="mr-3 text-xl" />
                    <h3 className="font-bold text-lg">{t('journal.issuesTitle')}</h3>
                  </div>
                </div>
              </div>
              <nav className="p-2">
                {issues.map((issue) => (
                  <motion.button
                    key={issue.id}
                    onClick={() => setActiveIssue(issue.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                      activeIssue === issue.id
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold">{issue.title}</div>
                    <div className="text-sm opacity-80">{issue.year}</div>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Certificate Section in Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaCertificate className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('journal.documents')}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={certificate1} 
                      alt={t('journal.certificate1Alt')} 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={certificate2} 
                      alt={t('journal.certificate2Alt')} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3 text-center">
                  {t('journal.documentsDescription')}
                </p>
              </div>
            </motion.div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Journal Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {currentIssue?.title || t('journal.defaultIssueTitle')}
                    </h2>
                    <p className="text-gray-600">{t('journal.description')}</p>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <FaDownload />
                  {t('journal.downloadPdf')}
                </motion.a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-[#023E8A] mb-2">14.00.00</div>
                  <p className="text-gray-700 font-semibold">{t('journal.directions.medical')}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-[#023E8A] mb-2">03.00.00</div>
                  <p className="text-gray-700 font-semibold">{t('journal.directions.biological')}</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-[#023E8A] mb-2">13.00.00</div>
                  <p className="text-gray-700 font-semibold">{t('journal.directions.education')}</p>
                </div>
              </div>

              {/* Articles List */}
              {currentIssue ? (
                <motion.div
                  key={activeIssue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                    {t('journal.articlesList')}
                  </h3>

                  {currentIssue.articles.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-4">
                      <h4 className="font-bold text-lg text-[#023E8A] bg-blue-50 px-4 py-3 rounded-lg">
                        {section.section}
                      </h4>
                      <div className="space-y-3">
                        {section.items.map((article, articleIndex) => (
                          <motion.div
                            key={articleIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: articleIndex * 0.05 }}
                            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#0077B6]/30 hover:shadow-md transition-all group"
                          >
                            <p className="text-gray-900 mb-2">{article}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">
                                {t('journal.pages', { from: articleIndex + 1, to: articleIndex + 3 })}
                              </span>
                              <a href="#" className="text-[#0077B6] hover:text-[#023E8A] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                <FaFilePdf />
                                {t('journal.pdfLabel')}
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-4xl text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    {t('journal.comingSoon', { issue: activeIssue })}
                  </p>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Periodicals;