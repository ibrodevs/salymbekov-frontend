import React from 'react';
import { useTranslation } from 'react-i18next';

const TestProfessors = () => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Professor Translation Test</h1>
      <p>Current language: {i18n.language}</p>
      <p>seanPark name: {t('science.seanPark.name')}</p>
      <p>pendharkar name: {t('science.pendharkar.name')}</p>
      <p>Does science.seanPark.name exist: {i18n.exists('science.seanPark.name') ? 'YES' : 'NO'}</p>
      
      <h3>Language switcher test:</h3>
      <button onClick={() => i18n.changeLanguage('kg')}>Switch to KG</button>
      <button onClick={() => i18n.changeLanguage('ru')}>Switch to RU</button>
      <button onClick={() => i18n.changeLanguage('en')}>Switch to EN</button>
      
      <h3>Raw science object test:</h3>
      <pre>{JSON.stringify(t('science', { returnObjects: true }), null, 2)}</pre>
    </div>
  );
};

export default TestProfessors;