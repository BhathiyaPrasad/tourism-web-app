'use client'
import React from "react";
import Image from "next/image";
 import product from '../../../../public/assets/sigiriya.jpg';
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import LoadingGallery from "./LoadingGallery";
import { getDocs, collection, limit, query } from "firebase/firestore";

type gData = {
  id: string;
  location: string;
  place: string;
  name: string;
  description: string

}
 interface GalleryProps {
  Gallerylimits :number;
}



const Gallery: React.FC = ({Gallerylimits}:GalleryProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [gData, setGData] = useState<gData[]>([]);

  useEffect(() => {                                      // this useEffect function realtimely  retrieves the data from the databse
    const fetchGalleryData = async () => {
      try {
        const itemsRef = collection(db, 'gallery');
        const itemsQuery = query(
          itemsRef,
          limit(Gallerylimits)
        );
        const querySnapshot = await getDocs(itemsQuery);
        const galleryData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as gData));
        setGData(galleryData);

      } catch (error) {
        console.error("Error In Fetching Data:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchGalleryData()
  }, [Gallerylimits]);
  if (loading) {
    return <LoadingGallery />
  }

  return (
    <>
      <section className="text-gray-600 body-font bg-white z-10">
        <div className="container px-2 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
          </div>
          <div className="flex flex-wrap -m-4">
            {gData.map((gallery, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-105">
                <div className="flex relative">
                  <Image
                    width={400} height={300}
                    alt={`gallery-${index}`}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-in-out hover:opacity-70"
                    src={product}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      {gallery.location}
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                      {gallery.place}
                    </h1>
                    <p className="leading-relaxed text-gray-600">
                      {gallery.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>)
}
export default Gallery;
