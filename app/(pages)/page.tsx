'use client';

import Image from "next/image";
import melFireImg from '/public/melfire.webp';

import SectionAbout from "@/app/components/section-about";
import SectionLinks from "@/app/components/section-links";
import SectionPhotos from "@/app/components/section-photos";
import SectionSessions from "@/app/components/section-sessions";
import SectionShopVideo from "@/app/components/section-shop-video";

const Home = () => {
  return (
    <>
      <Image 
        src={melFireImg} 
        alt="Mel Fire Capa"  
        width={946} 
        height={1327} 
        className="w-full object-cover  mb-20" 
      />

      <SectionAbout/>
      <SectionShopVideo/>
      <SectionLinks/>
      <SectionSessions/>
      <SectionPhotos/>
    </>
  )
}

export default Home;