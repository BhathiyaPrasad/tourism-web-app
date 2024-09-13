'use client'
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { db } from "@/lib/firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
import LoadingCard from "./LoadingCard";
import Styles from './Home.module.css';
import { useRouter } from "next/navigation";
import productImage from './../../../public/assets/colombo/1.jpg';

// Import specific images
import img1 from './../../../public/assets/colombo/1.jpg';
import img2 from './../../../public/assets/hill/5.jpg';
import img3 from './../../../public/assets/kandy/8.jpg';
import img4 from './../../../public/assets/sigiriya/11.jpg';
import img5 from './../../../public/assets/south/14.jpg';

// Define a mapping of package IDs to image imports
const imageMapping: { [key: string]: StaticImageData } = {
  '1': img1,
  '3': img2,
  '2': img3,
  '4': img4,
  '5': img5,
};

type Package = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
};

const OrganizationID = 'packages';

const HomePackage = ({ limits }: { limits: number }) => {
  const [packages, setPackages] = useState<Package[]>([]);
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
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limits]);

  if (loading) {
    return <LoadingCard />;
  }

  const handleClick = (id: string) => {
    router.push(`/packages/${id}`);
  };

  return (
    <section className="text-gray-600 body-font bg-white">
      <div className={`${Styles.container} container`}>
        <div className="flex flex-wrap -m-4">
          {packages.map((pkg) => {
            // Debugging logs
            console.log('Package ID:', pkg.id);
            console.log('Mapped Image:', imageMapping[pkg.id]);

            return (
              <div key={pkg.id} className={Styles.main}>
                <div className={`${Styles.card} h-full`}>
                  <Image
                    className={Styles.image}
                    src={imageMapping[pkg.id] || productImage} // Fallback to default image
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
                        <button className={Styles.buttonView} onClick={() => handleClick(pkg.id)}>View Details</button>
                        <button className={Styles.button}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePackage;
