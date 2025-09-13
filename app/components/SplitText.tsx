// app/components/SplitText.tsx
'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import type { JSX } from 'react';
import { motion, Variants } from 'framer-motion';


interface SplitTextProps {
  children: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const SplitText = ({ children, className, tag: Tag = 'p' }: SplitTextProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // This effect waits for fonts to be ready
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  // Updated container to loop the animation
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        repeat: Infinity, // Loop the animation forever
        repeatDelay: 3,   // Wait 3 seconds before repeating
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Tag className={className}>
      {/* The animation will only render after fonts are loaded */}
      {fontsLoaded && (
        <motion.span
          aria-hidden
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      )}
      {/* A hidden version of the text for SEO and initial layout */}
      <span className="sr-only">{text}</span>
    </Tag>
  );
};

export default SplitText;