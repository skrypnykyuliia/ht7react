import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext'; 

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      Switch Language
    </button>
  );
};

export default LanguageSwitcher;