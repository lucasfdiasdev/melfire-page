'use client';


import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { FaBars } from 'react-icons/fa6';
import { solutions } from '@/app/data/utils';

const ButtonMobile = () => {
 
  return (
    <>
    <Popover className="relative">
      <Popover.Button className="flex md:hidden p-2 font-medium cursor-pointer bg-black/30 rounded-lg transition">
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
          <div className="flex-auto overflow-hidden rounded bg-black text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-black/20">
                  <item.icon className="h-6 w-6 text-gray-600 group-hover:text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </>
  );
};

export default ButtonMobile;