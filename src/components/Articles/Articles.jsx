import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiArrowUpRight, FiCalendar, FiClock } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Articles = () => {
  const { articles } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-500 dark:text-accent-400 uppercase mb-2">08 / Thought Leadership</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">Articles & Insights</h3>
          <div className="w-12 h-1 bg-accent-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {articles.map((art, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="space-y-4">
                {/* Header Icons & Metadata */}
                <div className="flex justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5 text-accent-500" />
                    {art.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-250 font-display">
                  {art.title}
                </h4>

                {/* Excerpt */}
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4">
                  {art.excerpt}
                </p>
              </div>

              {/* Read More link */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850">
                <a
                  href={art.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-500 dark:text-accent-400 hover:text-accent-600 group-hover:gap-2 transition-all"
                >
                  <span>Read Article on LinkedIn</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Articles;
