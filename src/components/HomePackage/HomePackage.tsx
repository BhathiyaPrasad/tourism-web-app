'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import productImage from '../../../public/assets/sigiriya.jpg'
import { db } from "@/lib/firebase";
import { getDocs, collection, query , where , limit } from "firebase/firestore";
import LoadingCard from "./LoadingCard";
import Styles from './Home.module.css'
type Package = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  
};


const OrganizationID = 'packages';

const HomePackage = ({ limits }: { limits: number }) => {
  const [packages, setPackages] = useState<Package[]>([]); // State to store fetched packages
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = collection(db, OrganizationID)
        const itemsQuery = query (
          itemsRef,
          where("hide" , "==" , false),
          limit(limits)
        );
        const querySnapshot = await getDocs(itemsQuery);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Package));
        setPackages(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchData(); // Call fetchData when the component mounts
  });
  if (loading) {
    return <LoadingCard />
  }
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-22 mb-8 mx-auto z-10">
        <div className="flex flex-wrap -m-4">
          {/* Dynamically render cards based on fetched data */}
          {packages.map((pkg) => (
            <div key={pkg.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={productImage}
                  alt={pkg.name}
                  width={500}
                  height={300}
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{pkg.category}</h2>
                  <h1 className="title-font text-xl font-semibold text-gray-800 mb-3">{pkg.name}</h1>
                  <p className="leading-relaxed text-gray-700 mb-3">{pkg.description}</p>
                  <div className="flex items-center flex-wrap">
                  <div className="ml-auto md:text-sm lg:text-base xl:text-lg">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-2 rounded md:w-full lg:w-full xl:w-48">View Details</button>
                    </div>
                    <div className="text-lg font-bold text-gray-800">{pkg.price}</div>
                    <div className="ml-auto md:text-sm lg:text-base xl:text-lg">
  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-2 rounded md:w-full lg:w-full xl:w-48">Book Now</button>
</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePackage;