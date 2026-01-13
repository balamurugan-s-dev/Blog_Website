import { useState } from 'react';
import GoogleIcon from '../assets/GoogleIcon';
import Assets from '../assets/Assets';
import { Link, useNavigate } from 'react-router-dom';
import ForgetPassword from './ForgetPassword';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useAuth} from '../context/AuthContext';

const LoginPage = () => {
  const {login} = useAuth()

  const [passhide, setPassHide] = useState(true)
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!formdata.password || !formdata.email) {
      toast.error("Please fill all the field")
      return
    }

    const toastID = toast.loading("Loading...")

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,
        formdata,
        { withCredentials: true }
      )

      // console.log(res.data)
      if (res.data.status) {
        login()
        toast.success("Welcome back!", { id: toastID })
        navigate("/")
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed", { id: toastID })
    }

  }

  return (
    <div className="flex-1 flex items-center justify-center px-2 md:px-0">
      <div className="flex flex-col justify-center gap-3 md:gap-6 w-sm">
        <h1 className="text-[#021526] text-2xl md:text-3xl font-bold">Welcome back</h1>
        <p className="text-[15px] md:text-[16px]">Welcome back! Please enter your details.</p>
        <div className='flex flex-col gap-1 md:gap-3'>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3 md:gap-6 font-medium"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">Email :</label>
              <input
                className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm"
                id="email"
                name='email'
                value={formdata.email}
                autoComplete="email"
                type="email"
                onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                placeholder='Enter your email'
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-medium">Password :</label>
              <div className='relative'>
                <input
                  className="border-2 w-full border-gray-400 rounded-md px-3 py-3 text-sm"
                  autoComplete="current-password"
                  id="password"
                  name='password'
                  value={formdata.password}
                  type={passhide ? "password" : "text"}
                  onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
                  placeholder='Enter your password'
                />

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

            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-[#021526] hover:underline mb-3 md:mb-4"
            >
              Forgot your password?
            </Link>

            <button type="submit" className="bg-[#021526] rounded-md px-3 py-3 text-white text-sm font-semibold cursor-pointer">Login</button>
          </form>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs font-semibold tracking-widest">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <button type="button" className="border-2 border-gray-400 rounded-md px-2 py-2 text-sm text-[#021526] font-semibold cursor-pointer flex items-center justify-center gap-2 w-full"> <GoogleIcon w={25} h={25} /> <span>Sign in with Google</span></button>

        </div>
        <p className="text-[13px] md:text-sm my-4 text-center">Don't have an account?<span className="text-[#021526] font-semibold cursor-pointer"><Link to="/register"> Sign up for free</Link></span></p>
      </div>
    </div>
  );
};

export default LoginPage;

