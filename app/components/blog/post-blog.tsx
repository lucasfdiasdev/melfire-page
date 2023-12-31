'use client';

import React, { useState } from 'react';
import { posts } from '@/app/data/utils';
import Image from 'next/image';

const PostBlog = () => {

  const [ visible, setVisible ] = useState(6);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 6);
  }

  const totalItems = posts.length;
  const hasMoreItems = visible < totalItems;

  return (
    <>
      <div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.slice(0, visible).map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {hasMoreItems && (
          <button
            onClick={showMoreItems}
            className="
              text-center
              w-full
              mt-10
            "
          >
            <span 
              className="
                bg-white/10 
                hover:bg-white/20 
                rounded-md
                px-3 
                py-2 
                whitespace-nowrap 
                transition-all 
                duration-300
              "
            >
              View More 
            </span> 
          </button>
        )}
      </div>
    </>
  )
}

export default PostBlog