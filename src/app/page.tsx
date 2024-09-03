import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Footer from "../components/common/footer/Footer";
import HomePackage from "@/components/product/HomePackage";
import Gallery from "@/components/product/gallery/Gallery";
import HomeCategoryButtons from "@/components/product/CategoryButtons/HomeCategoryButtons";
import EmblaCarousel from "@/components/Events/EmblaCarousel";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div data-theme='light'>
      <MainLayout />
      <HomeCategoryButtons />
      <HomePackage />
      <Title title='Upcoming Events In Sri Lanka' />
      <EmblaCarousel />
      <Title title='Gallery' />
      <Gallery />
      <Footer />
    </div>
  );
}
