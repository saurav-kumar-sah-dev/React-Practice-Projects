import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'

import Home from "./Components/home"
import About from "./Components/about"
import Skill from "./Components/skill"
import Navbar from './Components/navbar'

function App() {

  const router = createBrowserRouter(
    [
     {path:'/',
      element: (
        <div>
        <Navbar/>
        <Home/>
        </div>
      )
     },
     {path:'/about',
      element: (
        <div>
        <Navbar/>
        <About/>
        </div>
      )
     },
     {path:'/skill',
      element: (
        <div>
        <Navbar/>
        <Skill/>
        </div>
      )
     }
    ]
  )
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
