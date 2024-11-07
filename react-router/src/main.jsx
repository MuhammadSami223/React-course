import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import { User } from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       },
//     ]
//   }
// ])
// idher hum ye method bhi use ker sakte he magar idher issue ye he ke is me children pass kerna parhta he phir us me /About,/contact dena parhta he zyada perfer niche wala syntax he 

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)
// is syntax me hame createBrowserRouter ke sath createRoutesFromElements dena parhta he us ke andar ROutes uper wale syntax me children Routes banane parhte the is me createRoutesFromElements me

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
