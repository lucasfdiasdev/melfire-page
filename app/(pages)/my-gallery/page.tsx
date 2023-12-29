import ListPinterest from '@/app/components/pinterest/list-pinterest';

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
          className='object-cover w-full flex items-center justify-center'
        />
        <ListPinterest/>
      </div>
    </>
  )
}

export default MyGallery