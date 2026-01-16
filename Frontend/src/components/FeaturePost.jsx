import React from 'react'
import Assets from '../assets/Assets'
import { Link } from 'react-router-dom'

const FeaturePost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Images */}
            <img src={Assets.Asta} alt="Asta image" className='rounded-2xl object-cover'/>
            {/* details */}
            <div className='flex items-center gap-4 text-sm md:text-base'>
              <h1 className='font-semibold lg:text-lg'>01.</h1>
              <Link to="" className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500'>2 days ago</span>
            </div>

            {/* title */}
            <Link to="/test" className='text-lg lg:text-3xl font-semibold lg:font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Link>
        </div>

        {/* Other */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <div className='lg:h-1/3 flex justify-between gap-4'>
              <img src={Assets.Astronaut1} className='rounded-2xl object-cover w-1/3  aspect-video' alt="" />
              
              <div className='w-2/3 p-1 md:p-2'>
                <div className='flex items-center gap-4 text-xs md:text-base mb-4'>
                  <h1 className='font-semibold'>02.</h1>
                  <Link className='text-blue-500 '>Web design</Link>
                  <span className='text-gray-500 '>2 days ago</span>
                </div>
                <Link to="/test" className='text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cumque.</Link>
              </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
              <img src={Assets.Astronaut2} className='rounded-2xl object-cover w-1/3 aspect-video' alt="" />
              <div className='w-2/3 p-1 md:p-2'>
                <div className='flex items-center gap-4 text-xs md:text-base mb-4'>
                  <h1 className='font-semibold'>03.</h1>
                  <Link className='text-blue-500 '>Web design</Link>
                  <span className='text-gray-500 '>2 days ago</span>
                </div>
                <Link to="/test" className='text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cumque.</Link>
              </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
              <img src={Assets.Astronaut3} className='rounded-2xl object-cover w-1/3 aspect-video' alt="" />
              <div className='w-2/3 p-1 md:p-2'>
                <div className='flex items-center gap-4 text-xs md:text-base mb-4'>
                  <h1 className='font-semibold'>04.</h1>
                  <Link className='text-blue-500 '>Web design</Link>
                  <span className='text-gray-500 '>2 days ago</span>
                </div>
                <Link to="/test" className='text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cumque.</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturePost