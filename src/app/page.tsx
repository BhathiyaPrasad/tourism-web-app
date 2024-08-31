import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Footer from "../components/common/footer/Footer";
import HomePackage from "@/components/product/HomePackage";
import Gallery from "@/components/product/Gallery";
import HomeCategoryButtons from "@/components/product/CategoryButtons/HomeCategoryButtons";
import EmblaCarousel from "@/components/Events/EmblaCarousel";

export default function Home() {
  return (
    <div data-theme='light'>
      <MainLayout />
      <HomeCategoryButtons />
      <HomePackage />
      <EmblaCarousel />
      <Gallery />
      <Footer />
    </div>
  );
}
