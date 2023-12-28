import Image from 'next/image';

interface ItemPinterestProps {
  title?: string;
  imageUrl: any;
}

const ItemPinterest: React.FC<ItemPinterestProps> = ({
  title,
  imageUrl
}) => {
  return (
    <>
      <div
        className='
          relative 
          before:absolute 
          before:h-full 
          before:w-full 
          before:rounded-3xl 
          before:z-10 
          before:opacity-50'
      >
        <Image
          src={imageUrl || ''}
          alt={title || ''}
          width={500}
          height={500}
          className='rounded-3xl relative z-0 object-cover'
        />
        <h2 className='font-bold text-[18px] mb-1 mt-2 line-clamp-1'>

        </h2>
        {title}
      </div>
    </>
  );
};

export default ItemPinterest;