import { useState } from "react";

function Example2() {

  const [count,setCount] = useState(0);

  function handleButton() {
    setCount(count+1);
  }

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={handleButton}>Update</button>
    </>
  )
}

export default Example2;