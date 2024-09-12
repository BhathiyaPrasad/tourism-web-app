'use client'
import { useParams } from "next/navigation"
import MainLayout from "@/components/layout/MainLayout"
import '../../../app/globals.css';
import PackageDetailsMain from "@/components/product/PackageDetails/PackageDetailsMain";

const PackageDetailsPage = () => {
    const params = useParams();
    const packageID = Array.isArray(params.id) ? params.id[0] : params.id;
    console.log("Product Id", packageID)
   
    if (!packageID) {
        console.error("Package ID is undefined");
        return;
    }
    return (
        <div>
         <PackageDetailsMain  ID={packageID} />
        </div>
    )

}

export default PackageDetailsPage