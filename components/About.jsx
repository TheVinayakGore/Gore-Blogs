import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <>
      <main
        id="about"
        className="flex items-start py-40 max-w-7xl mx-auto"
      >
        <section className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-xl shadow-xl w-full h-full">
          <h1 className="text-start text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            About
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-500 my-10">
            <strong className="text-blue-500">Welcome to Gore Blogs,</strong> a
            personal space where I share my thoughts, experiences, and
            reflections on my daily life, education, and skill development.
            Here, I document the highs and lows of my journey, from the
            challenges I face while learning new things to the joy of small
            victories in my everyday life. Each post is an opportunity for me to
            connect with you, whether I am recounting a funny incident that made
            me laugh or sharing insights from my educational pursuits. My goal
            is to create a relatable and engaging platform that resonates with
            readers, offering glimpses into the moments that shape us. Join me
            as I navigate through various topics, explore the beauty of everyday
            experiences, and find humor in life is little quirks. I hope my
            stories inspire you to reflect on your own journey and embrace the
            wonderful chaos of life !
          </p>
          <div className="flex items-center space-x-3 w-full">
            <Button
              asChild
              variant="outline"
              className="px-2 pr-4 rounded-lg dark:bg-zinc-800 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition hover:scale-105"
            >
              <Link
                href="https://www.linkedin.com/in/vinayak-gore-b85b7922a"
                className="flex items-center space-x-3 py-6"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedinIn className="p-1 bg-black text-white dark:bg-white dark:text-black rounded-[2px] w-7 h-7" />
                <span className="text-lg">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
