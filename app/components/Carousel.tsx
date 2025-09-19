"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Slide {
  image: string;
  text: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, delay);
    return () => resetTimeout();
  }, [currentIndex, slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform ease-linear duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="inline-block h-64 w-full relative"
            style={{ minWidth: "100%" }}
          >
            <Image
              src={slide.image}
              fill
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
              <div className="flex flex-col items-center text-center max-w-[600px]">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
                  {slide.text}
                </h2>

                <p className="text-gray-200 text-sm sm:text-base whitespace-normal break-words leading-relaxed">
                  Shop your favorite gadgets, clothes, and household items and
                  accessories on our platform and discover amazing deals for you
                  and your family.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
