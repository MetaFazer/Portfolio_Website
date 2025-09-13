// app/components/Footer.tsx
'use client';

import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 py-8">
      <div className="container mx-auto text-center text-slate-500 text-sm">
        <p>&copy; {currentYear} • Built by Abhishek Kumar Singh</p>
      </div>
    </footer>
  );
};