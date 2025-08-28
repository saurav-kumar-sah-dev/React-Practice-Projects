import { useState } from "react";


function AddButton() {

  const [count,setCount] = useState(0);

  return (
    <>
    <p>Count: {count}</p>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count+1)}>Add</button> <br /><br />
    <button type="button" class="btn btn-primary" onClick={() => setCount(count-1)}>Sub</button> <br /><br />
    <button type="button" class="btn btn-primary" onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default AddButton;