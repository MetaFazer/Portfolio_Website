// app/components/AboutSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Image from 'next/image';
import profilePic from './photos/Pic_abhishek.jpeg';

export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          className="bg-white shadow-sm rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* LEFT COLUMN → Profile Card */}
          <div className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-md h-full lg:col-span-1">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
  <Image
    src={profilePic} // <-- IMPORTANT: Change this to your image's filename
    alt="A photo of Abhishek Singh"
    fill
    className="object-cover"
  />
</div>
            <h3 className="text-3xl font-semibold text-slate-900">Abhishek Singh</h3>
            <p className="text-slate-500 mb-8 text-lg">CS Student • Web Developer</p>
            <div className="flex flex-col gap-5 w-full text-left text-base">
              <a href="https://www.linkedin.com/in/abhishekksingh10"  target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <Linkedin size={24} className="text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/MetaFazer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-black transition-colors">
                <Github size={24} className="text-slate-400" />
                <span>GitHub</span>
              </a>
              <a href="mailto:vaibhavabhishek10@gmail.com" className="flex items-center gap-3 hover:text-red-600 transition-colors break-all">
                <Mail size={24} className="text-slate-400" />
                <span>vaibhavabhishek10@gmail.com</span>
              </a>
              <a href="tel:+917678301565" className="flex items-center gap-3 hover:text-green-600 transition-colors">
                <Phone size={24} className="text-slate-400" />
                <span>+91 76783 01565</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-slate-400" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN → Storytelling Block */}
          <div className="lg:col-span-2 space-y-6 text-slate-700 text-lg leading-relaxed">
            
            {/* The "About Me" heading is now here */}
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About Me
            </h2>

            <p>
  Hey! I’m <span className="font-semibold">Abhishek</span> — a 3rd-year Computer Science student who loves turning half-baked ideas into things you can actually click on. 
  I’ve built <span className="font-semibold">AI apps</span> that roast your movie and series choices, a website to create your own portfolio, 
  and tools that make life a little less boring.
</p>
<p>
  Right now, I’m vibecoding my way through <span className="font-semibold">React, Next.js, Express, and Tailwind</span>, 
  while also sharpening my <span className="font-semibold">DSA skills in C++</span>. 
  On the AI side, I’ve been diving deep into <span className="font-semibold">RAG</span> and <span className="font-semibold">agentic systems</span> — 
  not just answering questions, but making models act, reason, and adapt.
</p>

<p>
  Beyond code, I’m curious about <span className="font-semibold">systems thinking, storytelling</span>, 
  and the little details that make tech feel human. 
  I thrive in spaces where <span className="font-semibold">experimentation</span> is encouraged, 
  and I enjoy collaborating with people who bring wild ideas to the table.
</p>
<p>
  At the end of the day, I see <span className="font-semibold">code</span> as a medium for creativity — 
  a way to build things that surprise, delight, and maybe even inspire.
</p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};