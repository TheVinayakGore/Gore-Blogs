import React from 'react';
import Hero from '@/components/Hero';
import Blogs from '@/components/Blogs';
import About from '@/components/About';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Blogs />
    </main>
  );
};

export default Page;