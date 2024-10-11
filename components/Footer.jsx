import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between bg-black text-white p-5 px-10 w-full">
          <p className="text-zinc-300 font-light">&copy; 2023 Gore Blogs. All rights are reserved.</p>
          <div className="flex justify-center space-x-2">
            <Link href="/" className="text-gray-400 text-xl p-2 rounded-full bg-zinc-800 hover:bg-blue-500 hover:text-white transition duration-300"><FaFacebookF /></Link>
            <Link href="/" className="text-gray-400 text-xl p-2 rounded-full bg-zinc-800 hover:bg-blue-500 hover:text-white transition duration-300"><FaXTwitter /></Link>
            <Link href="/" className="text-gray-400 text-xl p-2 rounded-full bg-zinc-800 hover:bg-blue-500 hover:text-white transition duration-300"><FaInstagram /></Link>
          </div>
      </footer>
    </>
  );
};

export default Footer;