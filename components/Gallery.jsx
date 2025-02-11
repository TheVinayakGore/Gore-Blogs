"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  const imageSlider = ["/card1.png", "/card2.png", "/card3.png", "/card4.png"];

  return (
    <>
      <main className="w-full h-screen">
        <Carousel plugins={[plugin.current]} className="w-full h-full">
          <CarouselContent>
            {imageSlider.map((item) => (
              <CarouselItem
                key={item}
                className="h-screen"
              >
                <Image
                  src={item}
                  alt="cards"
                  width={6000}
                  height={6000}
                  priority
                  className="absolute z-0 border-b border-zinc-500 w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
    </>
  );
};

export default Gallery;
