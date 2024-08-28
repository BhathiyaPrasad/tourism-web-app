"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Fade from 'embla-carousel-fade';
import './slider.css';

const videos = [
  { src: "/viedeos/viedeo1 (6).webm", topic: "" },
  { src: "/viedeos/viedeo1 (2).webm", topic: "Discover Pristine Beaches" },
  { src: "/viedeos/viedeo1 (3).webm", topic: "Experience Rich Cultural Heritage" },
  { src: "/viedeos/viedeo1 (4).webm", topic: "Adventure in Lush Landscapes" },
  { src: "/viedeos/viedeo1 (1).webm", topic: "Taste Exotic Culinary Delights" },
  { src: "/viedeos/viedeo1 (7).webm", topic: "Encounter Diverse Wildlife" },
];

const options: EmblaOptionsType = { loop: true };

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('select', () => onSelect(emblaApi));
    emblaApi.on('reInit', () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videos.map((video, index) => (
            <div className="embla__slide" key={index}>
              <video autoPlay loop muted width="100%">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
      <div className="embla__topic">
        <h2>{videos[currentIndex].topic}</h2>
      </div>
    </div>
  );
}