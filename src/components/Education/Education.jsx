import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">06 · Academics</div>
          <h3 className="section-heading">Education</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="group card-3d glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300 p-7 flex gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-mid-500 flex items-center justify-center text-white shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
                  <FiBookOpen className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 min-w-0">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-accent-500">
                  <FiCalendar className="w-3 h-3" />
                  {edu.year}
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white font-display leading-snug group-hover:text-gradient transition-all">
                  {edu.degree}
                </h4>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{edu.institution}</p>
                <div className="h-px bg-slate-100 dark:bg-white/[0.06] my-2" />
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
