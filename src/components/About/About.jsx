import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp, FiCpu, FiCompass } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' } }
});

const pillColors = ['text-primary-600 bg-primary-50 border-primary-100 dark:bg-primary-950/40 dark:border-primary-800/40 dark:text-primary-300', 'text-mid-600 bg-sky-50 border-sky-100 dark:bg-sky-950/40 dark:border-sky-800/40 dark:text-sky-300', 'text-accent-600 bg-sky-50 border-sky-100 dark:bg-sky-950/40 dark:border-sky-800/40 dark:text-sky-300', 'text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/40 dark:border-amber-800/40 dark:text-amber-300'];

const About = () => {
  const { personalInfo } = portfolioData;

  const cards = [
    { icon: <FiUsers className="w-5 h-5" />, color: 'text-primary-500', bg: 'bg-primary-50 dark:bg-primary-950/30', title: 'Team Collaborator', desc: 'Naturally coordinates cross-functional groups to keep delivery on track.' },
    { icon: <FiTrendingUp className="w-5 h-5" />, color: 'text-mid-500', bg: 'bg-sky-50 dark:bg-sky-950/30', title: 'Data-Driven', desc: 'Tracks milestones, KPIs, and sprint velocity to keep projects healthy.' },
    { icon: <FiCpu className="w-5 h-5" />, color: 'text-accent-500', bg: 'bg-sky-50 dark:bg-sky-950/30', title: 'Technical Literacy', desc: 'Full-stack internship background bridges PM and engineering worlds.' },
    { icon: <FiCompass className="w-5 h-5" />, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30', title: 'User-Empathy', desc: 'UI/UX research background ensures delivery stays grounded in user needs.' },
  ];

  const methodologies = ['Agile', 'Scrum', 'Waterfall Basics', 'Hybrid'];
  const industries     = ['Software / SaaS', 'Product & UX', 'IT Consulting'];

  return (
    <section id="about" className="py-24">
      <div className="section-wrap">

        {/* Section header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp()}
        >
          <div className="section-eyebrow">01 · About</div>
          <h3 className="section-heading">About My Approach</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Bio + tags */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h4 variants={fadeUp()} className="text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
              A PM-focused person who bridges <span className="text-gradient">technical execution</span> with structured delivery.
            </motion.h4>

            <motion.p variants={fadeUp()} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {personalInfo.bio}
            </motion.p>

            {/* Industries */}
            <motion.div variants={fadeUp()}>
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Industries</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((t, i) => (
                  <span key={i} className={`chip px-4 py-1.5 font-semibold ${pillColors[i % pillColors.length]}`}>{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Methodologies */}
            <motion.div variants={fadeUp()}>
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Methodologies</p>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((m, i) => (
                  <span key={i} className="chip">{m}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Quote + mini cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quote */}
            <motion.blockquote
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp(0.1)}
              className="relative p-6 rounded-2xl glass border border-white/60 dark:border-white/[0.08] shadow-card"
            >
              <div className="absolute top-3 right-5 text-6xl text-primary-200 dark:text-primary-900 select-none font-serif leading-none">"</div>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm leading-relaxed relative z-10">
                {personalInfo.quote}
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-accent-400 flex-shrink-0">
                  <img src={personalInfo.profileImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{personalInfo.name}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Aspiring Junior PM · Google Certified</p>
                </div>
              </div>
            </motion.blockquote>

            {/* Mini feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {cards.map((c, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp(0.1 + i * 0.08)}
                  className="p-4 rounded-2xl glass border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className={`w-9 h-9 rounded-xl ${c.bg} ${c.color} flex items-center justify-center mb-3`}>
                    {c.icon}
                  </div>
                  <h6 className="text-xs font-bold text-slate-900 dark:text-white mb-1">{c.title}</h6>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{c.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
