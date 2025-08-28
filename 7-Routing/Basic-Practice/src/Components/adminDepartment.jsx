import { useNavigate } from "react-router-dom"

export const Admin = () => {

  const navigate = useNavigate();

   function handleNavigateButton() {
    navigate('/');
  }

  return (
    <div>
      <h1>Admin Dashbord</h1>
      <button onClick={handleNavigateButton}>Home Page</button>
    </div>
  )
}