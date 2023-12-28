'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { navbarLinks } from '@/app/data/utils';

import ButtonMobile from '@/app/components/button/button-mobile';

const Header = () => {

  const [ openHeader, setOpenHeader] = useState(false);

  const scrollHeader = () => {
    if(window.scrollY >= 20) {
      setOpenHeader(true);
    } else {
      setOpenHeader(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll',scrollHeader)
    return () => {
      window.addEventListener('scroll',scrollHeader)
    }  },[])

  const pathname = usePathname();

  return (
    <>
      <header
        className={clsx(`
          fixed 
          h-12
          md:h-24 
          z-[50]
          w-full
          mx-auto 
          px-2 
          sm:px-6 
          lg:px-8
          py-4
          flex 
          items-center 
          justify-between
          transition-all
          duration-300
        `, openHeader ? 'bg-black' : 'bg-transparent')}
      >
        <div className='flex flex-row gap-10 w-full'>
          <Link
            href='/'
          >
            <h1 className='text-2xl md:text-4xl'>Mel Fire</h1>
          </Link>
          <div className='hidden md:flex items-center gap-5'>
            {
              navbarLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "text-sm group p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition whitespace-nowrap",
                    pathname === item.href ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                  {item.name}
                </Link>
              ))
            }
          </div>
        </div>
        <ButtonMobile/>
      </header>
    
    
    
    </>
  )
}

export default Header