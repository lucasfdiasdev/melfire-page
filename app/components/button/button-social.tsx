import Link from 'next/link';

import { 
  FaInstagram, 
  FaTiktok, 
  FaXTwitter, 
  FaYoutube 
} from 'react-icons/fa6';

const ButtonSocial = () => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        <Link
          className='p-2 hover:bg-white/20 transition-all duration-300 rounded-md'
          href='https://www.instagram.com/melfire.oficial2/'
        >
          <FaInstagram size={22}/>
        </Link>
        <Link
          className='p-2 hover:bg-white/20 transition-all duration-300 rounded-md'
          href='https://www.tiktok.com/@melfireoficial'
        >
          <FaTiktok size={22}/>
        </Link>
        <Link
          className='p-2 hover:bg-white/20 transition-all duration-300 rounded-md'
          href='https://twitter.com/melfireoficial'
        >
          <FaXTwitter size={22}/>
        </Link>
        <Link
          className='p-2 hover:bg-white/20 transition-all duration-300 rounded-md'
          href='https://www.youtube.com/melfire'
        >
          <FaYoutube size={22}/>
        </Link>
      </div>
    </>
  );
};

export default ButtonSocial;