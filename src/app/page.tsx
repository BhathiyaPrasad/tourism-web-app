import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Footer from "../components/common/footer/Footer";
import HomePackage from "@/components/product/HomePackage";
import Gallery from "@/components/product/Gallery";

export default function Home() {
  return (
    <div>
      <MainLayout />
      <HomePackage />
      <Gallery />
      <Footer />
    </div>
  );
}
