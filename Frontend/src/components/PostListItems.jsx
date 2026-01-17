import React from 'react'
import Assets from '../assets/Assets'
import { Link } from 'react-router-dom'

const PostListItems = () => {
  return (
    <Link to="/test"
      className="
        flex flex-col gap-3
        w-full sm:w-[48%] lg:w-[32%]
        rounded-2xl
        border border-gray-300
        hover:border-gray-400
        transition
        overflow-hidden
      "
    >
      {/* image */}
      <img
        src={Assets.Tanjiro}
        alt=""
        className="h-48 w-full object-cover"
      />

      {/* content */}
      <div className="flex flex-col gap-2 px-3 pb-4">

        {/* category */}
        <Link className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Web Design
        </Link>

        {/* title */}
        <h1 className="font-semibold text-lg leading-snug line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        {/* description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod dignissimos laboriosam omnis aut esse natus.
        </p>

        {/* footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
          <span>John Dev</span>
          <span>4 days ago</span>
        </div>

      </div>
    </Link>
  )
}

export default PostListItems
