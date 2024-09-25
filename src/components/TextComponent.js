
    import React, { useContext } from 'react';
    import { LanguageContext } from './LanguageContext'; 
    
    const TextComponent = () => {
      const { language } = useContext(LanguageContext);
    
      const text = {
        en: 'English language was chosen!',
        ru: 'Был выбран русский язык!',
      };
    
      return <p>{text[language]}</p>;
    };
    
    export default TextComponent;