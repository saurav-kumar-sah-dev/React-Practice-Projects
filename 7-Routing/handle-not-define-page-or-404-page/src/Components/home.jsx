import {useNavigate} from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate();

  function handleNavigateButton() {
    navigate('/skill')
  }
   

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigateButton}>Go to Skill Page</button>
    </div>
  )
}