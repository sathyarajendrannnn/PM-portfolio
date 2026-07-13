import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── SVG Flower shapes ─────────────────────────────────────────────────────── */
const FlowerSVG = ({ color, size, variant = 0 }) => {
  const petals = variant === 0 ? 5 : variant === 1 ? 6 : 4;
  const petalColors = [
    ['#a9c9ef', '#4a8fd6', '#2563a8'],  // dark navy
    ['#b5d3fb', '#5e9fef', '#3b82e0'],  // medium navy
    ['#8bbbf7', '#4688be', '#3570a0'],  // steel blue
    ['#fcd34d', '#f59e0b', '#d97706'],  // amber
    ['#86efac', '#4ade80', '#22c55e'],  // green
  ];
  const palette = petalColors[color % petalColors.length];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      {/* Petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (360 / petals) * i;
        return (
          <ellipse
            key={i}
            cx="50"
            cy="25"
            rx={variant === 2 ? 14 : 12}
            ry={variant === 2 ? 22 : 20}
            fill={palette[i % palette.length]}
            opacity={0.75}
            transform={`rotate(${angle} 50 50)`}
            style={{
              animation: `petal-unfurl 2s ease-out ${i * 0.15}s both`,
              transformOrigin: '50px 50px',
            }}
          />
        );
      })}
      {/* Center */}
      <circle cx="50" cy="50" r="10" fill={palette[2]} opacity="0.9" />
      <circle cx="50" cy="50" r="6" fill={palette[0]} opacity="0.8" />
      <circle cx="48" cy="48" r="2" fill="white" opacity="0.6" />
    </svg>
  );
};

/* ── Cherry Blossom petal (simple) ─────────────────────────────────────────── */
const BlossomPetal = ({ size, color }) => {
  const petalShades = [
    '#a9c9ef',  // navy-200
    '#b5d3fb',  // medium navy-200
    '#8bbbf7',  // steel blue-200
    '#7aade4',  // navy-300
    '#5e9fef',  // medium navy-300
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 5C20 5 30 12 30 22C30 28 25 35 20 35C15 35 10 28 10 22C10 12 20 5 20 5Z"
        fill={petalShades[color % petalShades.length]}
        opacity="0.7"
      />
    </svg>
  );
};

/* ── Single Floating Flower ────────────────────────────────────────────────── */
const FloatingFlower = ({ flower }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${flower.x}%`,
        top: `${flower.startY}%`,
        zIndex: 1,
      }}
      initial={{ opacity: 0, y: 0, rotate: flower.rotation, scale: 0 }}
      animate={{
        opacity: [0, 0.7, 0.5, 0],
        y: [0, -150, -350, -500],
        x: [0, flower.drift, -flower.drift / 2, flower.drift * 0.8],
        rotate: [flower.rotation, flower.rotation + 120, flower.rotation + 240, flower.rotation + 360],
        scale: [0, 1.1, 0.9, 0.4],
      }}
      transition={{
        duration: flower.duration,
        ease: 'easeInOut',
        times: [0, 0.2, 0.6, 1],
        delay: flower.delay,
        repeat: Infinity,
        repeatDelay: flower.repeatDelay,
      }}
    >
      {flower.type === 'blossom' ? (
        <BlossomPetal size={flower.size} color={flower.colorIdx} />
      ) : (
        <FlowerSVG color={flower.colorIdx} size={flower.size} variant={flower.variant} />
      )}
    </motion.div>
  );
};

/* ── Blooming cluster (appears on scroll in sections) ──────────────────────── */
const BloomCluster = ({ x, y, delay = 0 }) => {
  const clusterRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [colorIdx] = useState(() => Math.floor(Math.random() * 5));
  const [variant] = useState(() => Math.floor(Math.random() * 3));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (clusterRef.current) observer.observe(clusterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={clusterRef}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 12,
              delay: delay,
            }}
            className="petal-pulse"
          >
            <FlowerSVG color={colorIdx} size={40} variant={variant} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Main Component ────────────────────────────────────────────────────────── */
const FloatingFlowers = () => {
  const [flowers] = useState(() => {
    const items = [];
    // Floating petals
    for (let i = 0; i < 12; i++) {
      items.push({
        id: `petal-${i}`,
        type: 'blossom',
        x: Math.random() * 100,
        startY: 70 + Math.random() * 30,
        size: 14 + Math.random() * 18,
        rotation: Math.random() * 360,
        drift: 20 + Math.random() * 40,
        duration: 10 + Math.random() * 8,
        delay: Math.random() * 8,
        repeatDelay: 2 + Math.random() * 6,
        colorIdx: Math.floor(Math.random() * 5),
        variant: 0,
      });
    }
    // Blooming flowers
    for (let i = 0; i < 6; i++) {
      items.push({
        id: `flower-${i}`,
        type: 'flower',
        x: Math.random() * 90 + 5,
        startY: 60 + Math.random() * 35,
        size: 24 + Math.random() * 20,
        rotation: Math.random() * 360,
        drift: 15 + Math.random() * 30,
        duration: 14 + Math.random() * 6,
        delay: 2 + Math.random() * 10,
        repeatDelay: 4 + Math.random() * 8,
        colorIdx: Math.floor(Math.random() * 5),
        variant: Math.floor(Math.random() * 3),
      });
    }
    return items;
  });

  // Bloom clusters positioned near section dividers
  const clusters = [
    { x: 5, y: 15, delay: 0.2 },
    { x: 92, y: 25, delay: 0.5 },
    { x: 8, y: 45, delay: 0.3 },
    { x: 88, y: 55, delay: 0.6 },
    { x: 3, y: 70, delay: 0.4 },
    { x: 95, y: 80, delay: 0.7 },
    { x: 10, y: 90, delay: 0.5 },
    { x: 85, y: 35, delay: 0.3 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[2]" aria-hidden="true">
      {/* Floating petals & flowers */}
      {flowers.map((flower) => (
        <FloatingFlower key={flower.id} flower={flower} />
      ))}
      {/* Bloom clusters that appear on scroll */}
      {clusters.map((c, i) => (
        <BloomCluster key={`cluster-${i}`} x={c.x} y={c.y} delay={c.delay} />
      ))}
    </div>
  );
};

export default FloatingFlowers;
