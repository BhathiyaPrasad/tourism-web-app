'use client'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Image from 'next/image'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import test from '../../../public/assets/sigiriya.jpg'
import LoadingEvent from './Loading'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import style from './embla.module.css'

type PropType = {
  options?: EmblaOptionsType
}

type eventData = {
id:string;
name:string;
hide:boolean;
date:string;
time:string;
location:string;
}

const SriLankaEventsCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [eventData, setEventData] = useState<eventData[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const autoplay = useCallback(() => {
    if (!emblaApi) return
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext()
    } else {
      emblaApi.scrollTo(0)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    autoplayRef.current = setInterval(autoplay, 5000) // Autoplay every 3 seconds

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }


  }, [emblaApi, onSelect, autoplay])

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as eventData ));
        setEventData(data);
      } catch (error) {
        console.error("Error In Fetching Special Events Data", error);
      } finally {
        setLoading(false)
      }



    }
    fetchEventsData();
  },[])











const events = [
  { title: "Vesak Festival", date: "May 26, 2024", location: "Colombo", time: "All day" },
  { title: "Kandy Esala Perahera", date: "August 5-15, 2024", location: "Kandy", time: "Evening" },
  { title: "Galle Literary Festival", date: "January 24-28, 2025", location: "Galle", time: "Various times" },
  { title: "Ramayana", date: "January 24-28, 2025", location: "Jaffna", time: "Various times" }
]

if (loading) {
  return <LoadingEvent />
}



return (
  <div>
    <div className={style.container}>
      <div className="embla p-4 bg-gradient-to-r rounded-xl shadow-lg">

        <div className="relative">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {eventData.map((event, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        className="embla__slide__img"
                        src={test}
                        alt={event.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4 ml-2">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.name}</h3>
                      <div className="flex items-center mb-1">
                        <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-600">{event.date}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-sm text-gray-600">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 mr-2 text-red-500" />
                        <span className="text-sm text-gray-600">{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === selectedIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)
}

export default SriLankaEventsCarousel
