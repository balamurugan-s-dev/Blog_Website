import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function UserAuth({onLogout}) {
  const [click, setClick] = useState(false)

    const handleLogout = async() =>{
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`,
          {},
          { withCredentials: true }
        )

        if(res.data.status){
          toast.success("Logout Successfully")
          onLogout()
          setClick(false)
        }

      } catch (error) {
        toast.error(error.response?.data?.message || "Logout Failed")
      }
    }

  console.log(click)
  return (
    <div>
      <div className='border-2 rounded-full w-10 h-10 bg-amber-500 flex items-center justify-center' onClick={()=>setClick(p => !p)}>U</div>
      {click &&
      <div className='absolute top-18 bg-white flex flex-col justify-center gap-2 px-1 py-1 w-20 border-2'>
        <div className=''>
          Profile
        </div>
        <div className=''>
          <button type='button' onClick={handleLogout}>Logout</button>
        </div>
      </div> 
      }
    </div>

  )
}

export default UserAuth