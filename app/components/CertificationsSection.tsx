// app/components/CertificationsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

// --- Type Definition ---
type Certification = {
  name: string;
  issuer: string;
  url: string;
};

// --- Your Certification Data ---
const certificationsData: Certification[] = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-1b033488-2f1e-4bb3-adff-44ffa7405041/",
  },
  {
    name: "Introduction to Retrieval Augmented Generation",
    issuer: "IBM",
    url: "https://skills.yourlearning.ibm.com/certificate/share/2297d0710aewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgIm9iamVjdElkIiA6ICJBTE0tQ09VUlNFXzM4MjU0NjEiLAogICJsZWFybmVyQ05VTSIgOiAiNTM5MzA2NVJFRyIKfQcb315c67df-10",
  },
  {
    name: "Ethical Considerations for Generative AI",
    issuer: "IBM",
    url: "https://skills.yourlearning.ibm.com/certificate/share/9096586d39ewogICJsZWFybmVyQ05VTSIgOiAiNTM5MzA2NVJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIk1ETC01NzEiCn0c407624db0-10",
  },
  {
    name: "Analyzing and Visualizing Data with Microsoft Power BI",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/48dd625940d1fb297ad2b613fd980511b9741e159fb3d42c8dc0f124974c24b3?trk=share_certificate",
  },
  {
    name: "Generative AI",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/06ccee9d312127ec0fd4a69d10d67099a1c389f2e57ee94b3729f1fd9c22304f?trk=share_certificate",
  },
  {
    name: "SQL",
    issuer: "LinkedIn Learning",
    url: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="w-full bg-slate-100 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Certifications & Credentials</h2>
          <p className="mt-4 text-lg text-slate-600">
            A testament to my commitment to continuous learning and professional development.
          </p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto border-t border-slate-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificationsData.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center py-6 border-b border-slate-200 group"
              variants={itemVariants}
            >
              <div>
                <span className="text-xl font-semibold text-slate-800 group-hover:underline">
                  {cert.name}
                </span>
                <p className="text-slate-500 mt-1">{cert.issuer}</p>
              </div>
              <Link size={20} className="text-slate-400 group-hover:text-slate-800 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};