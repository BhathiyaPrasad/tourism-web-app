'use client'
import React, { useState, useCallback, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Image from 'next/image'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import test from '../../../public/assets/sigiriya.jpg'

type PropType = {
  options?: EmblaOptionsType
}

const SriLankaEventsCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const events = [
    { title: "Vesak Festival", date: "May 26, 2024", location: "Colombo", time: "All day" },
    { title: "Kandy Esala Perahera", date: "August 5-15, 2024", location: "Kandy", time: "Evening" },
    { title: "Galle Literary Festival", date: "January 24-28, 2025", location: "Galle", time: "Various times" }
  ]

  return (
    <div className="embla p-4 bg-gradient-to-r  rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Upcoming and Ongoing Events in Sri Lanka</h2>
      <div className="relative">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {events.map((event, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 mr-4 last:mr-0">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      className="embla__slide__img"
                      src={test}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{event.title}</h3>
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="w-5 h-5 mr-3 text-blue-500" />
                      <span className="text-md text-gray-600">{event.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="w-5 h-5 mr-3 text-green-500" />
                      <span className="text-md text-gray-600">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-5 h-5 mr-3 text-red-500" />
                      <span className="text-md text-gray-600">{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition-opacity duration-300 ${
            prevBtnEnabled ? 'opacity-100 hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <FaChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition-opacity duration-300 ${
            nextBtnEnabled ? 'opacity-100 hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <FaChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              index === selectedIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default SriLankaEventsCarousel