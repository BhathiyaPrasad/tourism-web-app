import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Footer from "../components/common/footer/Footer";
import HomePackage from "@/components/HomePackage/HomePackage";
import Gallery from "@/components/product/gallery/Gallery";
import HomeCategoryButtons from "@/components/product/CategoryButtons/HomeCategoryButtons";
import EmblaCarousel from "@/components/Events/EmblaCarousel";
import Title from "@/components/Title/Title";
import Button from "@/components/common/button/Button";

export default function Home() {
  return (
    <div data-theme='light'>
      <MainLayout />
      <Title title='Trending Packages' />
      <HomePackage limits={6} />
      <Button name='View More ' url='/packages' />
      <Title title='Upcoming Events' />
      <EmblaCarousel />
      <Title title='Gallery' />
      <Gallery Gallerylimits={6} />
      <Button name='View More' url='/places' />
      <Footer />
    </div>
  );
}
