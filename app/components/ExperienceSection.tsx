// app/components/ExperienceSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, GraduationCap, ChevronDown } from 'lucide-react';

type ExperienceItem = {
  icon: React.ReactNode;
  title: string;
  company: string;
  type: string;
  date: string;
  description: string[];
  technologies: string[];
};


const experienceData: ExperienceItem[] = [
  {
    icon: <Briefcase size={20} />,
    title: "Chief of Life",
    company: "Personal Projects",
    type: "Full-time",
    date: "Present",
    description: [
      "Building web apps and AI tools to practice and experiment.",
      "Learning full-stack development through hands-on projects.",
      "Sharpening problem-solving and design skills."
    ],
    technologies: ["Next.js", "Vercel", "PostgreSQL", "JavaScript", "React", "Node.js", "Python"],
  },
  
  {
    icon: <GraduationCap size={20} />,
    title: "B.Tech in Computer Science",
    company: "Guru Gobind Singh Indraprastha University",
    type: "Education",
    date: "2023 – 2027",
    description: [
      "3rd-year Computer Science student focusing on Software Engineering.",
      "Relevant coursework: Data Structures, Algorithms, Web Development, Databases.",
      "Interested in AI, web development, and full-stack application design."
    ],
    technologies: ["C++", "Java", "Python", "SQL"],
  },
];

const ExperienceItemCard = ({ item }: { item: ExperienceItem }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div layout className="border-b border-slate-200">
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 py-6 cursor-pointer"
      >
        <div className="text-slate-500">{item.icon}</div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="text-slate-600">{item.company} • {item.type}</p>
        </div>
        <div className="text-slate-500">{item.date}</div>
        <motion.div
          className="text-slate-500"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-10 pb-6">
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="bg-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">My Experience</h2>
          <p className="mt-4 text-lg text-slate-600">
            A summary of my professional and academic journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item) => (
            <ExperienceItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};