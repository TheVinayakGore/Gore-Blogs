"use client";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 backdrop-blur-sm bg-white/[0.8] dark:bg-zinc-900/[0.8] text-zinc-600 dark:text-zinc-300 z-50 w-full">
      <div className="mx-auto px-3 sm:px-10 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-1 sm:space-x-2 text-xl sm:text-2xl text-black dark:text-white font-bold"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            priority
            className="w-8 sm:w-10"
          />
          <span>Gore Blogs</span>
        </Link>
        <div className="flex items-center">
          <div className="md:hidden ml-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-2xl text-black dark:text-white"
                >
                  {!isOpen && <BsMenuButtonWideFill />}
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col items-start">
                <ul className="flex flex-col items-start justify-start space-y-3">
                  <li>
                    <Button
                      variant="outline"
                      className="py-5 px-6 rounded-lg shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition hover:scale-105"
                      asChild
                    >
                      <Link href="/" className="w-36">
                        Home
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      className="py-5 px-6 rounded-lg shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition hover:scale-105"
                      asChild
                    >
                      <Link href="/#about" className="hover:text-white w-36">
                        About
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      className="py-5 px-6 rounded-lg shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition hover:scale-105"
                      asChild
                    >
                      <Link href="/#blogs" className="hover:text-white w-36">
                        Blogs
                      </Link>
                    </Button>
                  </li>
                </ul>
                <SheetFooter>
                  <DropdownMenu className="hidden sm:flex">
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center justify-between py-5 w-36"
                      >
                        <div className="flex">
                          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </div>
                        <span>Dark Mode</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-5 text-white ${
            !setIsOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link
              href="/"
              className="py-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="py-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#blogs"
              className="py-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
            >
              Blogs
            </Link>
          </li>
          {!isOpen && (
            <DropdownMenu className="hidden sm:flex">
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] text-black dark:text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] text-black dark:text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
