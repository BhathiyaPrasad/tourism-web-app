import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Footer from "../components/common/footer/Footer";
import HomePackage from "@/components/product/HomePackage";
import Gallery from "@/components/product/Gallery";
import HomeCategoryButtons from "@/components/product/CategoryButtons/HomeCategoryButtons";

export default function Home() {
  return (
    <div>
      <MainLayout />
      <HomeCategoryButtons />
      <HomePackage />
      <Gallery />
      <Footer />
    </div>
  );
}
