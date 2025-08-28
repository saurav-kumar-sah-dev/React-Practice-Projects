import { useEffect, useState } from "react";

function Example3() {

  const [count,setCount] = useState(0);
  const [againCount,setAgainCount] = useState(0);

 useEffect(() => {
  console.log('I will render on each click')
 },[count,againCount])

  function handleUpdateCount() {
    setCount((prev) => prev+1);
  }

  function handleUpdateCount2() {
    setAgainCount((prev) => prev+1);
  }


  return (
    <>
    <p>Count : {count}</p>
    <button onClick={handleUpdateCount}>Update Count</button>

    <p>Again Count : {againCount}</p>
    <button onClick={handleUpdateCount2}>Update Again Count</button>
    </>
  )
}

export default Example3;