import React, { useEffect } from 'react';
import {useAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

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
    <div className=''>
      <h2>Create a New Post</h2>
      <form className="">
        <button>Add a cover image</button>
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
      </form>
    </div>
  );
};

export default Write;