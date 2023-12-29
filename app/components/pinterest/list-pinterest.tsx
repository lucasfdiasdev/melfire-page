'use client';

import { useState } from 'react';

import { pintList } from '@/app/data/utils';
import ItemPinterest from './item-pinterest';

const ListPinterest = () => {

  const [ visible, setVisible ] = useState(12);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 12);
  }

  const totalItems = pintList.length;
  const hasMoreItems = visible < totalItems;

  return (
    <>
      <div>
        <div 
          className='
            mt-24
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
            pintList.slice(0, visible).map((item, index) => (
              <div key={index}>
                <ItemPinterest
                  title={item.title}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))
          }
        </div>
        {hasMoreItems && (
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
        )}

      </div>
    </>
  );
};

export default ListPinterest;