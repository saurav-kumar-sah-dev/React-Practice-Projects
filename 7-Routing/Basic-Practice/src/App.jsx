import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Department } from "./Components/department";
import { Navbar } from "./Components/navbar";
import { StudentInfo } from "./Components/studentInfo";
import { Student } from "./Components/studentDepartment";
import { Teacher } from "./Components/teacherDepartment";
import { Admin } from "./Components/adminDepartment";
import { ErrorPage } from "./Components/404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/department",
      element: (
        <>
          <Navbar />
          <Department />
        </>
      ),
      children: 
      [
        {path: '/department/student',
          element: <Student/>
        },
        {path: '/department/teacher',
          element: <Teacher/>
        },
        {path: '/department/admin',
          element: <Admin/>
        }
      ]
    },
    { path: "/student/:id/:name",
      element: (
        <div>
          <StudentInfo></StudentInfo>
        </div>
      )
    },
    {path:'*',element: <ErrorPage/>}
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
