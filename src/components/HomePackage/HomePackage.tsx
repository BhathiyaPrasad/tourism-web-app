'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import productImage from '../../../public/assets/sigiriya.jpg'
import { db } from "@/lib/firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
import LoadingCard from "./LoadingCard";
import Styles from './Home.module.css';
import {useRouter} from "next/navigation";




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
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = collection(db, OrganizationID);
        const itemsQuery = query(
          itemsRef,
          where("hide", "==", false),
          limit(limits)
        );
        const querySnapshot = await getDocs(itemsQuery);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Package));
        setPackages(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, [limits]); // Add limits as a dependency

  if (loading) {
    return <LoadingCard />;
  }
  const handleClick = () => {

    router.push('packages/data.id') 
    


  }

  return (
    <section className="text-gray-600 body-font bg-white">
      <div className={`${Styles.container} container`}>
        <div className="flex flex-wrap -m-4">
          {/* Dynamically render cards based on fetched data */}
          {packages.map((pkg) => (
            <div key={pkg.id} className="p-4 md:w-1/3">
              <div className={`${Styles.card} h-full`}>
                <Image
                  className={Styles.image}
                  src={productImage}
                  alt={pkg.name}
                  width={500}
                  height={300}
                />
                <div className="p-4">
                  <h2 className={Styles.title}>{pkg.category}</h2>
                  <h1 className={Styles.heading}>{pkg.name}</h1>
                  <p className={Styles.description}>{pkg.description}</p>
                  <div className={Styles.flex}>
                    <div className={Styles.price}>{pkg.price}</div>
                    <div className="ml-auto md:text-sm lg:text-base xl:text-lg text-center">
                      <button className={Styles.buttonView} onClick={handleClick}>View Details</button>
                      <button className={Styles.button}>Book Now</button>
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
