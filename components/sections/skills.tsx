"use client";

import { motion } from "framer-motion";
import { Database, Layers, Globe, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Niveau de compétence
const LV = {
  SENIOR: "SENIOR",
  INTER: "INTER",
  JUNIOR: "JUNIOR",
} as const;

const skillCategories = [
  {
    title: "frontend",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "react", level: LV.SENIOR },
      { name: "nextjs", level: LV.SENIOR },
      { name: "typescript", level: LV.SENIOR },
      { name: "tailwind", level: LV.SENIOR },
    ],
  },
  {
    title: "backend",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "express", level: LV.SENIOR },
      { name: "nodejs", level: LV.SENIOR },
      { name: "postgresql", level: LV.INTER },
      { name: "nosql", level: LV.SENIOR },
    ],
  },
  {
    title: "tools",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "wordpress", level: LV.SENIOR },
      { name: "git", level: LV.SENIOR },
      { name: "figma", level: LV.INTER },
    ],
  },
  {
    title: "mobile",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    skills: [{ name: "reactnative", level: LV.INTER }],
  },
];

const levelColors = {
  [LV.SENIOR]: "from-green-500 to-emerald-500",
  [LV.INTER]: "from-blue-500 to-indigo-500",
  [LV.JUNIOR]: "from-gray-400 to-gray-500",
};

export default function Skills() {
  const { t } = useLanguage();

  const levelLabel = (level: string) => {
    switch (level) {
      case LV.SENIOR:
        return t("skills.level.senior");
      case LV.INTER:
        return t("skills.level.intermediate");
      case LV.JUNIOR:
        return t("skills.level.junior");
      default:
        return level;
    }
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-0">
      <div className="max-w-7xl mx-auto w-full" style={{ padding: '0.2rem', paddingTop: '2rem' }}>
        {/* Header Section - Centré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 lg:mb-24"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 lg:mb-8" style={{ textAlign: 'center' }}>
            {t("skills.title") && <span className="text-gray-900 dark:text-white">{t("skills.title")} </span>}
            <span className="gradient-text">{t("skills.title_highlight")}</span>
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400 px-4" 
            style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto', width: '100%' }}
          >
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Skills Grid - Centré */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              {/* Card Container */}
              <div 
                className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 h-full"
                style={{ padding: '1.5rem' }}
              >
                {/* Icon avec gradient */}
                <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-8 lg:mb-10">
                  {t(`skills.${category.title}`)}
                </h3>

                {/* Skills List */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
                        {t(`skills.${skill.name}`)}
                      </span>
                      
                      {/* Level Badge avec gradient */}
                      <span
                        className={`rounded-full text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r ${
                          levelColors[skill.level]
                        } shadow-sm whitespace-nowrap`}
                        style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', marginTop: '0.5rem' }}
                      >
                        {levelLabel(skill.level)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section - Centré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center px-4"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20">
            <span className="text-2xl sm:text-3xl md:text-4xl">🚀</span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 font-medium text-center">
              {t("skills.learning")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
