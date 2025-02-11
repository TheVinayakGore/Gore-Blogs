import React from 'react';
import Hero from '@/components/Hero';
import Blogs from '@/components/Blogs';
import About from '@/components/About';
import Gallery from '@/components/Gallery';

const Page = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Gallery />
      <Blogs />
    </main>
  );
};

export default Page;