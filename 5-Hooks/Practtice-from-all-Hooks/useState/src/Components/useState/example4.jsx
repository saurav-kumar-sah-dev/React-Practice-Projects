import { useState } from "react";

function Example4() {

  const [count,setCount] = useState(0);

  function handleButton1() {
    setCount(count+1);
  }

  function handleButton2() {
    setCount(count-1);
  }

  function handleButton3() {
    setCount(0);
  }

  return (
    <>
    <p>Count: {count}</p>
    <button style={{margin:'5px'}} onClick={handleButton1}>Add</button>
    <button style={{margin:'5px'}} onClick={handleButton2}>Sub</button>
    <button style={{margin:'5px'}} onClick={handleButton3}>Reset</button>
    </>
  )
}

export default Example4;