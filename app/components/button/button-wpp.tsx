import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const ButtonWpp = () => {
  return (
    <button
      className='
        fixed 
        bottom-6
        right-10
        p-2
        bg-white
        rounded-md
      '
    >
      <Link
        href={'https://api.whatsapp.com/send/?phone=5511984521060&text=Contato+pelo+site&type=phone_number&app_absent=0'}
      >
        <FaWhatsapp size={32} color="green"/>
      </Link>
    </button>
  )
}

export default ButtonWpp