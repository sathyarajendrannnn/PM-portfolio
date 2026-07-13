import React from 'react';
import { FiChevronUp, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-white/[0.06] bg-white/60 dark:bg-darkBg/60 backdrop-blur-xl">
      {/* Subtle gradient line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-300/50 dark:via-primary-700/40 to-transparent" />

      <div className="section-wrap py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-black shadow-glow-sm">
                M
              </div>
              <span className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                M<span className="text-gradient">.</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-widest">
              Aspiring Junior Project Manager · Google PM & AI Certified
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.linkedin, icon: <FiLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: personalInfo.github,   icon: <FiGithub   className="w-4 h-4" />, label: 'GitHub'   },
              { href: `mailto:${personalInfo.email}`, icon: <FiMail className="w-4 h-4" />, label: 'Email' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 hover:text-white hover:border-transparent hover:-translate-y-0.5 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-950/40 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-all duration-200">
              <FiChevronUp className="w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100/80 dark:border-white/[0.05] text-center">
          <p className="text-[11px] text-slate-400 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Mythili R · All rights reserved.
            &nbsp;·&nbsp; Designed with 💜 in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
