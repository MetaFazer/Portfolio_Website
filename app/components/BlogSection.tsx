'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  postUrl: string;
};

const blogPosts: Post[] = [
  {
    id: 1,
    title: "Vaultrix: A Smarter Way to Showcase Portfolios",
    description: "How I designed Vaultrix to make developer portfolios more dynamic and recruiter-friendly.",
    date: "30.08.2025",
    postUrl: "https://medium.com/@vaibhavabhishek10/vaultrix-a-smarter-way-to-showcase-developer-portfolios-d1514efeb862",
  },
  {
    id: 2,
    title: "From Codebase Companion to Codebase OS",
    description: "Rethinking developer intelligence for navigating huge unfamiliar codebases.",
    date: "30.08.2025",
    postUrl: "https://medium.com/@vaibhavabhishek10/from-codebase-companion-to-codebase-os-rethinking-developer-intelligence-d6ba5e95dad5",
  },
  {
    id: 3,
    title: "RAG: Making AI Smarter with Real Knowledge",
    description: "Exploring how Retrieval-Augmented Generation reduces hallucinations in LLMs.",
    date: "30.08.2025",
    postUrl: "https://medium.com/@vaibhavabhishek10/rag-making-ai-smarter-with-real-knowledge-a4daaa72d528",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } // smooth easeOut curve
  }
};

export const BlogSection = () => {
  return (
    <section id="blog" className="w-full bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">From the Blog</h2>
          <p className="mt-4 text-lg text-slate-600">
            Thoughts, learnings, and experiments I’ve been writing about.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Accent bar */}
              <div className="h-1.5 w-12 rounded-full bg-slate-800 mb-4 group-hover:w-16 transition-all"></div>

              {/* Text content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">
                {post.description}
              </p>
              <p className="text-xs text-slate-400">{post.date}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://medium.com/@vaibhavabhishek10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium py-3 px-6 rounded-full hover:bg-slate-800 transition-colors"
          >
            View All Posts
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
