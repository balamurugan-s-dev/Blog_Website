import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import ProfileIcon from '../../assets/ProfileIcon'
import AccountSettingIcon from '../../assets/AccountSettingIcon'
import LogoutIcon from '../../assets/LogoutIcon'

function UserAuth() {
  const [click, setClick] = useState(false)
  const { logout } = useAuth()

  return (
    <div className="relative">
      {/* Overlay */}
      {click && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setClick(false)}
        />
      )}

      {/* Avatar */}
      <button
        onClick={() => setClick((p) => !p)}
        className="relative z-50 w-9 h-9 rounded-full bg-amber-500 cursor-pointer
               flex items-center justify-center
               font-semibold text-white
               hover:bg-amber-600
               focus:outline-none focus:ring-2 focus:ring-amber-400
               transition"
      >
        U
      </button>

      {/* Dropdown */}
      {click && (
        <div
          className="absolute right-0 mt-5 w-47 px-1.5 py-1.5
                 bg-white rounded-sm shadow-lg
                 border border-gray-200
                 z-50 overflow-hidden
                 animate-dropdown"
        >
          <button
            className="w-full px-4 py-2.5 text-left text-sm
                   text-black hover:bg-gray-100 rounded-sm
                   transition flex gap-3"
          >
            <ProfileIcon />
            Profile
          </button>


          <button
            className="w-full px-4 py-2.5 text-left text-sm
                   text-black hover:bg-gray-100 rounded-sm
                   transition flex gap-3"
          >
            <AccountSettingIcon />
            Account setting
          </button>


          <button
            onClick={logout}
            className="w-full px-4 py-2.5 text-left text-sm
                   text-red-600 hover:bg-red-50 rounded-sm
                   transition flex gap-3"
          >
            <LogoutIcon />
            Logout
          </button>
        </div>
      )}
    </div>

  )
}

export default UserAuth