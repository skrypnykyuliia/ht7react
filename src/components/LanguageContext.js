import React, { createContext, useState } from 'react';


export const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');


  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};