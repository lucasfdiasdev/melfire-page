import { pintList } from '@/app/data/utils';
import ItemPinterest from './item-pinterest';

const ListPinterest = () => {
  return (
    <>
      <div 
        className='
          mt-12 
          px-2 
          md:px-8 
          columns-2 
          md:columns-3 
          lg:columns-4 
          xl:columns-5 
          space-y-6 
          mx-auto
        '
      >
        {
          pintList.map((item, index) => (
            <div key={index}>
              <ItemPinterest
                title={item.title}
                imageUrl={item.imageUrl}
              />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default ListPinterest;