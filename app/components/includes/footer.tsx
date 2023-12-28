import Link from 'next/link';

import ButtonSocial from '@/app/components/button/button-social';

const Footer = () => {
  return (
    <>
      <footer 
        className='
          w-full
          mx-auto 
          max-w-7xl 
          px-2 
          sm:px-6 
          lg:px-8
          py-4
        '
      >
        <div className='flex items-start justify-between w-full border-y py-10'>
          <div className='flex flex-col'>
            <Link href='/'>
              <h1 className='text-2xl'>
                Mel Fire
              </h1>
            </Link>
              <p>Professional Dominatrix - Wrestler - Tantric Goddess</p>
              <p>HELSINKI - STOCKHOLM - LONDON</p>
          </div>

         <ButtonSocial/>
        </div>

        <div className='flex items-center justify-center mx-auto text-center text-xs max-w-2xl'>
          <p className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet laborum laboriosam doloribus est, facilis perferendis maiores rem placeat consequuntur vel saepe animi repellendus explicabo aliquid, quae maxime, voluptates debitis!</p>
        </div>
      </footer>

    </>
  )
}

export default Footer