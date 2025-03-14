"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn Card
import { FaRocket, FaBookOpen, FaUsers } from "react-icons/fa"; // Icons

const Hero = () => {
  return (
    <main className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 🌟 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8"
      >
        {/* 🚀 Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-xl pb-10"
        >
          Gore Blogs
        </motion.h1>

        {/* 📖 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="text-lg sm:text-2xl max-w-5xl mx-auto mt-6 tracking-wide leading-relaxed"
        >
          Dive into a world of{" "}
          <span className="text-blue-500 font-semibold">
            personal stories, travel adventures, career insights,
          </span>{" "}
          and{" "}
          <span className="text-purple-500 font-semibold">
            cutting-edge technology.
          </span>{" "}
          Join a community of passionate learners and creators.
        </motion.p>

        {/* 🚀 Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            className="bg-blue-600 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            asChild
          >
            <Link href="/#blogs">
              <FaBookOpen className="mr-2" />
              Start Reading
            </Link>
          </Button>

          <Button
            className="bg-purple-600 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-purple-700 hover:scale-105"
            asChild
          >
            <Link href="/contact">
              <FaUsers className="mr-2" />
              Join Community
            </Link>
          </Button>
        </motion.div>

        {/* ⭐ Featured Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[
            {
              icon: <FaRocket className="h-8 w-8 text-blue-600" />,
              title: "Daily Insights",
              description: "Get the latest updates on technology and trends.",
            },
            {
              icon: <FaBookOpen className="h-8 w-8 text-purple-600" />,
              title: "Curated Content",
              description: "Handpicked articles for your learning journey.",
            },
            {
              icon: <FaUsers className="h-8 w-8 text-indigo-600" />,
              title: "Community Driven",
              description: "Join discussions and share your knowledge.",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full">
                  {card.icon}
                </div>
                <CardTitle className="mt-4 text-xl font-bold text-gray-900">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>

      {/* 📸 Animated Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 w-full max-w-6xl my-16 sm:my-24"
      >
        <Image
          src="/card.png"
          alt="Gore Blogs"
          width={1200}
          height={600}
          className="w-full h-full rounded-3xl shadow-2xl shadow-purple-500"
        />
      </motion.div>
    </main>
  );
};

export default Hero;
