'use client';

import Image from 'next/image';
import melfireSession from '@/public/melfire-session.webp';

const SectionAbout = () => {
  return (
    <section
      className='
        flex 
        flex-col 
        items-center 
        md:flex-row
        w-full
        mx-auto 
        max-w-7xl 
        px-2 
        sm:px-6 
        lg:px-8
        mb-10
        md:mb-0
      '
    >
      <div className='flex-1'>
        <Image 
          src={melfireSession} 
          alt="Mel Fire Capa"  
          width={335} 
          height={503} 
          className="flex mx-auto justify-center items-center w-[335ox] h-[503px] object-cover mb-20 rounded-md" 
        />

      </div>

      <div className='flex-1'>
        <h1 className='mb-10 text-3xl font-bold text-center'>About Me</h1>
        <div className='space-y-6'>
          <p>Experience the unique opportunity of being in the presence of an upscale professional dominatrix, wrestler and tantric masseuse</p>
          <p>Award-winning international adult star, I can make your mind travel between pleasure and pain according to my preferences</p>
          <p>Dressage/polo player, former ballerina, brazilian jiu jitsu fighter, polyglot, traveler of the world, alternative model - I can provide you singular sensations - if you deserve it, of course</p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;