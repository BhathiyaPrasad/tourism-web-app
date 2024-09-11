'use client'
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import LoadingCard from "@/components/HomePackage/LoadingCard";

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

const PackageDetails = ({ ID }: { ID: string }) => {
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
      <h1>{packageDetails.name}</h1>
      <p>{packageDetails.description}</p>
      <div>
        {places.map((place) => (
          <div key={place.id}>{place.name}</div>
        ))}
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default PackageDetails;
