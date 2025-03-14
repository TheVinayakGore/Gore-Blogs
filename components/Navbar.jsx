"use client";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Shadcn Button
import { BsMenuButtonWideFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Shadcn Sheet
import { IoHomeOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  // Framer Motion variants for animations
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 z-50 w-full border-b border-gray-200 dark:border-zinc-700">
      <div className="mx-auto px-3 sm:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl sm:text-2xl font-bold"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-8 sm:w-10"
          />
          <motion.span
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-gray-900 dark:text-white"
          >
            Gore Blogs
          </motion.span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden ml-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <BsMenuButtonWideFill className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-zinc-900">
              <ul className="flex flex-col space-y-4 w-full mt-6">
                {[
                  {
                    name: "Home",
                    icon: <IoHomeOutline className="h-5 w-5" />,
                    link: "/#home",
                  },
                  {
                    name: "About",
                    icon: <SlUser className="h-5 w-5" />,
                    link: "/#about",
                  },
                  {
                    name: "Blogs",
                    icon: <TfiWrite className="h-5 w-5" />,
                    link: "/#blogs",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-start gap-3 p-3 text-base"
                      asChild
                    >
                      <Link href={item.link}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </Button>
                  </motion.li>
                ))}
              </ul>

              {/* Dark Mode Toggle Button */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full mt-4"
              >
                <Button
                  variant="ghost"
                  className="w-full flex justify-center items-center gap-3 p-3 text-base"
                  onClick={toggleTheme}
                >
                  {isDark ? (
                    <>
                      <SunIcon className="h-6 w-6" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-6 w-6" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-5">
          {["Home", "About", "Blogs"].map((item, index) => (
            <motion.li
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/#${item.toLowerCase()}`}
                className="py-2 px-4 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {isDark ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </Button>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;