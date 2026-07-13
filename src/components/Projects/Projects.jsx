import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiSettings, FiAward, FiX, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  const catColors = {
    Agile:     'bg-primary-50 text-primary-700 border-primary-100 dark:bg-primary-950/40 dark:text-primary-300 dark:border-primary-900/40',
    Hybrid:    'bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/40',
    Waterfall: 'bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/40',
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">03 · Case Studies</div>
          <h3 className="section-heading">Featured Projects</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group card-3d glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Category badge */}
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider border backdrop-blur-md ${catColors[p.category] || catColors.Agile}`}>
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-gradient transition-all font-display leading-snug">
                  {p.name}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {p.description}
                </p>

                {/* Outcome */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-primary-50/60 dark:bg-primary-950/20 border border-primary-100/60 dark:border-primary-900/30 mb-5">
                  <FiTrendingUp className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-snug">{p.outcome}</p>
                </div>

                {/* Tool chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tools.slice(0, 3).map((t, i) => (
                    <span key={i} className="chip text-[10px] px-2 py-1">{t}</span>
                  ))}
                  {p.tools.length > 3 && <span className="chip text-[10px] px-2 py-1">+{p.tools.length - 3}</span>}
                </div>

                <button
                  onClick={() => setSelected(p)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 border border-primary-100/60 dark:border-primary-900/40 hover:from-primary-500 hover:to-accent-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Modal ── */}
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />

              {/* Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 24 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                className="relative bg-white dark:bg-darkCard rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-hidden shadow-2xl z-10 flex flex-col border border-slate-200/60 dark:border-white/[0.08]"
              >
                {/* Modal header */}
                <div className="p-6 border-b border-slate-100 dark:border-white/[0.06] bg-gradient-to-r from-primary-50/50 to-accent-50/30 dark:from-primary-950/30 dark:to-accent-950/20 flex items-center justify-between">
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catColors[selected.category] || catColors.Agile} mr-2`}>{selected.category}</span>
                    <h3 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white font-display">{selected.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.07] border border-slate-200/60 dark:border-white/[0.1] flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-6 overflow-y-auto space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Challenge', icon: <FiSettings className="w-4 h-4" />, body: selected.caseStudy.challenge },
                      { label: 'Strategy',  icon: <FiAward   className="w-4 h-4" />, body: selected.caseStudy.strategy  },
                    ].map(b => (
                      <div key={b.label} className="p-5 rounded-xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.06]">
                        <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary-500 mb-3">
                          {b.icon} {b.label}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{b.body}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="p-5 rounded-xl bg-gradient-to-br from-primary-50/60 to-accent-50/30 dark:from-primary-950/20 dark:to-accent-950/10 border border-primary-100/60 dark:border-primary-900/30">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Key Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selected.caseStudy.results.map((r, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <FiCheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary-500" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Tools & Methodologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tools.map((t, i) => <span key={i} className="chip">{t}</span>)}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-slate-100 dark:border-white/[0.06] flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-gradient px-6 py-2.5 rounded-xl text-xs"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
