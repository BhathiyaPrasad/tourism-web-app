'use client'
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import PackageDetailLoadingCard from "./PackageDetailLoadingCard";
import Image from "next/image";
import image from '../../../../public/assets/hill/5.jpg'
import PackageDetailsPlaces from "./PackageDetailsPlaces";
import Title from "@/components/Title/Title";
import Button from "@/components/common/button/Button";
import { FaCalendarAlt, FaUserFriends, FaMapMarkerAlt, FaClock, FaStar, FaArrowLeft } from 'react-icons/fa';
import Link from "next/link";
import GoogleMapEmbed from "@/map/Map";
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
    return <PackageDetailLoadingCard />;
  }

  if (!packageDetails) {
    return <div>No package details found.</div>;
  }

  return (
    <div className="bg-white-100 py-2">
      <div className="container mx-auto px-5 py-4">
        <Link href="/packages" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <FaArrowLeft className="mr-2" />
          Back to Packages
        </Link>
      </div>
      <Title title='Package Details' />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full transition-transform duration-300 transform hover:scale-105"
              src={image}
              width={600}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              {packageDetails.name}
            </h1>
            <p className="mb-8 leading-relaxed text-lg">{packageDetails.description}</p>

            <div className="flex flex-wrap mb-8 w-full">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                  <FaCalendarAlt className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium">{packageDetails.name} Days</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                  <FaUserFriends className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium">Max {packageDetails.name} People</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                  <FaMapMarkerAlt className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium">{packageDetails.name}</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                  <FaStar className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium">{packageDetails.name} Star Rating</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full mb-3">
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <span className="text-2xl font-bold text-indigo-600 pl-3">
                  1500.00 USD
                </span>
                <span className="text-gray-500 block md:inline-block md:ml-2">
                  /per person
                </span>
              </div>

              <div className="w-full md:w-auto text-center md:text-left">
                <Button url='/book' name='Book Now' />
              </div>
            </div>


          </div>
        </div>
      </section>

      <Title title='Destinations' />
      {/* Places List  */}
      <div>
        {places.map((place) => (
          <div key={place.id}>
            <PackageDetailsPlaces name={place.name} /></div>
        ))}
      </div>
      <Title title='Tour Route' />
      <PackageDetailsRoute />

    </div>
  );
};

export default PackageDetailsMain;
