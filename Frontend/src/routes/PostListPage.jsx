import React, { useState } from 'react';
import PostList from '../components/PostList';
import SidebarMenu from '../components/SidebarMenu';

const PostListPage = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className='mb-8 md:text-xl'>Development Blog</h1>
      <button onClick={() => {setOpen(p => !p)}} className='bg-blue-800 text-sm text-white w-20 mb-4 px-4 py-2 rounded-2xl md:hidden'>{open ? "Close": "Filter"}</button>
      <div className='flex flex-col-reverse md:flex-row gap-6'>
        <div className='md:w-[85%]'>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block w-[15%]`}>
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;