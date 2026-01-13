import { useEffect, useState } from 'react';
import Logo from '../../assets/logo';
import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';
import UserAuth from '../common/UserAuth';
import {useAuth} from '../../context/AuthContext';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {isLoggedIn} = useAuth()

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* LOGO */}
            <Logo />

            {/* Mobile Menu */}
            <div className='md:hidden flex items-center gap-4'>
                {isLoggedIn ? <UserAuth/> : <span></span>}
                <div className='cursor-pointer text-2xl' onClick={() => { setOpen(prev => !prev) }}>
                    {open ? <span className='text-red-700'>✕</span> : "☰"}
                </div>

                {/* Mobile Link List */}
                <div className={`top-16 fixed inset-0 bg-white flex flex-col gap-8 text-lg font-medium items-center justify-center transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Treanding</Link>
                    {isLoggedIn ? (
                        <button>Logout</button>
                    ) : (
                        <Link to="/login">
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                                Login 👋
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Treanding</Link>
                {isLoggedIn ? (
                    <UserAuth />
                ) : (
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;