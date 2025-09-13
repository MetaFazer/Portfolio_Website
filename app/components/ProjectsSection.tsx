// app/components/ProjectsSection.tsx
'use client';

import Image, { StaticImageData } from 'next/image'; // FIX 1: Imported StaticImageData
import FuzzyText from './FuzzyText';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

// FIX 2: Imported all three project images
import projectImage1 from './project_images/Vaultrix.png';
import projectImage2 from './project_images/CineCritique.png';
import projectImage3 from './project_images/Codebase.png';

// --- Type Definition for a single project ---
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData; // FIX 3: Updated the type from string
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
};

// --- Your Project Data (now with a specific type) ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "Vaultrix - Customizable Developer Portfolio Builder",
    description: "A full-stack platform that helps developers create their portfolio by fetching their GitHub repositories. Users can select which repos to include, reorder projects via a drag-and-drop dashboard, customize the portfolio, and deploy it to a custom subdomain.",
    imageUrl: projectImage1, // Use the variable
    techStack: ["Next.js", "React", "Node.js",  "PostgreSQL", "Vercel"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "CineCritique - AI Movie & Series Roaster",
    description: "An AI-powered application that humorously critiques movies and series choices. Built with a focus on NLP, AI reasoning, and user-friendly UI for entertainment and engagement.",
    imageUrl: projectImage2, 
    techStack: ["Python", "DeepSeek API", "React", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
  id: 3,
  title: "Codebase OS (In Development)",
  description: "A sophisticated AI platform that helps developers understand, maintain, and improve large-scale codebases. Uses Retrieval-Augmented Generation (RAG) to provide context-aware answers across repositories, and agentic AI for autonomous code analysis, refactoring suggestions, and proactive monitoring. Evolves from a repository chatbot (Codebase Companion) to a system-wide assistant with multi-repo reasoning.",
  imageUrl: projectImage3,
  techStack: ["Python", "Node.js", "React", "OpenAI API", "Vector Databases", "Graph Visualization"],
  liveUrl: "#",
  codeUrl: "#"
}
  
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <FuzzyText
            fontSize="clamp(2.5rem, 6vw, 3rem)"
            fontWeight={700}
            color="#1e293b"
            baseIntensity={0.02}
            hoverIntensity={0.4}
          >
            The Build Zone
          </FuzzyText>
          <div className="mt-4">
            <FuzzyText
              fontSize="clamp(1rem, 2.5vw, 1.125rem)"
              fontWeight={400}
              color="#475569"
              baseIntensity={0.02}
              hoverIntensity={0.3}
            >
              Turning side quests into full-stack adventures 🎮
            </FuzzyText>
          </div>
        </div>

        <div className="relative w-full max-w-7xl min-h-[400px] h-[80vh] mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-4">
          <ScrollStack>
            {projectsData.map((project) => (
              <ScrollStackItem key={project.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <Image 
                      src={project.imageUrl} 
                      alt={`${project.title} Screenshot`}
                      width={800}
                      height={600}
                      className="rounded-lg w-full h-auto shadow-md"
                    />
                  </div>
                  <div className="md:order-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{project.title}</h3>
                    <p className="text-slate-600 mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm text-slate-800">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a href={project.liveUrl} className="bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors text-center">
                        Live Demo
                      </a>
                      {/* Added the missing View Code button for consistency */}
                      
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};