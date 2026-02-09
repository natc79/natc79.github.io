"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: install lucide-react

interface PhotoCarouselProps {
  images: string[];
}

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // Scroll functions
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      {/* Viewport */}
      <div className="overflow-hidden rounded-xl bg-slate-100" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-[500px] md:h-[600px] bg-black"
            >
              <Image
                src={src}
                alt={`Travel photo ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-w-768px) 100vw, 800px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only visible on hover for a cleaner look */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-slate-900 dark:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-slate-900 dark:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Counter Overlay */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
        {images.length} Photos
      </div>
    </div>
  );
}
