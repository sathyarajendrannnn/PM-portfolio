import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiShield, FiStar } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  const cardAnim = (i) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay: i * 0.08 }
  });

  return (
    <section id="certifications" className="py-24">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">04 · Credentials</div>
          <h3 className="section-heading">Certifications & Achievements</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Professional Certifications ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow-sm">
                <FiShield className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">Google Certifications</h4>
            </div>

            <div className="space-y-4">
              {certifications.professional.map((cert, i) => (
                <motion.div key={i} {...cardAnim(i)}
                  className="group card-3d glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300 p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 flex items-center justify-center flex-shrink-0 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                    <FiAward className="w-5 h-5 text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h5 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-gradient transition-all line-clamp-2">
                      {cert.name}
                    </h5>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{cert.issuer}</p>
                    <div className="flex items-center gap-3 mt-2.5">
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                        <FiCalendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">ID: {cert.id}</span>
                    </div>
                  </div>
                  <a
                    href={cert.link} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.07] flex items-center justify-center flex-shrink-0 self-center text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/40 transition-all duration-200"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Campus Achievements ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mid-500 to-primary-500 flex items-center justify-center shadow-glow-sm">
                <FiStar className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">Campus Achievements</h4>
            </div>

            <div className="space-y-4">
              {certifications.achievements.map((ach, i) => (
                <motion.div key={i} {...cardAnim(i)}
                  className="group card-3d glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300 p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-mid-100 to-primary-100 dark:from-mid-900/50 dark:to-primary-900/50 flex items-center justify-center flex-shrink-0 group-hover:from-mid-500 group-hover:to-primary-500 transition-all duration-300">
                    <FiStar className="w-5 h-5 text-mid-600 dark:text-mid-300 group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-gradient transition-all">
                        {ach.name}
                      </h5>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-accent-500 flex-shrink-0">
                        <FiCalendar className="w-3 h-3" />
                        {ach.date}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">{ach.issuer}</p>
                    {ach.details && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/[0.06] pt-2 mt-2">
                        {ach.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
