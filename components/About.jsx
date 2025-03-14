"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <main
      id="about"
      className="flex items-center justify-center relative m-auto p-40 w-full"
    >
      {/* 🌟 About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col p-20 rounded-3xl shadow-2xl bg-white w-full"
      >
        {/* 🚀 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase text-center font-extrabold text-black"
        >
          Vinayak Gore
        </motion.h1>

        {/* 📖 Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-6 sm:mt-8 md:mt-10 flex justify-center"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-blue-600">
            <Image
              src="/vinu.png" // Replace with your profile image
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* 📖 Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-sm sm:text-base md:text-xl text-black mt-10 sm:mt-16 md:my-20 leading-relaxed text-center"
        >
          <strong className="text-sky-500 text-3xl">Welcome to Gore Blogs,</strong> a
          personal space where I share my thoughts, experiences, and reflections
          on my daily life, education, and skill development. Here, I document
          the highs and lows of my journey, from the challenges I face while
          learning new things to the joy of small victories in my everyday life.
          Each post is an opportunity for me to connect with you, whether I am
          recounting a funny incident that made me laugh or sharing insights
          from my educational pursuits. My goal is to create a relatable and
          engaging platform that resonates with readers, offering glimpses into
          the moments that shape us. Join me as I navigate through various
          topics, explore the beauty of everyday experiences, and find humor in
          life is little quirks. I hope my stories inspire you to reflect on
          your own journey and embrace the wonderful chaos of life !
        </motion.p>

        {/* 🚀 Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-7"
        >
          {[
            { label: "Blogs Published", value: "50+" },
            { label: "Readers", value: "10K+" },
            { label: "Years Writing", value: "3+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
              className="p-10 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <p className="text-3xl sm:text-7xl font-bold">
                {stat.value}
              </p>
              <p className="text-lg sm:text-2xl mt-5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🚀 Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="mt-14 sm:mt-20 flex justify-center gap-7"
        >
          {[
            {
              icon: <FaLinkedinIn className="w-7 h-7 text-blue-600" />,
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/vinayak-gore-b85b7922a",
            },
            {
              icon: <FaGithub className="w-7 h-7 text-gray-900" />,
              name: "GitHub",
              href: "https://github.com/yourusername",
            },
            {
              icon: <FaTwitter className="w-7 h-7 text-blue-400" />,
              name: "Twitter",
              href: "https://twitter.com/yourusername",
            },
          ].map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
            >
              <Button
                asChild
                className="p-7 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-5"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                >
                  {social.icon}
                  <span className="text-xl text-gray-900">{social.name}</span>
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
};

export default About;