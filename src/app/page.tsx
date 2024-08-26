import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';
import HomePackages from "@/components/product/Gallery";
import Footer from "../components/common/footer/Footer";
import HomePackage from "@/components/product/HomePackage";

export default function Home() {
  return (
    <div>
      <MainLayout />
      <HomePackage />
      <HomePackages />
      <Footer />
    </div>
  );
}
