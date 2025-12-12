import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// ...existing imports...

export default function Professors(props) {
  // ...existing code...

  // Helper: normalize different shapes into an array
  const toArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    // If it's an object with items array (some translations use { items: [...] })
    if (typeof value === 'object' && value.items && Array.isArray(value.items)) {
      return value.items;
    }
    // otherwise turn string/object into single-item array
    return [value];
  };

  // ...existing code...

  // Example: safe rendering of education
  // ...existing code...
  // find the part that uses currentProfessor.education.map; replace like below

  // ...existing code...
  const educationItems = toArray(currentProfessor?.education);

  // ...existing code...
  return (
    <div>
      {/* ...existing code... */}
      <section className="education">
        <h3>{t('professor.educationTitle', 'Education')}</h3>
        {educationItems.length > 0 ? (
          <ul className="education-list">
            {educationItems.map((edu, idx) => {
              if (typeof edu === 'string') {
                return <li key={idx}>{edu}</li>;
              }
              // If edu is an object with degree/institution/focus fields
              return (
                <li key={idx}>
                  {edu.degree ? <strong>{edu.degree}</strong> : null}
                  {edu.institution ? ` — ${edu.institution}` : null}
                  {edu.focus ? <div className="text-sm">{edu.focus}</div> : null}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">
            {t('professors.noEducation', 'Education information is not available')}
          </p>
        )}
      </section>
      {/* ...existing code... */}

      {/* Experience section — normalize similarly */}
      <section className="experience mt-6">
        <h3>{t('professors.experienceTitle', 'Experience')}</h3>
        {toArray(currentProfessor?.experience).length > 0 ? (
          <ul>
            {toArray(currentProfessor?.experience).map((exp, idx) => (
              <li key={idx}>
                {typeof exp === 'string' ? exp : exp.role || exp.period || JSON.stringify(exp)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t('professors.noExperience', 'Experience information is not available')}</p>
        )}
      </section>

      {/* Research section */}
      <section className="research mt-6">
        <h3>{t('professors.researchTitle', 'Research')}</h3>
        {toArray(currentProfessor?.research).length > 0 ? (
          <ul>
            {toArray(currentProfessor?.research).map((r, idx) => (
              <li key={idx}>{typeof r === 'string' ? r : r.title || JSON.stringify(r)}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t('professors.noResearch', 'Research information is not available')}</p>
        )}
      </section>

      {/* ...existing code... */}
    </div>
  );
}