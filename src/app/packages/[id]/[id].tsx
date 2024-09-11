'use client'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import LoadingCard from "@/components/HomePackage/LoadingCard";

const OrganizationID = 'packages';

// Define the type for package details
interface PackageDetailsType {
  name: string;
  description: string;
  // Add other fields based on your Firestore document structure
}

const getPackageDetail = async (packageId: string): Promise<PackageDetailsType | null> => {
    try {
        const docRef = doc(db, OrganizationID, packageId);
        console.log('Fetching document from:', docRef.path); // Log the path
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data() as PackageDetailsType; // Typecast to PackageDetailsType
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return null;
    }
};

const PackageDetails = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Correctly get the 'id' from URL search params
    const [packageDetails, setPackageDetails] = useState<PackageDetailsType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) { // Ensure id is not null
            getPackageDetail(id)
                .then((data) => {
                    setPackageDetails(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data from database:', error);
                    setLoading(false);
                });
        }
    }, [id]);

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
            {/* Add more fields as needed */}
        </div>
    );
};

export default PackageDetails;
