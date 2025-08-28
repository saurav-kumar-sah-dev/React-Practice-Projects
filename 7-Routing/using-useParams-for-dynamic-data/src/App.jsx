import {createBrowserRouter}  from 'react-router-dom';
import {RouterProvider} from 'react-router-dom'

import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Skill } from "./Components/skill";
import { Department } from './Components/department';
import { Navbar } from './Components/navbar';
import { Student } from './Components/student';

function App() {

  const router = createBrowserRouter(
    [
     {path:'/',
      element: (
        <>
        <Navbar/>
        <Home/>
        </>
      )
     },
       {path:'/about',
      element: (
        <>
        <Navbar/>
        <About/>
        </>
      )
     },
       {path:'/skill',
      element: (
        <>
        <Navbar/>
        <Skill/>
        </>
      )
     },
       {path:'/department',
      element: (
        <>
        <Navbar/>
        <Department/>
        </>
      )
     },
     {path: '/student/:id',
      element: (
        <>
        <Navbar/>
        <Student/>
        </>
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
