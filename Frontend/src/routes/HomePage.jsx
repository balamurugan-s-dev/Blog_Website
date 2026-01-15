import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <span>.</span>
        <span className='text-blue-800'>Blog and Article</span>
      </div>

      <div className='flex items-center justify-between'>
        <div className=''>
          <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold leading-snug md:leading-tight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, quia.</h1>
          <p className='mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-sl lg:text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo soluta porro cum accusamus voluptate iste.</p>
        </div>

        <div className="hidden md:flex lg:flex-1 justify-end items-center">
          <div className="w-50 h-40 max-w-sm lg:max-w-md rounded-xl border border-gray-200 bg-gray-50 shadow-sm overflow-hidden">

            {/* Fake window header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b bg-white">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            {/* Code content */}
            <pre className="px-4 py-4 text-sm font-bold text-gray-800 leading-relaxed">
              <code>
                <span className="text-blue-600">const</span>{" "}
                <span className="text-emerald-600">write</span>{" "}
                = () =&gt; {"{"}{"\n"}
                {"  "}
                <span className="text-blue-600">return</span>{" "}
                &lt;<span className="text-purple-600">Story</span> /&gt;
                {";\n"}
                {"}"}
                <span className="animate-blink ml-1">|</span>
              </code>
            </pre>
          </div>
        </div>


      </div>

      <Link to="/write" className="fixed bottom-6 right-6 z-50 group">
        <div className="flex items-center gap-1 bg-blue-800 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-md sm:shadow-lg sm:shadow-blue-800/30 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
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
    </div>
  );
};

export default HomePage;