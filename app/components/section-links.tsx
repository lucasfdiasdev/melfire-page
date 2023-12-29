'use client';

import Link from 'next/link';
import Image from 'next/image';
import melfirelagerieHelsinki from '@/public/melFireSessionsFinland.webp';

import { links } from '@/app/data/utils';
import ButtonSocial from '@/app/components/button/button-social';

const SectionLinks = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 space-y-12">
        <h2 className="text-5xl text-center font-bold leading-8 text-white">
          Links
        </h2>

        <div className='flex flex-col justify-center items-center mx-auto space-y-6'>
          
          <ButtonSocial/>

          <Link href={'https://t.me/melfirefree'} className='bg-white/10 hover:bg-white/20 rounded-md px-3 py-2 whitespace-nowrap transition-all duration-300' target='_blank'>Free Telegram Group</Link>
          <div 
            className='lg:flex items-center justify-center gap-10 w-full grid grid-cols-2 sm:grid-cols-3' >
            {
              links.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  target='_blank' 
                  className='bg-white/10 rounded-md px-3 py-2 hover:bg-white/20 transition-all duration-300 flex items-center justify-center'
                >
                  <span className='text-white whitespace-nowrap'>{link.name}</span>
                </Link>
              ))
            }
          </div>
          <div className='mt-10 flex items-center justify-center w-full'>
            <Image 
              src={melfirelagerieHelsinki} 
              className='w-[662px] h-[415px] object-cover rounded-md' 
              width={662} 
              height={415} 
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionLinks;