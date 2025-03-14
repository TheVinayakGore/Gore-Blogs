"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const Gallery = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 15000, stopOnInteraction: true })
  );

  const imageSlider = [
    {
      image: "/card1.png",
      title: "Nature's Beauty",
      description:
        "Immerse yourself in the breathtaking landscapes of untouched nature. From lush forests to serene lakes, experience the tranquility of the wild.",
    },
    {
      image: "/card2.png",
      title: "Urban Vibes",
      description:
        "Discover the vibrant energy of city life. Explore bustling streets, modern architecture, and the colorful culture of urban landscapes.",
    },
    {
      image: "/card3.png",
      title: "Adventure Awaits",
      description:
        "Embark on thrilling adventures in the great outdoors. From mountain hikes to desert treks, find your next adrenaline rush.",
    },
    {
      image: "/card4.png",
      title: "Tranquil Waters",
      description:
        "Relax by the calming waters of pristine beaches and tranquil lakes. Let the soothing waves wash away your worries.",
    },
  ];

  return (
    <main className="w-full h-full relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="py-40">
          {imageSlider.map((item) => (
            <CarouselItem
              key={item.image}
              className="relative min-h-screen w-full my-60 flex items-center justify-center"
            >
              <motion.div
                initial={{
                  scale: 0.3,
                  opacity: 0.5,
                  rotateZ: 0,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  rotateZ: 360,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 3 }}
                className="absolute inset-0 flex items-center justify-center z-20 w-auto h-auto"
              >
                <BackgroundGradient className="p-6 sm:p-8 md:p-10 rounded-4xl h-auto">
                  <Card className="bg-transparent border-none shadow-none">
                    <CardHeader>
                      <CardTitle className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-lg sm:text-xl md:text-2xl text-white/80 mt-4 max-w-2xl">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-start mt-20 gap-14 w-[80rem]">
                      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={2000}
                          height={2000}
                          className="w-full"
                          priority
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-black rounded-lg font-medium text-lg hover:bg-gray-100 transition-all"
                      >
                        Learn More
                      </motion.button>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default Gallery;
