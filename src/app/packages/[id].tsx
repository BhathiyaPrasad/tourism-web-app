import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase";
import LoadingCard from "@/components/HomePackage/LoadingCard";


const OrganizationID = 'packages'

const getPackageDetail = async (packageId) => {
    try {
    const docRef = doc(db, OrganizationID, packageId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data
    } else {
        console.log("No Such A Document!");
    }
} catch (error) {
    console.error("Error Getting Document", error)
    return null;
}

};

const PackageDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (id) {
            getPackageDetail(id) 
                .then((data) => {
                    setPackageDetails(data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log('Error Fetching Data From Database', error)
                    setLoading(false)
                });
            }
    }, [id]);

    if (loading) {
        return (
            <LoadingCard />
        )
    }
}