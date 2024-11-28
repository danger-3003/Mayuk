import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import App from './App.jsx'

const Structure=()=>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router=createBrowserRouter([
  {
    path: '/',
    element:<Structure />,
    children:[{
      path:'/',
      element:<App />
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
