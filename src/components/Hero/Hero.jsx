import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import Card3D from '../UI/Card3D';
import { portfolioData } from '../../data/portfolioData';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
};

/* Stagger children animation */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 16 } }
};

const Hero = () => {
  const { personalInfo, stats } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">

      {/* ── Decorative floating shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-right floating ring */}
        <div className="absolute top-20 right-8 w-64 h-64 rounded-full border border-primary-200/40 dark:border-primary-700/20 animate-spin-slow" />
        <div className="absolute top-32 right-20 w-40 h-40 rounded-full border border-accent-200/40 dark:border-accent-700/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
        {/* Bottom-left dots grid */}
        <svg className="absolute bottom-20 left-4 opacity-20 dark:opacity-10" width="160" height="160" fill="none">
          {[0,1,2,3,4].flatMap(r => [0,1,2,3,4].map(c => (
            <circle key={`${r}-${c}`} cx={r*32+8} cy={c*32+8} r="3" fill="currentColor" className="text-primary-400 dark:text-primary-600" />
          )))}
        </svg>
      </div>

      <div className="section-wrap w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Availability pill */}
            <motion.div variants={item}>
              <span className="pill">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                Open to PM & coordinator roles — Remote globally
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight leading-[1.05]">
                <span className="text-slate-900 dark:text-white">Hi, I'm </span>
                <span className="text-shimmer">Mythili</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-400 leading-relaxed">
                Aspiring Junior Project Manager
              </h2>
            <h1 className="text-gradient font-bold">
            Google Certified PM & AI Professional
            </h1>
          </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </motion.p>

            {/* Location */}
            <motion.div variants={item} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <FiMapPin className="w-4 h-4 text-accent-500" />
              {personalInfo.location}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-gradient px-7 py-3.5 rounded-xl text-sm"
              >
                Let's Connect
                <FiArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4">
              {[
                { href: personalInfo.linkedin, icon: <FiLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
                { href: personalInfo.github,   icon: <FiGithub   className="w-4 h-4" />, label: 'GitHub'   },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass border border-slate-200/60 dark:border-white/[0.08] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={item}
              className="pt-6 border-t border-slate-200/60 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-black font-display text-gradient leading-tight">{s.value}</div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Avatar card ── */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.25 }}
          >
            <Card3D intensity={10} className="group">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary-400/30 via-mid-400/20 to-accent-400/30 blur-xl group-hover:blur-2xl transition-all duration-700 opacity-80 animate-tilt" />

              {/* Photo card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-96 md:h-[26rem] rounded-[2rem] overflow-hidden glass border border-white/60 dark:border-white/[0.12] shadow-premium dark:shadow-premium-dark">
                <img
                  src={personalInfo.profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    document.getElementById('avatar-fb').style.display = 'flex';
                  }}
                />
                {/* Fallback initials */}
                <div id="avatar-fb" className="hidden absolute inset-0 bg-gradient-to-br from-primary-900 to-darkBg flex-col items-center justify-center text-white">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl font-black mb-4 shadow-glow">MR</div>
                  <p className="font-bold text-lg">{personalInfo.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{personalInfo.title}</p>
                </div>

                {/* Bottom overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 py-2.5 px-4 rounded-xl bg-white/80 dark:bg-darkBg/80 backdrop-blur-md border border-white/60 dark:border-white/[0.08] flex items-center justify-between">
                  <div className="text-[11px] font-bold text-slate-700 dark:text-slate-200">
                    Google Certified · PMP
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-semibold text-green-600 dark:text-green-400">Available</span>
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
