import React from 'react'
import { useParams } from 'react-router-dom'
export const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-5xl text-center p-5'>User:{userid}</div>
  )
}
