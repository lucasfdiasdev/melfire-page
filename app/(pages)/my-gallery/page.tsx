import ListPinterest from '@/app/components/pinterest/list-pinterest'
import React from 'react'

const MyGallery = () => {
  return (
    <>
    <div>
      <video
        src="/melfire-view.mp4" 
        width='100%'
        autoPlay
        loop
        muted
        className='object-contain w-[1397px] flex items-center justify-center'
      />
      <ListPinterest/>
    </div>
    
    </>
  )
}

export default MyGallery