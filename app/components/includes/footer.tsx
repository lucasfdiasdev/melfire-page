import Link from 'next/link'

import { 
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaInstagram
} from "react-icons/fa6";


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
          <div>
            <Link href='/'>
              <h1 className='text-2xl'>
                Mel Fire
              </h1>
              <p>Professional Dominatrix - Wrestler - Tantric Goddess</p>
              <p>HELSINKI - STOCKHOLM - LONDON</p>
            </Link>
          </div>

          <div className='flex items-center gap-5'>
            <Link
              href='https://www.instagram.com/melfire.oficial2/'
            >
              <FaInstagram/>
            </Link>
            <Link
              href='https://www.instagram.com/melfire.oficial2/'
            >
              <FaTiktok/>
            </Link>
            <Link
              href='https://www.instagram.com/melfire.oficial2/'
            >
              <FaXTwitter/>
            </Link>
            <Link
              href='https://www.instagram.com/melfire.oficial2/'
            >
              <FaYoutube/>
            </Link>
          </div>
        </div>

        <div className='flex items-center justify-center mx-auto text-center text-xs max-w-2xl'>
          <p className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet laborum laboriosam doloribus est, facilis perferendis maiores rem placeat consequuntur vel saepe animi repellendus explicabo aliquid, quae maxime, voluptates debitis!</p>
        </div>
      </footer>

    </>
  )
}

export default Footer