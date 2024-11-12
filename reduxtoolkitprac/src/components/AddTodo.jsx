import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import {useDispatch} from 'react-redux'
const AddTodo = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const handleUpdateTodo = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className='flex flex-col justify-center items-center mt-10 bg-zinc-500 w-full p-3'>
        <form onSubmit={handleUpdateTodo}>

        <div className="Todo-container flex gap-2">
        <input type="text" 
        placeholder='Enter A Todo....'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className='h-10 bg-transparent border-2 rounded-lg px-3'
        />
        <button type='submit' className='px-6 py-2 rounded-lg bg-blue-700'>Add</button>
        </div>
        </form>
    </div>
  )
}

export default AddTodo