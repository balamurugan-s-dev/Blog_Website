import { useState } from 'react';
import Logo from '../../assets/logo';

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
            <div className={`top-16 fixed inset-0 bg-red-500 flex flex-col gap-6 items-center justify-center transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Treanding</a>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Treanding</a>
        </div>
    </div>
  );
};

export default Navbar;