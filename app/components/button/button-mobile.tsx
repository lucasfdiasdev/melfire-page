'use client';


import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { FaBars } from 'react-icons/fa6';
import { solutions } from '@/app/data/utils';
import Link from 'next/link';

const ButtonMobile = () => {
 
  return (
    <>
    <Popover className="relative">
      <Popover.Button className="flex md:hidden p-2 font-medium cursor-pointer bg-black/80 rounded-lg transition">
        <FaBars size={18} aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-4 flex w-80 right-0 px-4">
          <div className="flex-auto overflow-hidden rounded bg-black/80 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {solutions.map((item) => (
              <Link 
                href={item.href}
                key={item.href}
                className='p-2 flex flex-col text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300'
              >
                <span className='text-sm'>
                  {item.name}    
                </span>
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </>
  );
};

export default ButtonMobile;