import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='px-6 py-2 inline-block hover:bg-blue-100 rounded-full'>LogoutBtn</button>
  )
}

export default LogoutBtn