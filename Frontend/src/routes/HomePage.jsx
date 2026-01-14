import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <div className='flex flex-col gap-2 w-full h-100 md:flex-row'>
        <div className='bg-amber-200 flex-1'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae asperiores aspernatur voluptates, repudiandae expedita dicta placeat cupiditate omnis modi!</p>
        </div>
        <div className='bg-amber-200 flex-1 flex flex-col justify-around items-center gap-2'>
          <div className='bg-amber-500 w-full h-full' > <p>Lorem ipsum dolor sit amet.</p></div>
          <div className='bg-amber-500 w-full h-full' > <p>Lorem ipsum dolor sit amet.</p></div>
          <div className='bg-amber-500 w-full h-full' > <p>Lorem ipsum dolor sit amet.</p></div>
          <div className='bg-amber-500 w-full h-full' > <p>Lorem ipsum dolor sit amet.</p></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;