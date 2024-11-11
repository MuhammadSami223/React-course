import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'

function App() {

  return (
    <>
  <h1>Redux toolkit</h1>
  <Addtodo/>
  <Todos/>
    </>
  )
}

export default App
