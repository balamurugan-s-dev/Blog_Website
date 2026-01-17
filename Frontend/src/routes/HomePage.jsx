import React from 'react';
import { Link } from 'react-router-dom';
import MainCategory from '../components/MainCategory';
import FeaturePost from '../components/FeaturePost';
import WriteButton from '../components/WriteButton';
import SideContent from '../components/SideContent';
import PostList from '../components/PostList';

const HomePage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex gap-4 text-sm md:text-base'>
        <Link to="/">Home</Link>
        <span>.</span>
        <span className='text-blue-800'>Blog and Article</span>
      </div>

      <div className='flex items-center justify-between'>
        <div className=''>
          <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold leading-snug md:leading-tight'>Where developers write, share, and sharpen their thinking through code.</h1>
          <p className='mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-sl lg:text-xl text-gray-600'>
            SyntaxHub is a space for code-driven stories, deep technical insights, and real-world lessons from building software.
          </p>
        </div>

        <SideContent />
      </div>

      <div className='fixed bottom-6 right-6 z-50'>
        <WriteButton />
      </div>

      {/* category */}
      <MainCategory />

      {/* Feature post */}
      <FeaturePost />

      {/* post list */}
      <div className=''>
        <h1 className='my-8 text-2xl text-gray-800 font-bold'>Recent Post</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;