import React from 'react';
import Hero from '@/components/Hero';
import Blogs from '@/components/Blogs';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Page = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Blogs />
      <Contact />
    </main>
  );
};

export default Page;