import React from 'react';
import Hero from '@/components/Hero';
import Blogs from '@/components/Blogs';
import About from '@/components/About';
import Gallery from '@/components/Gallery';

const Page = () => {
  return (
    <main className="flex flex-col items-center py-40 relative">
      {/* 🔥 Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[90vw] h-[90vw] bg-violet-200 dark:bg-violet-950 opacity-40 blur-[150px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/2 w-[70vw] h-[70vw] bg-violet-200 dark:bg-violet-950 opacity-50 blur-[120px] translate-x-1/2"></div>
      </div>
      <Hero />
      <About />
      <Gallery />
      <Blogs />
    </main>
  );
};

export default Page;