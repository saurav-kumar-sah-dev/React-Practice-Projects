import { Outlet } from "react-router-dom"

export const Department = () => {
  return (
    <div>
      <h1>Department Page</h1> 
      <Outlet></Outlet>

    </div>
  )
}