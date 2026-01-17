import React, { useEffect } from 'react';
import {useAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  const {isLoggedIn, loading} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return;

    if (!isLoggedIn) {
      navigate("/login", {replace: true});
    }
  }, [isLoggedIn, loading, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 '>
      <h2 className='text-cl font-light'>Create a New Post</h2>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className='p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a cover image</button>
        <input type="text" placeholder='Write your content'/>
        <div className="">
          <label htmlFor=""></label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="webdesign">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">Search Engine</option>
            <option value="matketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" id="" className='' placeholder='A short Description'></textarea>
        <ReactQuill theme="snow" className='flex-1'/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Write;