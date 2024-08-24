"use client";

import React from "react";
import Image from "next/image";
import slider01 from '../../../../public/assets/sigiriya.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './slider.css';
import { useEffect } from "react";
import Fade from 'embla-carousel-fade';

export default function Slider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Fade()] );

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {/* <div className="embla__slide"> <Image src={slider01} width={500} height={200} alt="First slide"></Image></div> */}
                {/* <div className="embla__slide"><Image src={slider01} width={500} height={200} alt="First slide"></Image></div> */}
                {/* <div className="embla__slide"><Image src={slider01} width={500} height={200} alt="First slide"></Image></div> */}

                <div className="embla__slide">
                    <video autoPlay loop muted width="100%">
                        <source src="/viedeos/viedeo1 (1).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="embla__slide">
                    <video autoPlay loop muted width="100%">
                        <source src="/viedeos/viedeo1 (2).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="embla__slide">
                    <video autoPlay loop muted width="100%">
                        <source src="/viedeos/viedeo1 (3).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="embla__slide">
                    <video autoPlay loop muted width="100%">
                        <source src="/viedeos/viedeo1 (4).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="embla__slide">
                    <video autoPlay loop muted width="100%">
                        <source src="/viedeos/viedeo1 (6).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="embla__slide">
                    <video autoPlay loop muted width="100%">
                        <source src="/viedeos/viedeo1 (7).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}
