'use client';

import Image from "next/image";
import melFireImg from '/public/melfire.webp';

import SectionAbout from "@/app/components/section-about";
import SectionLinks from "@/app/components/section-links";
import SectionPhotos from "@/app/components/section-photos";
import SectionGallery from "@/app/components/section-gallery";
import SectionSessions from "@/app/components/section-sessions";

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
      <SectionSessions/>
      <SectionPhotos/>
    </>
  )
}

export default Home;