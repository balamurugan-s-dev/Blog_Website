import React from 'react';
import Logo from '../assets/logo';
import GoogleIcon from '../components/icons/GoogleIcon';

const LoginPage = () => {
  return (
    <div className="min-h-screen px-4 py-4 md:px-8 md:py-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-8">
      <Logo/>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col justify-center gap-6 w-sm">
          <h1 className="text-[#021526] text-2xl md:text-3xl font-bold">Welcome back</h1>
          <p className="">Welcome back! Please enter your details.</p>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium">Email</label>
              <input className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm" type="email" placeholder='Enter your email'/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium">Password</label>
              <input className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm" type="password" placeholder='Enter your password' />
            </div>
          </form>
          <p className=" text-sm font-bold cursor-pointer">Forget password</p>

          <div className='flex flex-col gap-4'>
            <button className="bg-[#021526] rounded-md px-3 py-3 text-white text-sm font-semibold cursor-pointer">Login</button>
            <button className="border-2 border-gray-400 rounded-md px-2 py-2 text-sm text-[#021526] font-semibold cursor-pointer flex items-center justify-center gap-2"> <GoogleIcon w={25} h={25}/> <span>Sign in witn Google</span></button>
          </div>

          <p className="text-sm my-4 text-center">Don't have an account?<span className="text-[#021526] font-semibold cursor-pointer"> Sign up for free</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;