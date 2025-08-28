import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {

  let intialValue = useState(0);
  let value = intialValue[0];
  let setValue = intialValue[1]

  return (
    <>
    <p>Count: {value}</p>

     <button onClick={() => setValue(value+1)}   class="btn btn-info">Update</button>
     
    </>
  )
}

export default App
