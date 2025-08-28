import {createBrowserRouter}  from 'react-router-dom';
import {RouterProvider} from 'react-router-dom'

import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Skill } from "./Components/skill";
import { Department } from './Components/department';
import { Navbar } from './Components/navbar';
import { Student } from './Components/student';
import { CseDepartment } from './Components/cseDepartment';
import { EceDepartment } from './Components/eceDepartment';
import { EeeDepartment } from './Components/eeeDepartment';
import Error from './Components/404';

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
      ),

      children: [
        {path: '/department/cse',
          element: (
            <div>
              <CseDepartment/>
            </div>
          )
        },
        {path: '/department/eee',
          element: (
            <div>
              <EeeDepartment/>
            </div>
          )
        },
        {path: '/department/ece',
          element: (
            <div>
              <EceDepartment/>
            </div>
          )
        }
      ]
     },
     {path: '/student/:id',
      element: (
        <>
        <Navbar/>
        <Student/>
        </>
      )
     },
     {
      path: '*',
      element: ( 
      <div>
      <Error/>
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
