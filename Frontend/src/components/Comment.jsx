import React from 'react'
import Assets from '../assets/Assets'

const Comment = () => {
  return (
    <div className='p-4 bg-gray-100 rounded-xl mb-8'>
      <div className="flex items-center gap-4 ">
        <img src={Assets.Tanjiro} alt=""  className='w-10 h-10 rounded-full object-cover'/>
        <span className='font-medium'>John doe</span>
        <span className='text-sm text-gray-500 '>2 days ago</span>
      </div>
      <div className="mt-4 ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet modi repudiandae illum quo error accusantium quis commodi impedit nihil!</p>
      </div>
    </div>
  )
}

export default Comment