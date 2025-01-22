import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="body-font">
      <div className="px-10 py-5 mx-auto flex flex-wrap items-center justify-between border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className="flex title-font font-medium items-center justify-center md:justify-start"
        >
          <Image
            src="/logo.png"
            alt="blog"
            width={720}
            height={400}
            className="h-10 w-auto object-cover object-center"
          />
          <span className="ml-3 text-2xl font-bold text-blue-500 whitespace-nowrap">
            Gore Blogs
          </span>
        </Link>
        <p className="text-sm text-zinc-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} All Rights Reserved |
          <Link
            href="https://twitter.com/knyttneve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 ml-1"
          >
            @vinayakgore
          </Link>
        </p>
        <span className="inline-flex items-center space-x-2 mt-4 md:mt-0 justify-center">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="transition hover:scale-125 w-10 h-10"
          >
            <Link href="/" target="_blank" rel="noopener">
              <FaFacebookF className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="transition hover:scale-125 w-10 h-10"
          >
            <Link href="/" target="_blank" rel="noopener">
              <RiTwitterXFill className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="transition hover:scale-125 w-10 h-10"
          >
            <Link href="/" target="_blank" rel="noopener">
              <FaInstagram className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="transition hover:scale-125 w-10 h-10"
          >
            <Link href="/" target="_blank" rel="noopener">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </Button>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
