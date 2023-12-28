'use client';

import { pintList } from "../data/utils";
import ItemPinterest from "./pinterest/item-pinterest";
import { useRouter } from "next/navigation";

const SectionPhotos = () => {

  const router = useRouter();

  const showMoreItems = () => {
    router.push('/my-gallery')
  }

  return (
    <>
      <div
        className=''
      >
        <div 
          className='
            mt-12 
            px-2 
            md:px-8 
            columns-2 
            md:columns-3 
            lg:columns-4 
            xl:columns-5 
            space-y-6 
            mx-auto
          '
        >
          {
            pintList.slice(0, 6).map((item, index) => (
              <div 
                key={index}>
                <ItemPinterest
                  title={item.title}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))
          }
        </div>
        <button
          onClick={showMoreItems}
          className="
            text-center
            w-full
            mt-10
          "
        >
          <span 
            className="
            bg-white/10 
            hover:bg-white/20 
              rounded-md
              px-3 
              py-2 
              whitespace-nowrap 
              transition-all 
              duration-300
              gap-2
            "
          >
            View More 
          </span> 
        </button>
      </div>
    </>
  );
};

export default SectionPhotos;