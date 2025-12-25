'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Settings, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10 bg-gradient-to-b from-transparent to-gray-50 dark:to-black/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section - Professional Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
              {language === 'fr' && "Transformons vos idées en solutions numériques"}
              {language === 'en' && "Let's transform your ideas into digital solutions"}
              {language === 'ar' && "لنحول أفكارك إلى حلول رقمية"}
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400 leading-relaxed">
              {language === 'fr' && "Développeur expérimenté, je trouve des solutions innovantes à vos problématiques et traduis vos besoins en applications performantes et sur-mesure."}
              {language === 'en' && "As an experienced developer, I find innovative solutions to your challenges and translate your needs into high-performance, tailor-made applications."}
              {language === 'ar' && "كمطور ذو خبرة، أجد حلولاً مبتكرة لتحدياتك وأترجم احتياجاتك إلى تطبيقات عالية الأداء ومخصصة."}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <Code2 className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg text-gray-900 dark:text-white">
                    {language === 'fr' && "Code de qualité"}
                    {language === 'en' && "Quality code"}
                    {language === 'ar' && "كود عالي الجودة"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg text-gray-900 dark:text-white">
                    {language === 'fr' && "Solutions créatives"}
                    {language === 'en' && "Creative solutions"}
                    {language === 'ar' && "حلول إبداعية"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg text-gray-900 dark:text-white">
                    {language === 'fr' && "Livraison rapide"}
                    {language === 'en' && "Fast delivery"}
                    {language === 'ar' && "تسليم سريع"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-base md:text-lg text-gray-900 dark:text-white">
                    {language === 'fr' && "Maintenance & Support"}
                    {language === 'en' && "Maintenance & Support"}
                    {language === 'ar' && "صيانة ودعم"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'fr' && "Discutons de votre projet"}
              {language === 'en' && "Let's discuss your project"}
              {language === 'ar' && "لنناقش مشروعك"}
            </h4>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  name: 'WhatsApp', 
                  icon: MessageCircle, 
                  url: 'https://wa.me/33766491893',
                  color: 'text-green-500'
                },
                { 
                  name: 'Email', 
                  icon: Mail, 
                  url: 'mailto:bookingtaha98@gmail.com',
                  color: 'text-red-500'
                },
                { 
                  name: 'LinkedIn', 
                  icon: Linkedin, 
                  url: 'https://www.linkedin.com/in/tahatoufik/',
                  color: 'text-blue-500'
                },
                { 
                  name: 'GitHub', 
                  icon: Github, 
                  url: 'https://github.com/TOUFIK-Taha98',
                  color: 'text-gray-700 dark:text-gray-300'
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all hover:scale-105 border border-gray-200 dark:border-white/10"
                >
                  <social.icon className={`w-6 h-6 ${social.color}`} />
                  <span className="font-semibold text-gray-900 dark:text-white">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 border-t border-gray-200 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-500">
            <p>
              © {currentYear} Taha TOUFIK. {language === 'fr' && "Tous droits réservés."}
              {language === 'en' && "All rights reserved."}
              {language === 'ar' && "جميع الحقوق محفوظة."}
            </p>
            <p className="flex items-center gap-2">
              {language === 'fr' && "Conçu et développé avec"}
              {language === 'en' && "Designed and developed with"}
              {language === 'ar' && "مصمم ومطور بـ"}
              <span className="text-red-500">♥</span>
              {language === 'fr' && "et Next.js"}
              {language === 'en' && "and Next.js"}
              {language === 'ar' && "و Next.js"}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
