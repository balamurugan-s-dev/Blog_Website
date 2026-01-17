import React from 'react'

const PostActionmenu = () => {
    return (
        <div>
            <h1 className='mt-4 mb-2 text-sm font-medium'>Action</h1>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2c-1.1 0-2 .9-2 2v18l8-4 8 4V4c0-1.1-.9-2-2-2H6z" stroke='black' strokeWidth="2" />
                </svg>
                <span>Save this Post</span>
            </div>

            <div className="flex items-center gap-2 py-2 text-sm text-red-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M6 6l1 14h10l1-14" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                </svg>
                <span>Delete this Post</span>
            </div>
        </div>
    )
}

export default PostActionmenu