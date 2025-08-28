import { useNavigate } from "react-router-dom"

export const Student = () => {

  const navigate =useNavigate();

  function handleNavigateButton() {
    navigate('/department/admin');
  }
  
  return (
    <div>
      <h1>Student Dashbord</h1>
      <button onClick={handleNavigateButton}>Admin Dashbord</button>
    </div>
  )
}