import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  //useState me hum prevCounter bhi de sakte he ager hame button click pe 4 value barhani he to hum prevCount ka use karen ge warna state update nhi hogi
  
  //useState

  // setCount(prevCount => count+1)
  // setCount(prevCount => count+1)
  // setCount(prevCount => count+1)
  // ab is tarah ho jay ga direct 18 ager hum setCount me cout +1 kuch is tarah dete setCount(count+1) to ye 18 nhi hota bhake ap jitni bar is ko likho

  const addVal = ()=>{
    setCount(count + 1)
  }
  const removeVal = ()=>{
    if (count >=1) {
      
      setCount(count-1)
    }
  }
  return (
    <>
      <div>
    <button onClick={addVal}>Add count</button>
    <p>{count }</p>
    <button onClick={removeVal}>Remove count</button>
        </div>
    </>
  )
}

export default App
