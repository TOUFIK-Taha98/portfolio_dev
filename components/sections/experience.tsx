'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    id: 'freelance_2024',
    company: 'Freelance',
    logo: '💼',
    logoUrl: null,
    positionKey: 'experience.items.freelance_2024.position',
    period: 'Apr 2024 - Aug 2024',
    location: 'Île-de-France, France',
    type: 'Hybrid',
    descriptionKey: 'experience.items.freelance_2024.description',
    achievementsKey: 'experience.items.freelance_2024.achievements',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
  },
  {
    id: 'freelance_2023',
    company: 'Freelance',
    logo: '🚀',
    logoUrl: null,
    positionKey: 'experience.items.freelance_2023.position',
    period: 'Sep 2023 - Jan 2024',
    location: 'Île-de-France, France',
    type: 'Hybrid',
    descriptionKey: 'experience.items.freelance_2023.description',
    achievementsKey: 'experience.items.freelance_2023.achievements',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'Agile'],
  },
  {
    id: 'woby',
    company: 'Woby',
    logo: '🏢',
    logoUrl: null,
    positionKey: 'experience.items.woby.position',
    period: 'Dec 2022 - Aug 2023',
    location: 'Paris, Île-de-France, France',
    type: 'Apprenticeship',
    descriptionKey: 'experience.items.woby.description',
    achievementsKey: 'experience.items.woby.achievements',
    tags: ['JavaScript', 'TypeScript', 'Node.js', 'Flutter', 'AWS', 'Figma'],
  },
  {
    id: 'orange',
    company: 'Orange',
    logo: '🍊',
    logoUrl: null,
    positionKey: 'experience.items.orange.position',
    period: 'Oct 2021 - Sep 2022',
    location: 'Arcueil, Île-de-France, France',
    type: 'Apprenticeship',
    descriptionKey: 'experience.items.orange.description',
    achievementsKey: 'experience.items.orange.achievements',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'GCP', 'BigQuery', 'Cloud Functions'],
  },
  {
    id: 'inria',
    company: 'Inria',
    logo: '🔬',
    logoUrl: null,
    positionKey: 'experience.items.inria.position',
    period: 'Apr 2021 - Jul 2021',
    location: 'Nancy, Grand Est, France',
    type: 'Internship',
    descriptionKey: 'experience.items.inria.description',
    achievementsKey: 'experience.items.inria.achievements',
    tags: ['Git', 'JavaScript', 'React.js', 'Material-UI', 'PostgreSQL', 'API REST'],
  },
];

export default function Experience() {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="relative flex items-center justify-center bg-white/[0.02] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto relative z-10" style={{ padding: '0.2rem', paddingTop: '2rem' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 lg:mb-24"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 lg:mb-8" style={{ textAlign: 'center' }}>
            {t("experience.title") && <span className="text-gray-900 dark:text-white">{t("experience.title")} </span>}
            <span className="gradient-text">{t("experience.title_highlight")}</span>
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400 px-4" 
            style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto', width: '100%' }}
          >
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                  <div 
                    className="group bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:scale-105"
                    style={{ padding: '0.9rem' }}
                  >
                    {/* Company Logo & Info */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Logo Display */}
                      <div className="flex-shrink-0">
                        {exp.logoUrl ? (
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-md">
                            <Image
                              src={exp.logoUrl}
                              alt={`${exp.company} logo`}
                              width={64}
                              height={64}
                              className="object-contain p-1"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl shadow-md">
                            {exp.logo}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{exp.company}</h3>
                        <p className="text-lg sm:text-xl md:text-2xl text-indigo-500 dark:text-indigo-400 font-semibold mb-2">
                          {t(exp.positionKey)}
                        </p>
                        <div className="flex flex-col gap-1 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{exp.period}</span>
                            {exp.type && <span className="text-sm md:text-base bg-white/10 px-3 py-1 rounded-full">{t(`experience.type.${exp.type}`)}</span>}
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-2">
                              <MapPin size={18} />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                      {t(exp.descriptionKey)}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 sm:space-y-3 mb-4">
                      {exp.achievementsKey && Array.isArray(t(exp.achievementsKey)) && (t(exp.achievementsKey) as string[]).map((achievement: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1 font-bold">▸</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-white/10 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 ring-4 ring-black z-10" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
