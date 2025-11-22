import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contacts = () => {
  const { t } = useTranslation();

  const contactInfo = {
    phone: '+996 (312) 54-19-41',
    email: 'info@salymbekov.com',
    address: 'г. Бишкек, ул. Ахунбаева 119а',
    workingHours: 'Пн - Пт: 9:00 - 18:00',
    legalAddress: 'г. Бишкек, ул. Ибраимова, 115А',
    actualAddress: 'г. Бишкек, ул. Малдыбаева 24б',
    inn: '01206201910192',
    bank: 'Филиал ОАО «Оптима Банк» в г.Бишкек №1',
    bik: '109008',
    account: '1090808380720219'
  };

  // Правильный embed URL для карты (замените на полученный из Google Maps)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5850.721815517088!2d74.600258!3d42.844112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec987f324329b%3A0x2cd99bcd0df5fc1f!2sSalymbekov%20Medical%20University%20(%20International%20university)!5e0!3m2!1sen!2skg!4v1763703452491!5m2!1sen!2skg"
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section с изображением */}
      <section className="relative py-20">
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://salymbekov.com/wp-content/uploads/2021/01/retro_telephone_479953_1920x1200.jpg)` }} // URL_ФОНОВОЕ_ИЗОБРАЖЕНИЕ_КОНТАКТЫ
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('contacts.hero.title')}</h1>
         
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bank Details Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contacts.bankDetails.title')}</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t('contacts.bankDetails.institution')}</span>
                  <span>{t('contacts.bankDetails.institutionName')}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t('contacts.bankDetails.legalAddress')}</span>
                  <span className="text-right">{contactInfo.legalAddress}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t('contacts.bankDetails.actualAddress')}</span>
                  <span className="text-right">{contactInfo.actualAddress}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t('contacts.bankDetails.inn')}</span>
                  <span>{contactInfo.inn}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t('contacts.bankDetails.bank')}</span>
                  <span className="text-right">{contactInfo.bank}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t('contacts.bankDetails.bik')}</span>
                  <span>{contactInfo.bik}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold">{t('contacts.bankDetails.account')}</span>
                  <span>{contactInfo.account}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="h-96 w-full bg-gray-200 flex-grow">
              {/* Правильный embed iframe для карты */}
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contacts.map.iframeTitle')}
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contacts.map.locationTitle')}</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Наши контакты секция */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('contacts.ourContacts.title')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Телефон */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                <FaPhone className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('contacts.ourContacts.phone.title')}</h4>
              <p className="text-blue-600 font-medium mb-2">{contactInfo.phone}</p>
              <p className="text-sm text-gray-600">{t('contacts.ourContacts.phone.description')}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                <FaEnvelope className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('contacts.ourContacts.email.title')}</h4>
              <p className="text-blue-600 font-medium mb-2">{contactInfo.email}</p>
              <p className="text-sm text-gray-600">{t('contacts.ourContacts.email.description')}</p>
            </div>

            {/* Адрес */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                <FaMapMarkerAlt className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('contacts.ourContacts.address.title')}</h4>
              <p className="text-blue-600 font-medium mb-2">{contactInfo.address}</p>
              <p className="text-sm text-gray-600">{t('contacts.ourContacts.address.description')}</p>
            </div>

            {/* Время работы */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('contacts.ourContacts.hours.title')}</h4>
              <p className="text-blue-600 font-medium mb-2">{contactInfo.workingHours}</p>
              <p className="text-sm text-gray-600">{t('contacts.ourContacts.hours.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;