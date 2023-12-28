import React from 'react';
import Image from 'next/image';
import melFireImg from '/public/melfire-red.webp';

const About = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
     
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Experience the unique opportunity of being in the presence of an upscale professional dominatrix, wrestler and tantric masseuse
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
            width={200}
            height={200}
              className="w-64 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-72"
              src={melFireImg}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                Award-winning international adult star, I can make your mind travel between pleasure and pain according to my preferences
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    
                    <span>
                      <strong className="font-semibold text-gray-900">Push to deploy.</strong> Dressage/polo player, former ballerina, brazilian jiu jitsu fighter, polyglot, traveler of the world, alternative model - I can provide you singular sensations - if you deserve it, of course
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    
                    <span>
                      <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                      ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                  
                    <span>
                      <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                      vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>

    </>
  )
}

export default About;