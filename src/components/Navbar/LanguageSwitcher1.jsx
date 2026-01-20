import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import EnIcon from '../../assets/En_icon.png';
import RuIcon from '../../assets/Ru_icon.svg';
import KgIcon from '../../assets/Kg_icon.svg';

const LanguageSwitcher = ({
  position = 'auto',
  showText = true,
  variant = 'default',
  onChange,
  compact = false,
  containerWidth = 'w-auto', // Новый пропс
  responsive = false, // Новый пропс
  fullWidth = false // Новый пропс для полной ширины
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [calculatedPosition, setCalculatedPosition] = useState('top-right');
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', icon: EnIcon },
    { code: 'ru', name: 'Русский', icon: RuIcon },
    { code: 'kg', name: 'Кыргызча', icon: KgIcon }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const calculatePosition = useCallback(() => {
    if (!buttonRef.current || position !== 'auto') return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Если кнопка в нижней половине экрана - открываем вверх
    if (buttonRect.bottom > viewportHeight / 2) {
      setCalculatedPosition('top-right');
    } else {
      setCalculatedPosition('bottom-right');
    }
  }, [position]);

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

  useEffect(() => {
    if (position === 'auto') {
      calculatePosition();
      window.addEventListener('resize', calculatePosition);
      return () => window.removeEventListener('resize', calculatePosition);
    }
  }, [position, calculatePosition]);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    if (onChange) {
      onChange(languageCode);
    }
  };

  const positionClasses = {
    'bottom-right': 'origin-top-right right-0 mt-2',
    'bottom-left': 'origin-top-left left-0 mt-2',
    'top-right': 'origin-bottom-right right-0 bottom-full mb-2',
    'top-left': 'origin-bottom-left left-0 bottom-full mb-2',
    'center': 'origin-top left-1/2 transform -translate-x-1/2 mt-2' // Добавлено для центрирования
  };

  const variantStyles = {
    default: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20',
    solid: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600',
    outline: 'border border-blue-300 text-blue-700 hover:bg-blue-50 bg-white',
    minimal: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
  };

  const actualPosition = position === 'auto' ? calculatedPosition : position;

  return (
    <div
      className={`relative ${containerWidth} ${responsive ? 'flex justify-center' : ''}`}
      ref={dropdownRef}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center space-x-2 
          ${compact ? 'px-3 py-1.5' : 'px-4 py-2'}
          ${fullWidth ? 'w-full' : ''}
          ${responsive ? 'w-full justify-center' : ''}
          rounded-xl transition-all duration-300 
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
          className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} object-contain rounded`}
        />
        {showText && !compact && (
          <span className="text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
        )}
        <svg
          className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`
            absolute z-50 ${fullWidth || responsive ? 'w-full min-w-full' : 'w-48'}
            rounded-2xl shadow-2xl 
            bg-white/95 backdrop-blur-md ring-1 ring-black/5 
            overflow-hidden transform transition-all duration-300 
            opacity-100 scale-100 border border-blue-100
            ${positionClasses[actualPosition]}
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
                  ${responsive ? 'justify-center' : ''}
                  ${i18n.language === language.code
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
                <span className={responsive ? 'text-center' : ''}>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;