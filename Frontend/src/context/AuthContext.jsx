import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true)

    const checkAuth = async() => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/checkauth`,
                { withCredentials: true }
            )
                setIsLoggedIn(!!res.data.status)
        } catch (error) {
            setIsLoggedIn(false)
        }
        finally {
            setLoading(false)
        }
    }

    const login = () =>{
        setIsLoggedIn(true)
    }

    const logout = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`,
                {},
                { withCredentials: true }
            )
            setIsLoggedIn(false)
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to Logout !")
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])
    return (
        <AuthContext.Provider value={{ isLoggedIn, logout, login, loading }}>
            {children}  
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider