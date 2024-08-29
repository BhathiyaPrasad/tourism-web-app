'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import productImage from '../../../public/assets/sigiriya.jpg';
import { db } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore";
import LoadingCard from "../loading/LoadingCard";

type Package = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
};

const OrganizationID = 'packages';

const HomePackage = () => {
  const [packages, setPackages] = useState<Package[]>([]); // State to store fetched packages
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, OrganizationID));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Package));
        setPackages(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []);
if (loading) {
  return <LoadingCard/>
}
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-22 mx-auto z-10">
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
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{pkg.category}</h2>
                  <h1 className="title-font text-xl font-semibold text-gray-800 mb-3">{pkg.name}</h1>
                  <p className="leading-relaxed text-gray-700 mb-3">{pkg.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a href="#" className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 font-medium">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg> 1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg> 6
                    </span>
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
