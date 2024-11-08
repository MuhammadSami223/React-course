import React,{useContext} from 'react'
import UserContext from '../context/Context'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>please Login Page</div>

    return <div>Welcome {user.userName}</div>

  }

export default Profile