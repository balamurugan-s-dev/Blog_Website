import React from 'react'

const SidebarSearch = () => {
    return (
        <div className='bg-gray-100 p-2 flex rounded-full items-center gap-2 text-sm mb-8 text-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input type="text" placeholder='search a post...' className='bg-transparent w-full' />
        </div>
    )
}

export default SidebarSearch