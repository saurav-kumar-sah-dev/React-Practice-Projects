import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";



function App() {

 const [count,setCount] = useState(0);

  return (
    <>
    
    <p>count:{count}</p>
    <button type="button" class="btn btn-primary"  onClick={() => setCount(count+1)}>Primary</button>
     
    </>
  )
}

export default App
