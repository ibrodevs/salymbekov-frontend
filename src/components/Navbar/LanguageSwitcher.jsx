import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EnIcon from '../../assets/En_icon.png';
import RuIcon from '../../assets/Ru_icon.svg';
import KgIcon from '../../assets/Kg_icon.svg';

const LanguageSwitcher = ({
  position = 'bottom-right',
  showText = true,
  variant = 'default',
  onChange
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', icon: EnIcon },
    { code: 'ru', name: 'Русский', icon: RuIcon },
    { code: 'kg', name: 'Кыргызча', icon: KgIcon }
  ];
  // Normalize current language (map 'ky' -> 'kg', strip region like 'kg-KG')
  const normalized = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  const effectiveLang = normalized === 'ky' ? 'kg' : normalized;
  const currentLanguage = languages.find(lang => lang.code === effectiveLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    // Map any 'ky' selection to 'kg' to match our resources
    const target = languageCode === 'ky' ? 'kg' : languageCode;
    i18n.changeLanguage(target);
    setIsOpen(false);
    if (onChange) {
      onChange(target);
    }
  };

  const positionClasses = {
    // Mobile: open downward (mt-2). Desktop (lg:): open upward (bottom-full, mb-2)
  'bottom-right': 'origin-top-right right-0 mt-2 translate-x-2 lg:origin-bottom-right lg:bottom-full lg:mb-2 lg:translate-x-20',
  'bottom-left': 'origin-top-left left-0 mt-2 lg:origin-bottom-left lg:bottom-full lg:mb-2',
    // If caller explicitly asks top positions, keep them opening upward on mobile and desktop
  'top-right': 'origin-bottom-right right-0 bottom-full mb-2 translate-x-2 lg:translate-x-12',
    'top-left': 'origin-bottom-left left-0 bottom-full mb-2'
  };

  const variantStyles = {
    default: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20',
    solid: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600',
    outline: 'border border-blue-300 text-blue-700 hover:bg-blue-50 bg-white',
    minimal: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center space-x-2 
          px-4 py-2 rounded-xl transition-all duration-300 
          hover:scale-105 focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-opacity-50 font-medium
          ${variantStyles[variant]}
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src={currentLanguage.icon}
          alt={currentLanguage.code}
          className="w-5 h-5 object-contain rounded"
        />
        {showText && (
          <span className="text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`
            absolute z-50 w-48 rounded-2xl shadow-2xl 
            bg-white/95 backdrop-blur-md ring-1 ring-black/5 
            overflow-hidden transform transition-all duration-300 
            opacity-100 scale-100 border border-blue-100
            ${positionClasses[position]}
          `}
        >
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`
                  flex items-center w-full px-4 py-3 text-sm 
                  transition-all duration-200 text-left
                  ${effectiveLang === language.code
                    ? 'bg-blue-50 text-blue-700 font-semibold border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }
                `}
              >
                <img
                  src={language.icon}
                  alt={language.code}
                  className="w-5 h-5 mr-3 object-contain rounded"
                />
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;