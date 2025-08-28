import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";



function App() {

 const [count,setCount] = useState(0);

 function onButtonClick() {
  setCount((prev) => prev+1);
 }

  return (
    <>
    
    <p>count:{count}</p>
    <button type="button" class="btn btn-primary"  onClick={onButtonClick}>Primary</button>
     
    </>
  )
}

export default App
