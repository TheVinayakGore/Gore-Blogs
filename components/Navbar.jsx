"use client";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoHomeOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";

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

  return (
    <nav className="fixed top-0 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 z-50 w-full">
      <div className="mx-auto px-3 sm:px-10 py-2 flex justify-between items-center">
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
          <span>Gore Blogs</span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden ml-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-2xl">
                <BsMenuButtonWideFill />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <ul className="flex flex-col space-y-4">
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
                  <li key={index}>
                    <Button
                      variant="outline"
                      className="p-6 text-base w-40 flex items-center justify-start gap-3"
                      asChild
                    >
                      <Link href={item.link}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>

              {/* Dark Mode Toggle Button */}
              <Button
                variant="outline"
                className="w-40 flex justify-center items-center text-base p-6"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                {isDark ? (
                  <>
                    <SunIcon className="h-6 w-6 mr-3" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="h-6 w-6 mr-3" />
                    <span>Dark Mode</span>
                  </>
                )}
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-5">
          {["Home", "About", "Blogs"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="py-2 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 transition-all duration-300"
            >
              {isDark ? (
                <SunIcon className="h-10 w-10 p-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-800 rounded-full transition-all duration-300" />
              ) : (
                <MoonIcon className="h-10 w-10 p-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-800 rounded-full transition-all duration-300" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
