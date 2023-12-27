'use client';

import Image from "next/image";
import melFireImg from '/public/melfire.webp';

import About from "@/app/components/about";
import SectionLinks from "@/app/components/section-links";
import SectionGallery from "@/app/components/section-gallery";

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

      <About/>
      <SectionGallery/>
      <SectionLinks/>
    </>
  )
}

export default Home;