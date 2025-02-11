"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="relative w-full min-h-screen p-36 pb-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* 🔥 Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[90vw] h-[90vw] bg-blue-500 dark:bg-purple-500 opacity-40 blur-[150px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/2 w-[70vw] h-[70vw] bg-indigo-400 dark:bg-blue-600 opacity-50 blur-[120px] translate-x-1/2"></div>
      </div>

      {/* 🌟 Animated Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center w-full"
      >
        {/* 🚀 Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-[5rem] sm:text-[9rem] lg:text-[11rem] xl:text-[13rem] leading-none py-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-black to-zinc-600 dark:from-white dark:to-zinc-500 drop-shadow-xl whitespace-nowrap w-full"
        >
          Gore Blogs
        </motion.h1>

        {/* 📖 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="text-[1rem] sm:text-[1.4rem] text-gray-800 dark:text-gray-300 max-w-4xl mx-auto mt-5 tracking-wide leading-relaxed"
        >
          Explore{" "}
          <span className="text-blue-600 dark:text-blue-400">
            personal stories, travel experiences, career insights,
          </span>{" "}
          and
          <span className="text-cyan-700 dark:text-cyan-400">
            {" "}
            the latest in technology.
          </span>
          A curated space for{" "}
          <span className="text-purple-600 dark:text-purple-400">
            thoughtful discussions and valuable knowledge sharing.
          </span>
        </motion.p>

        {/* 🚀 Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            className="bg-blue-600 dark:bg-blue-500 text-white p-7 px-10 text-xl font-medium rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105"
            asChild
          >
            <Link href="/#blogs">Start Reading 📚</Link>
          </Button>

          <Button
            className="bg-gray-800 dark:bg-gray-700 text-white p-7 px-10 text-xl font-medium rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-900 dark:hover:bg-gray-600 hover:scale-105"
            asChild
          >
            <Link href="/contact">Join Community 💬</Link>
          </Button>
        </motion.div>

        {/* ⭐ Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
          className="mt-28 py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full flex flex-wrap items-center justify-center text-xl font-semibold gap-6 w-full"
        >
          <div className="">
            ⭐ Over{" "}
            <span className="text-green-500">50,000+</span>{" "}
            readers worldwide
          </div>
          <div className="">
            🎓 Learn from **Expert Developers
          </div>
          <div className="">
            🔥 Daily Updated Content
          </div>
        </motion.div>
      </motion.div>

      {/* 📸 Animated Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 100 }}
        transition={{ duration: 7, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 w-full"
      >
        <Image
          src="/card.png"
          alt="Gore Blogs"
          width={1200}
          height={600}
          className="w-full h-full rounded-3xl shadow-2xl shadow-purple-700"
        />
      </motion.div>
    </main>
  );
};

export default Hero;
