import { useState } from 'react';
import GoogleIcon from '../components/icons/GoogleIcon';
import Assets from '../assets/Assets';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const [passhide, setPassHide] = useState(true)

  return (
    <div className="flex-1 flex items-center justify-center px-2 md:px-0">
      <div className="flex flex-col justify-center gap-3 md:gap-6 w-sm">
        <h1 className="text-[#021526] text-2xl md:text-3xl font-bold">Welcome back</h1>
        <p className="text-[15px] md:text-[16px]">Welcome back! Please enter your details.</p>
        <form className="flex flex-col gap-3 md:gap-6 font-medium">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">Email :</label>
            <input className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm" id="email" autoComplete="email" type="email" placeholder='Enter your email' />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">Password :</label>
            <div className='relative'>
              <input className="border-2 w-full border-gray-400 rounded-md px-3 py-3 text-sm" autoComplete="current-password" id="password" type={passhide ? "password" : "text"} placeholder='Enter your password' />

              <button
                type="button"
                aria-label={passhide ? "Show password" : "Hide password"}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setPassHide(p => !p)}
              >
                <img src={passhide ? Assets.Hide : Assets.Unhide} alt="" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </form>

        <Link
          to="/forgot-password"
          className="text-sm font-semibold text-[#021526] hover:underline"
        >
          Forgot your password?
        </Link>
        <div className='flex flex-col gap-1 md:gap-2'>
          <button type="submit" className="bg-[#021526] rounded-md px-3 py-3 text-white text-sm font-semibold cursor-pointer">Login</button>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs font-semibold tracking-widest">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <button type="button" className="border-2 border-gray-400 rounded-md px-2 py-2 text-sm text-[#021526] font-semibold cursor-pointer flex items-center justify-center gap-2"> <GoogleIcon w={25} h={25} /> <span>Sign in with Google</span></button>
        </div>

        <p className="text-[13px] md:text-sm my-4 text-center">Don't have an account?<span className="text-[#021526] font-semibold cursor-pointer"><Link to="/register"> Sign up for free</Link></span></p>
      </div>
    </div>
  );
};

export default LoginPage;

