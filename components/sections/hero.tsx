"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-lg text-indigo-400 font-medium">
              {t("hero.greeting")}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span
              className="gradient-text heading-font"
              style={{
                fontFamily:
                  'var(--font-playfair), Georgia, "Times New Roman", serif',
              }}
            >
              {t("hero.name")}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="heading-font text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wider leading-tight text-gray-900 dark:text-gray-300 mb-8"
            style={{
              fontFamily:
                'var(--font-playfair), Georgia, "Times New Roman", serif',
            }}
          >
            {t("hero.title")}
          </motion.h2>

          {/* Professional Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-indigo-200 dark:border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-lg">
              <p 
                className="text-base md:text-lg lg:text-xl leading-relaxed font-normal"
                style={{
                  fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: '#1f2937',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  textAlign: 'justify',
                }}
              >
                <span className="dark:text-white dark:drop-shadow-[0_2px_8px_rgba(99,102,241,0.5)]">
                  {t("hero.professional_message")}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { number: "10+", label: t("hero.stats.projects") },
              { number: "5+", label: t("hero.stats.clients") },
              { number: "3+", label: t("hero.stats.experience") },
              { number: "10+", label: t("hero.stats.technologies") },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-transform"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto mb-8"
          >
            {["WordPress", "React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30 border border-indigo-300 dark:border-indigo-500/50 rounded-full text-sm md:text-base font-semibold text-gray-900 dark:text-white hover:scale-110 transition-transform"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ marginBottom: "3rem" }}
          >
            <a
              href="#projects"
              className="font-button uppercase tracking-wider group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.cta_projects")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="font-button uppercase tracking-wider px-8 py-4 border-2 border-indigo-500 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-indigo-500/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              {t("hero.cta_contact")}
              <span className="text-green-500">●</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              {
                icon: MessageCircle,
                href: "https://wa.me/33766491893",
                label: t("social.whatsapp"),
              },
              {
                icon: Mail,
                href: "mailto:bookingtaha98@gmail.com",
                label: t("social.email"),
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/tahatoufik/",
                label: t("social.linkedin"),
              },
              {
                icon: Github,
                href: "https://github.com/TOUFIK-Taha98",
                label: t("social.github"),
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:border-indigo-500 transition-all relative group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {/* Tooltip */}
                <span
                  className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-xl shadow-indigo-500/40"
                  style={{
                    top: "-50px",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {label}
                  <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-600 rotate-45"></span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
