import React,{useState,useContext} from 'react'
import UserContext from '../context/Context'

const Login = () => {
    const [userName, setUserName] = useState()
    const [passsword, setPassword] = useState()

    const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,passsword})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        placeholder='UserName' />
        <input type="text"
        value={passsword}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Passsword' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login