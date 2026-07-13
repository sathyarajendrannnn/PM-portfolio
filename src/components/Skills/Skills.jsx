import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiLayers, FiGrid, FiTerminal, FiActivity, FiCheck } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { key: 'projectProcess', label: 'Project & Process',      icon: <FiBriefcase className="w-5 h-5" />, color: 'from-primary-500 to-mid-500',  bg: 'from-primary-50 to-sky-50 dark:from-primary-950/30 dark:to-sky-950/30',  wide: true  },
    { key: 'methodologies',  label: 'Methodologies',          icon: <FiLayers    className="w-5 h-5" />, color: 'from-mid-500 to-primary-500',   bg: 'from-sky-50 to-primary-50 dark:from-sky-950/30 dark:to-primary-950/30', wide: false },
    { key: 'tools',          label: 'Tools & Platforms',      icon: <FiGrid      className="w-5 h-5" />, color: 'from-accent-500 to-primary-500', bg: 'from-sky-50 to-primary-50 dark:from-sky-950/30 dark:to-primary-950/30',      wide: false },
    { key: 'technical',      label: 'Technical Literacy',     icon: <FiTerminal  className="w-5 h-5" />, color: 'from-amber-500 to-accent-500',   bg: 'from-amber-50 to-sky-50 dark:from-amber-950/30 dark:to-sky-950/30',          wide: false },
    { key: 'softSkills',     label: 'Soft Skills',            icon: <FiActivity  className="w-5 h-5" />, color: 'from-green-500 to-mid-500',      bg: 'from-green-50 to-sky-50 dark:from-green-950/30 dark:to-sky-950/30',     wide: false },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">05 · Competencies</div>
          <h3 className="section-heading">Skills & Tool Stack</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              className={`group card-3d glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300 p-6 ${cat.wide ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                  {cat.icon}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                  {cat.label}
                </h4>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill, i) => (
                  <span
                    key={i}
                    className="chip"
                  >
                    <FiCheck className="w-3 h-3 text-primary-500 flex-shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
