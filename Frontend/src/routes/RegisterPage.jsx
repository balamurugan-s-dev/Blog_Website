import { useState } from 'react';
import GoogleIcon from '../assets/GoogleIcon';
import Assets from '../assets/Assets';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const RegisterPage = () => {

  const [passhide, setPassHide] = useState(true)
  const [confpass, setConfpass] = useState(true)
  const [termcheck, setTermcheck] = useState(false)

  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [confirmpass, setConfirmpass] = useState('')
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();

    if(!formData.username || !formData.email || !formData.password){
      toast.error("Please fill all the field !")
      return
    }

    if (confirmpass !== formData.password) {
      toast.error("Password missmach")
      return
    }

    if (!termcheck) {
      toast("Please accept the Terms & Conditions to continue", {
        icon: "⚠️",
      });
      return
    }

    const toastID = toast.loading("Loading...")

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData,
        { withCredentials: true }
      );

      // console.log(res.data);
      if (res.data.status) {
        toast.success("Registered successfully", { id: toastID });
        navigate("/")
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed", { id: toastID })
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center px-2 md:px-0">
      <div className="flex flex-col justify-center gap-2 md:gap-3 w-sm">
        <h1 className="text-[#021526] text-2xl md:text-3xl font-bold">Get started</h1>
        <p className="text-[15px] md:text-[16px]">Create your account to get started.</p>
        <div className='flex flex-col gap-1 md:gap-3'>
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-3 md:gap-5 font-medium"
          >

            {/* username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-medium">Username :</label>
              <input
                className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm"
                id="username"
                name='username'
                value={formData.username}
                onChange={(e) => setFormdata({ ...formData, username: e.target.value })}
                autoComplete="username"
                type="text"
                placeholder='Enter your username'
              />
            </div>

            {/* email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">Email :</label>
              <input
                className="border-2 border-gray-400 rounded-md px-3 py-3 text-sm"
                id="email"
                name='email'
                value={formData.email}
                onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
                autoComplete="email"
                type="email"
                placeholder='Enter your email'
              />
            </div>

            {/* password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-medium">New Password :</label>
              <div className='relative'>
                <input
                  className="border-2 w-full border-gray-400 rounded-md px-3 py-3 text-sm"
                  autoComplete="new-password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormdata({ ...formData, password: e.target.value })}
                  type={passhide ? "password" : "text"}
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

            {/* confirm password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cpassword" className="font-medium">Confirm Password :</label>
              <div className='relative'>
                <input className="border-2 w-full border-gray-400 rounded-md px-3 py-3 text-sm"
                  autoComplete="new-password"
                  id="cpassword"
                  name='cpassword'
                  value={confirmpass}
                  onChange={(e) => setConfirmpass(e.target.value)}
                  type={confpass ? "password" : "text"}
                  placeholder='confirm password'
                />
                <button
                  type="button"
                  aria-label={confpass ? "Show password" : "Hide password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setConfpass(p => !p)}
                >
                  <img src={confpass ? Assets.Hide : Assets.Unhide} alt="" className="w-6 h-6" />
                </button>
              </div>
            </div>

            <label className="flex items-center w-fit gap-2 text-sm font-medium cursor-pointer mb-5" onClick={() => setTermcheck(prev => !prev)}>
              <input
                type="checkbox"
                id="terms"
                checked={termcheck}
                onChange={(e) => setTermcheck(e.target.checked)}
              />
              <span>Accept <Link to="" className="hover:underline">terms & conditions</Link></span>
            </label>

            <button type="submit" className="bg-[#021526] rounded-md px-3 py-3 text-white text-sm font-semibold cursor-pointer">Sign Up</button>

          </form>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs font-semibold tracking-widest">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <button type="button" className="border-2 border-gray-400 rounded-md px-2 py-2 text-sm text-[#021526] font-semibold cursor-pointer flex items-center justify-center gap-2 w-full"> <GoogleIcon w={25} h={25} /> <span>Sign up with Google</span></button>
        </div>
        <p className="text-[13px] md:text-sm my-4 text-center">Already have an account?<span className="text-[#021526] font-semibold cursor-pointer"> <Link to="/login">Sign in</Link></span></p>
      </div>
    </div>
  );
};

export default RegisterPage;

