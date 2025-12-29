'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (newLang: 'fr' | 'en' | 'ar') => {
    setLanguage(newLang);
    
    // Get current path without language prefix
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLangInPath = ['fr', 'en', 'ar'].includes(pathSegments[0]) ? pathSegments[0] : null;
    
    // Get the path without locale prefix
    const pathWithoutLang = currentLangInPath 
      ? '/' + pathSegments.slice(1).join('/')
      : pathname;
    
    // Build new path with new language prefix
    const newPath = newLang === 'fr' 
      ? pathWithoutLang === '/' ? '/fr' : `/fr${pathWithoutLang}`
      : `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    
    // Navigate to new path
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{currentLanguage?.flag}</span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-xl shadow-xl shadow-indigo-500/10 overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'fr' | 'en' | 'ar')}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    language === lang.code
                      ? 'bg-indigo-500/20 text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {language === lang.code && (
                    <span className="ml-auto text-indigo-400">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
