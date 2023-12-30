'use client';

import Image from 'next/image';
import imgMelFire from '@/public/list0.webp';
import imgMelFireRed from '@/public/melfire-red.webp';

const SectionSessions = () => {
  return (
    <>
      <section
        className='w-full'
      >
        <div className='flex flex-col'>
          <h2 className="text-5xl text-center font-bold leading-8 text-white py-10">
            Session
          </h2>
          <div className='flex items-center justify-between flex-col md:flex-row gap-10 md:gap-0'>
            <div className='mx-auto hidden lg:flex'>
              <Image 
                width={380}
                height={570}
                src={imgMelFireRed} 
                alt='Mel Fire'
                className='object-cover rounded-md w-[380px] h-[570px]'  
              />
            </div>
            <div className='text-white text-center'>
              <div>
                <p>ONLINE SESSIONS AND VIDEO CALLS</p>
                <p>MIXED WRESTLING (FANTASY/ SEMI COMP)</p>
                <p>TANTRIC MASSAGE</p>
                <p>SENSUAL MASSAGE</p>
                <p>FETISH MASSAGE</p>
                <p>FOOT WORSHIP</p>
                <p>WRESTLING</p>
                <p>BALLBUSTING</p>
                <p>IMPACT PLAY</p>
                <p>BONDAGE</p>
                <p>SPIT</p>
                <p>NIPPLE TORTURE</p>
                <p>CHASTITY / KEYHOLDER</p>
                <p>CUCKOLD</p>
                <p>TRAMPLING</p>
                <p>FACESIT</p>
                <p>WAX PLAY</p>
                <p>HUMILIATION</p>
                <p>ELECTROPLAY</p>
                <p>ORGASM CONTROL</p>
                <p>TEASE AND DENIAL</p>
                <p>PEGGING</p>
                <p>SISSYFICATION</p>
                <p>GOLDEN SHOWER</p>
                <p>ROLE PLAY</p>
                <p>PET PLAY</p>
                <p>LATEX/ LEATHER</p>
              </div>
            </div>
            <div className='mx-auto'>
              <Image 
                width={380}
                height={570}
                src={imgMelFire} 
                alt='Mel Fire'
                className='object-cover rounded-md w-[380px] h-[570px]'  
              />
            </div>
          </div>
            <div className='flex justify-center items-center flex-col text-center w-full my-10 space-y-2'>
              <p className='text-sm'>If your inquiry is about something not on the list you may contact me to check if I have the availability</p>
              <p className='text-xs'>Rates are non-negotiable</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default SectionSessions;