import { useState } from "react";

function Example1() {

  const inatialCount = useState(0);
  const count = inatialCount[0];
  const setCount = inatialCount[1];

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

export default Example1;