import {useState} from 'react'
import { useAuth } from '../../context/AuthContext'

function UserAuth() {
  const [click, setClick] = useState(false)
  const {logout} = useAuth()
  return (
    <div>
      <div className='cursor-pointer border-2 rounded-full w-10 h-10 bg-amber-500 flex items-center justify-center' onClick={()=>setClick(p => !p)}>U</div>
      {click &&
      <div className='absolute top-18 bg-white flex flex-col justify-center gap-2 px-1 py-1 w-20 border-2'>
        <div className=''>
          Profile
        </div>
        <div className=''>
          <button onClick={logout}>Logout</button>
        </div>
      </div> 
      }
    </div>

  )
}

export default UserAuth