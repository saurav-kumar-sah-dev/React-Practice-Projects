import {useNavigate} from 'react-router-dom';

export const About = () => {

  const navigate = useNavigate();

  
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  )
}