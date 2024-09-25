import React from 'react';
import './App.css';
import { LanguageProvider } from './components/LanguageContext'; 
import LanguageSwitcher from './components/LanguageSwitcher';    
import TextComponent from './components/TextComponent';          

function App() {
  return (
    <LanguageProvider>
      <div className="App">
      
      
        <TextComponent />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
