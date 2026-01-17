import React from 'react'
import { Link } from 'react-router-dom'

const WriteButton = () => {
  return (
    <Link to="/write" className="group">
        <div className="flex items-center gap-1 bg-[#021526] text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-md sm:shadow-lg sm:shadow-blue-800/30 hover:bg-[#07335a] transition-all duration-300 hover:scale-105">
          {/* Left bracket */}
          <span className="text-teal-300 font-mono text-lg">&lt;</span>

          {/* Button content */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.125 19.588 3 21l1.412-4.125L16.862 3.487z"
              />
            </svg>

            <span className="font-medium tracking-wide hidden sm:inline">
              Write
            </span>
          </div>

          {/* Right bracket */}
          <span className="text-teal-300 font-mono text-lg">&gt;</span>
        </div>
      </Link>
  )
}

export default WriteButton