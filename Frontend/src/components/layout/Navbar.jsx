import { useState } from 'react';
import Logo from '../../assets/logo';
import { Image } from '@imagekit/react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <div className=''>
            <Logo />
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
            <div className='cursor-pointer text-2xl' onClick={()=> {setOpen(prev => !prev)}}>
                {open ? <span className='text-red-700'>✕</span> : "☰"}
            </div>

            {/* Mobile Link List */}
            <div className={`top-16 fixed inset-0 bg-white flex flex-col gap-8 text-lg font-medium items-center justify-center transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Treanding</a>
                <a href="/">
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
                </a>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Treanding</a>
            <a href="/">
                <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
            </a>
        </div>
    </div>
  );
};

export default Navbar;