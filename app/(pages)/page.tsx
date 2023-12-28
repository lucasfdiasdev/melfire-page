'use client';

import Image from "next/image";
import melFireImg from '/public/melfire.webp';

import SectionAbout from "@/app/components/section-about";
import SectionLinks from "@/app/components/section-links";
import SectionGallery from "@/app/components/section-gallery";
import SectionPhotos from "../components/section-photos";

const Home = () => {
  return (
    <>
      <Image 
        src={melFireImg} 
        alt="Mel Fire Capa"  
        width={946} 
        height={1327} 
        className="w-[1327px] object-cover h-[946px] mb-20" 
      />

      <SectionAbout/>
      <SectionGallery/>
      <SectionLinks/>
      <SectionPhotos/>
    </>
  )
}

export default Home;