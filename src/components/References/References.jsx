import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiArrowRight, FiMail } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const References = () => {
  const { references } = portfolioData;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="references" className="py-24 bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">07 · Endorsements</div>
          <h3 className="section-heading">References</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        {/* Card */}
        <motion.div
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          {/* Glow behind card */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary-400/20 via-mid-400/10 to-accent-400/20 blur-xl pointer-events-none" />

          <div className="relative glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-premium dark:shadow-premium-dark p-10 text-center space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
              <FiFileText className="w-7 h-7 text-white" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white font-display">
                Available Upon Request
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                {references.message}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.1] to-transparent" />

            <button
              onClick={scrollToContact}
              className="btn-gradient px-7 py-3.5 rounded-xl text-sm mx-auto"
            >
              Request References
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
