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

  
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        repeat: Infinity, 
        repeatDelay: 3,   
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
      
      <span className="sr-only">{text}</span>
    </Tag>
  );
};

export default SplitText;