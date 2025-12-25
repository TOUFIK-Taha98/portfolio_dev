'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Load translations dynamically
    import(`@/lib/translations/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}));

    // Update HTML lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update font for Arabic
    // Prefer CSS lang-based fonts; no imperative override needed
    if (language === 'ar') {
      document.documentElement.lang = 'ar';
    }
    
    // Save to localStorage
    localStorage.setItem('preferred-language', language);
  }, [language]);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && ['fr', 'en', 'ar'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
