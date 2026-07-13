import React, { useRef, useState } from 'react';

/**
 * Card3D – wraps children in a container that tilts toward the mouse.
 * Props:
 *   - className   (string)  extra classes
 *   - intensity   (number)  tilt degrees, default 8
 *   - glare       (bool)    show light-reflection glare, default true
 *   - children
 */
const Card3D = ({ children, className = '', intensity = 8, glare = true, ...rest }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * intensity;
    const rotateY = (x - 0.5) * intensity;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.15s ease-out',
    });

    if (glare) {
      setGlareStyle({
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
        opacity: 1,
      });
    }
  };

  const handleLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    if (glare) {
      setGlareStyle({ opacity: 0 });
    }
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
          style={{
            ...glareStyle,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      )}
    </div>
  );
};

export default Card3D;
