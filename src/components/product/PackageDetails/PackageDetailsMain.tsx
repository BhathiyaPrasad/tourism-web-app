'use client'
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import LoadingCard from "@/components/HomePackage/LoadingCard";
import Image from "next/image";
import image from '../../../../public/assets/hill/5.jpg'
import PackageDetailsRoute from "./PackageDetailsRoute";

// Define the type for package details
interface PackageDetailsType {
  name: string;
  description: string;
  // Add other fields based on your Firestore document structure
}

// Define the type for places
interface PlaceType {
  id: string;
  name: string;
  // Add other fields based on your Firestore document structure
}

const getPackageDetail = async (packageID: string) => {
  try {
    const docRef = doc(db, 'packages', packageID); // Assuming 'packages' is the collection name
    console.log('Fetching document from:', docRef.path); // Log the path
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const placesCollectionRef = collection(docRef, 'place01');
      const placesSnapshot = await getDocs(placesCollectionRef);
      const places = placesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as PlaceType[]; // Typecast to PlaceType[]

      return {
        packageDetails: docSnap.data() as PackageDetailsType, // Typecast to PackageDetailsType
        places,
      };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};

const PackageDetailsMain = ({ ID }: { ID: string }) => {
  const [packageDetails, setPackageDetails] = useState<PackageDetailsType | null>(null);
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ID) {
      getPackageDetail(ID)
        .then((data) => {
          if (data) {
            setPackageDetails(data.packageDetails);
            setPlaces(data.places);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data from database:', error);
          setLoading(false);
        });
    }
  }, [ID]);

  if (loading) {
    return <LoadingCard />;
  }

  if (!packageDetails) {
    return <div>No package details found.</div>;
  }

  return (
    <div>
      <h1></h1>
      <p></p>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image alt="feature" className="object-cover object-center h-full w-full" src={image} />
    </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{packageDetails.name}
           
            </h1>
            <p className="mb-8 leading-relaxed">{packageDetails.description}</p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div> */}
          </div>
        </div>
      </section>


      <div>
        {places.map((place) => (
          <div key={place.id}>
          <PackageDetailsRoute name={place.name} /></div>
        ))}
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default PackageDetailsMain;
