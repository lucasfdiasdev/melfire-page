import React from 'react';
import Image from 'next/image';

import melfireImg from '@/public/melfire-session2.webp'

const ContactMe = () => {
  return (
    <>
      <div className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Me</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Outcall session in hotel rooms available
            </p>
          </div>

          <div
            className='
            mx-auto max-w-2xl gap-x-8 gap-y-10 space-x-6 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none
            flex items-center  mt-20 flex-col md:flex-row gap-10 md:gap-0'
          >
            <div className='flex-1'>
              <Image 
                src={melfireImg} 
                className='flex items-center justify-center mx-auto w-[335px] h-[503px] rounded-md' 
                alt='' 
                width={335} 
                height={503}
              />
            </div>

            <div className='flex-1'>
              <form>
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-white">
                        Your name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          placeholder='Your name'
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                        Whatsapp
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder='Phone Number'
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder='E-mail'
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent focus:bg-white"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id=""
                          name=""
                          placeholder='Write your message'
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent focus:bg-white"
                        />
                      </div>
                    </div>

                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ContactMe;