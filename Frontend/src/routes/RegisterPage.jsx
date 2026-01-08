import { useState } from 'react';
import GoogleIcon from '../components/icons/GoogleIcon';
import Assets from '../assets/Assets';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const [passhide, setPassHide] = useState(true)
  const [confpass, setConfpass] = useState(true)
  const [termcheck, setTermcheck] = useState(false)

  return (
    <div className="flex-1 flex items-center justify-center px-2 md:px-0">
      <div className="flex flex-col justify-center gap-3 md:gap-6 w-sm">
        <h1 className="text-[#021526] text-2xl md:text-3xl font-bold">Create an account</h1>
        <p className="text-[15px] md:text-[16px]">Create your account to get started.</p>
        <form className="flex flex-col gap-3 md:gap-6 font-medium">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-medium">Username :</label>
            <input className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm" id="username" autoComplete="username" type="text" placeholder='Enter your username' />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">Email :</label>
            <input className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm" id="email" autoComplete="email" type="email" placeholder='Enter your email' />
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <label htmlFor="password" className="font-medium">new Password :</label>
            <div className='relative'>
              <input className="border-2 w-full border-gray-400 rounded-md px-3 py-3 text-sm" autoComplete="password" id="password" type={passhide ? "password" : "text"} placeholder='Enter your password' />
              <img className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-6 h-6" onClick={() => setPassHide(prev => !prev)} src={passhide ? Assets.Hide : Assets.Unhide} alt="hide icon" />
            </div>

            <label htmlFor="cpassword" className="font-medium">confirm Password :</label>
            <div className='relative'>
              <input className="border-2 w-full border-gray-400 rounded-md px-3 py-3 text-sm" autoComplete="cpassword" id="cpassword" type={confpass ? "password" : "text"} placeholder='confirm password' />
              <img className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-6 h-6" onClick={() => setConfpass(prev => !prev)} src={confpass ? Assets.Hide : Assets.Unhide} alt="hide icon" />
            </div>
          </div>
        </form>

        <label className="flex items-center w-fit gap-2 text-sm font-medium cursor-pointer mb-5" onClick={()=>setTermcheck(prev => !prev)}>
          <input
            type="checkbox"
            name="terms"
            id="terms"
          />
          <span>Accept terms & conditions</span>
        </label>

        <div className='flex flex-col gap-1 md:gap-2'>
          <button className="bg-[#021526] rounded-md px-3 py-3 text-white text-sm font-semibold cursor-pointer">Sign Up</button>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs font-semibold tracking-widest">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <button className="border-2 border-gray-400 rounded-md px-2 py-2 text-sm text-[#021526] font-semibold cursor-pointer flex items-center justify-center gap-2"> <GoogleIcon w={25} h={25} /> <span>Sign up witn Google</span></button>
        </div>

        <p className="text-[13px] md:text-sm my-4 text-center">Already have an account?<span className="text-[#021526] font-semibold cursor-pointer"> <Link to="/login">Sign in</Link></span></p>
      </div>
    </div>
  );
};

export default RegisterPage;

