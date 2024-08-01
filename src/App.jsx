import { useState,useEffect } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Context from './Context/Context'

function App() {
const [menu, setMenu] = useState(false)
const router=createBrowserRouter([
  {
   path:'/',
   element:<><Navbar/> <Home/></>
  },
  {
   path:'/video/:categoryId/:videoId',
   element:<><Navbar/> <Video/></>
  },
])
  return (
    <>
    <Context.Provider value={{menu,setMenu}} >
   <RouterProvider router={router}/>
    </Context.Provider>
    </>
  )
}

export default App
