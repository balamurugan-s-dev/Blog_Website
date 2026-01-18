import React from 'react'
import SidebarSearch from './SidebarSearch'
import { Link } from 'react-router-dom'

const SidebarMenu = () => {
  return (
    <div className='p-4 w-5/5 h-max sticky top-20'>
        <h1 className='mb-4 text-sm font-medium '>Search</h1>
        <SidebarSearch />
        <h1 className='mt-8 mb-4 text-sm font-medium '>Filter</h1>
        <div className='flex flex-col gap-2 text-sm'>
            <label htmlFor="newest" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' id='newest' value="newest" className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 '/>
                Newest
            </label>

            <label htmlFor="mostpopular" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' id='mostpopular' value="newest" className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 '/>
                Most Populare
            </label>

            <label htmlFor="treanding" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' id='treanding' value="newest" className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 '/>
                Treanding
            </label>

            <label htmlFor="oldest" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' id='oldest' value="newest" className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 '/>
                Oldest
            </label>
        </div>
        <h1 className='mt-8 mb-4 text-sm font-medium '>Categories</h1>
        <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline' to="/posts">All</Link>
            <Link className='underline' to="/posts?cat=Webdesign">Web Design</Link>
            <Link className='underline' to="/posts?cat=development">Development</Link>
            <Link className='underline' to="/posts?cat=database">Database</Link>
            <Link className='underline' to="/posts?cat=seo">Search Engine</Link>
            <Link className='underline' to="/posts?cat=marketing">Marketing</Link>
        </div>
    </div>
  )
}

export default SidebarMenu