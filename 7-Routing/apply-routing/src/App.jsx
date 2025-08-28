import {createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import { Home } from './Components/home';
import { About } from './Components/about';
import { Skill } from './Components/skill';

function App() {

  const router = createBrowserRouter(
    [
      {path:'/',element: <Home/>},
      {path:'/about',element: <About/>},
      {path:'/skill',element: <Skill/>},
    ]
  )
  
  return (
    <>

     <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
