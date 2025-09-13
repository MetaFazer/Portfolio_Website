// app/components/SkillsSection.tsx
'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiPython, SiDocker, SiPostgresql, SiPrisma, SiCss3, SiHtml5, SiExpress, SiGit, SiVercel, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { SplitText } from './SplitText'; // Import our new component

// 1. The Data: Each skill has a name, icon, and category
const skillsData = [
  // Frontend
  { name: 'React', icon: <SiReact />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
  { name: 'HTML5', icon: <SiHtml5 />, category: 'Frontend' },
  { name: 'CSS3', icon: <SiCss3 />, category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Backend' },
  // Languages
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Languages' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'Languages' },
  { name: 'Python', icon: <SiPython />, category: 'Languages' },
  { name: 'C++', icon: <SiCplusplus />, category: 'Languages' },
  // Tools & Deployment
  { name: 'Git', icon: <SiGit />, category: 'Tools & Deployment' },
  { name: 'Vercel', icon: <SiVercel />, category: 'Tools & Deployment' },
];

const categories = ['All', ...Array.from(new Set(skillsData.map(s => s.category)))];

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') {
      return skillsData;
    }
    return skillsData.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" className="w-full bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm-px-6 lg:px-8">
        <div className="text-center mb-12">
          
          <SplitText tag="h2" className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Technologies I Work With!
          </SplitText>
          
          <SplitText tag="p" className="text-lg text-slate-600">
            A curated stack of tools & tech I use to bring ideas to life.
          </SplitText>
          
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === category 
                ? 'bg-slate-900 text-white' 
                : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-5xl text-slate-700">{skill.icon}</div>
                <p className="font-semibold text-slate-800">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}