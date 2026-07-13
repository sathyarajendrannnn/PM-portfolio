import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="section-wrap">

        {/* Section header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">02 · Career</div>
          <h3 className="section-heading">Professional Experience</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical spine */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-mid-200 to-accent-200 dark:from-primary-900 dark:via-mid-600/40 dark:to-accent-900 hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative flex gap-8 md:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-darkBg shadow-glow-sm hidden md:block z-10" />

                {/* Card */}
                <div className="flex-1 card-3d glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300 p-6 sm:p-8 group">

                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center">
                          <FiBriefcase className="w-4 h-4 text-primary-500" />
                        </div>
                        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white font-display group-hover:text-gradient transition-all">
                          {exp.role}
                        </h4>
                      </div>
                      <p className="text-sm font-bold text-primary-600 dark:text-primary-400 ml-10">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0 text-right">
                      <span className="inline-flex items-center justify-end gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center justify-end gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <FiMapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="h-px bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 mb-6" />

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <FiCheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary-500 dark:text-primary-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
