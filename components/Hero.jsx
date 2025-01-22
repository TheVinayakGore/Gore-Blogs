"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  const imageSlider = ["/card1.png", "/card2.png", "/card3.png", "/card4.png"];

  return (
    <>
      <div className="animate-fade flex flex-col items-center w-full">
        <div className="flex flex-col items-center justify-center space-y-3 py-20 w-full h-full">
          <h2 className="text-[2rem] sm:text-[6rem] lg:text-[10rem] xl:text-[14rem] bg-clip-text text-transparent bg-gradient-to-b from-black to-zinc-500 dark:from-white dark:to-zinc-500 font-extrabold">
            Gore Blogs
          </h2>
          <div className="flex flex-col items-center text-center space-y-3">
            <p className="mt-4 text-[0.7rem] sm:text-[1rem] lg:text-[1.2rem] px-10 sm:px-0 w-full sm:w-[35rem] md:w-[45rem] lg:w-[60rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dolorum architecto perferendis minima inventore voluptate repellat
              debitis cumque fuga explicabo.
            </p>
            <Button
              className="mt-6 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 w-24 sm:w-28"
              asChild
            >
              <Link href="/#blogs" className="">
                Start Reading
              </Link>
            </Button>
          </div>
        </div>
        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent>
            {imageSlider.map((item) => (
              <CarouselItem
                key={item}
                className="h-[15rem] sm:h-[20rem] md:h-[30rem] xl:h-[40rem]"
              >
                <Image
                  src={item}
                  alt="cards"
                  width={5000}
                  height={5000}
                  priority
                  className="absolute z-0 border-b border-zinc-500 w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
