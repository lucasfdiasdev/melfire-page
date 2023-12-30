
import PostBlog from '@/app/components/blog/post-blog';

const Blog = () => {

  return (
    <>
      <div className="py-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My Blog</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <PostBlog/>
        </div>
      </div>
    </>
  );
};

export default Blog;