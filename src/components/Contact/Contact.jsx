import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { personalInfo } = portfolioData;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 6000);
    }, 1600);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-400/50 dark:focus:ring-primary-600/50 transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 ring-2 ring-red-400/20'
        : 'border-slate-200/70 dark:border-white/[0.1] focus:border-primary-400 dark:focus:border-primary-600'
    }`;

  const contactItems = [
    { icon: <FiMail className="w-5 h-5" />, color: 'from-primary-500 to-mid-500',  label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone className="w-5 h-5" />, color: 'from-mid-500 to-primary-500', label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}`    },
    { icon: <FiMapPin className="w-5 h-5" />, color: 'from-accent-500 to-mid-500', label: 'Location', value: personalInfo.location, href: null                            },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">08 · Connect</div>
          <h3 className="section-heading">Get In Touch</h3>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left: Info ── */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let's discuss how I can <span className="text-gradient">contribute</span> to your team.
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Open to junior PM, coordinator, or related roles. Whether you'd like to chat about an opportunity or just connect — I'd love to hear from you.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {contactItems.map((c, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 glass rounded-xl border border-white/60 dark:border-white/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-gradient transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Find me online</p>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.linkedin, icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { href: personalInfo.github,   icon: <FiGithub   className="w-5 h-5" />, label: 'GitHub'   },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-11 h-11 rounded-xl glass border border-white/60 dark:border-white/[0.08] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="relative glass rounded-2xl border border-white/60 dark:border-white/[0.08] shadow-premium dark:shadow-premium-dark p-8">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white mb-7 font-display">Send a Message</h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Your Name</label>
                    <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputCls('name')} />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Your Email</label>
                    <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" className={inputCls('email')} />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Subject (optional)</label>
                  <input id="subject" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Opportunity · Partnership · Hello!" className={inputCls('subject')} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Hi Mythili, I'd love to connect about..." className={inputCls('message')} />
                  {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
                </div>
                <button type="submit" disabled={sending} className="btn-gradient w-full py-3.5 rounded-xl text-sm">
                  {sending ? 'Sending…' : (<><FiSend className="w-4 h-4" /> Send Message</>)}
                </button>
              </form>

              {/* Success overlay */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-2xl bg-white/95 dark:bg-darkCard/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 space-y-4"
                  >
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                      <FiCheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                    </motion.div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Message Sent!</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">Thanks for reaching out! I'll get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="btn-soft px-5 py-2 rounded-xl text-xs">Send another</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
