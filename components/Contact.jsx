import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <main
        id="contact"
        className="p-5 sm:p-10 md:p-14 lg:p-20 xl:p-24 border-t border-zinc-200 dark:border-zinc-800 w-full h-screen"
      >
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center space-y-10 md:space-y-0 xl:space-x-10 p-5 sm:p-7 border border-zinc-300 dark:border-zinc-800 rounded-xl">
          <div className="w-full h-full">
            <Image
              src="/card1.png"
              alt="Image"
              width={2000}
              height={2000}
              priority
              className="mt-5 xl:mt-0 h-full rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-xl w-full"
            />
          </div>
          <form className="flex flex-col w-full xl:w-1/2 h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">
              Get in Touch
            </h1>
            <div className="py-5 w-full h-full">
              <Input
                type="text"
                placeholder="Full Name"
                className="py-5 border-b-0 rounded-b-none text-sm md:text-base"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="py-5 rounded-none text-sm md:text-base"
              />
              <Textarea
                placeholder="Your Message"
                rows={1}
                className="py-5 border-t-0 rounded-t-none text-sm md:text-base"
              />
            </div>
            <Button
              type="submit"
              className="py-5 px-5 md:px-20 text-sm md:text-base w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;