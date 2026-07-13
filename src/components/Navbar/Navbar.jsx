import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

/* ── Smooth-scroll helper ── */
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
};

const NAV_LINKS = [
  { id: 'about',          label: 'About'          },
  { id: 'experience',     label: 'Experience'      },
  { id: 'projects',       label: 'Projects'        },
  { id: 'certifications', label: 'Certifications'  },
  { id: 'skills',         label: 'Skills'          },
  { id: 'education',      label: 'Education'       },
  { id: 'references',     label: 'References'      },
  { id: 'contact',        label: 'Contact'         },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,  setActive]  = useState('');

  /* Scroll effects */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 90;
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(l.id);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => { setOpen(false); scrollTo(id); };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-darkBg/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 dark:border-white/[0.06]'
          : 'py-5 bg-transparent'
      }`}>
        <div className="section-wrap flex items-center justify-between">

          {/* Brand */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-black shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
              M
            </span>
            <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
              M<span className="text-gradient">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === l.id
                    ? 'bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/[0.05]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-xl bg-slate-100/80 dark:bg-white/[0.07] border border-slate-200/60 dark:border-white/[0.1] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>



            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 rounded-xl bg-slate-100/80 dark:bg-white/[0.07] border border-slate-200/60 dark:border-white/[0.1] flex items-center justify-center text-slate-600 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {open ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 bg-white dark:bg-darkCard border-l border-slate-200/60 dark:border-white/[0.08] shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm font-bold text-slate-900 dark:text-white">Navigation</span>
          <button onClick={() => setOpen(false)} className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white">
            <FiX className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === l.id
                  ? 'bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.05]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/[0.08]">
          <a href={portfolioData.personalInfo.resumeUrl} className="btn-gradient w-full py-3 text-sm rounded-xl">
            <FiDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
      {open && <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
