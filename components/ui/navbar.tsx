'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  
  // Extract locale from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLocale = ['fr', 'en', 'ar'].includes(pathSegments[0]) ? pathSegments[0] : 'fr';
  const localePrefix = currentLocale === 'fr' ? '' : `/${currentLocale}`;
  
  const navItems = [
    { name: t('nav.home'), href: `${localePrefix}/` },
    { name: t('nav.projects'), href: `${localePrefix}/projets` },
    { name: t('nav.pricing'), href: `${localePrefix}/tarifs` },
    { name: t('nav.skills'), href: `${localePrefix}/competences` },
    { name: t('nav.experience'), href: `${localePrefix}/experiences` },
    { name: t('nav.blog'), href: `${localePrefix}/blog` },
    { name: t('nav.contact'), href: '#contact' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/20 shadow-lg dark:shadow-indigo-500/10'
          : 'bg-gradient-to-b from-white/80 via-white/60 to-white/40 dark:from-black/80 dark:via-black/60 dark:to-black/40 backdrop-blur-lg border-b border-gray-100 dark:border-white/5'
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-logo text-xl md:text-2xl font-bold gradient-text flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TahaDEV
          </motion.a>

          {/* Desktop Navigation - Centré */}
          <div className="hidden md:flex items-center justify-center gap-3 lg:gap-6 xl:gap-8 flex-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-menu text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors relative group px-2 md:px-3 lg:px-4 py-2 whitespace-nowrap text-sm lg:text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          
          {/* Theme Toggle & Language Switcher - Côté droit */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile: WhatsApp, Theme Toggle, Language Switcher & Menu Button */}
          <div className="md:hidden flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/33766491893?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 p-2 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              className="text-gray-900 dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
