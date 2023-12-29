'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { gallery } from '@/app/data/utils';

const SectionShopVideo = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-2xl p-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className='flex items-center justify-between'>
            <h2 className="text-2xl font-bold tracking-tight text-white">My Videos</h2>
            <Link href={'/my-shop'} className='text-zinc-300 hover:text-white'>See all</Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {gallery.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    width={800}
                    height={800}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex flex-col">
                  <h3 className="text-sm text-zinc-300">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <div className='flex items-center justify-between'>
                    <p className="mt-1 text-sm text-zinc-300">{product.category}</p>
                    <p className="text-md font-medium text-zinc-300">{product.price}</p> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionShopVideo