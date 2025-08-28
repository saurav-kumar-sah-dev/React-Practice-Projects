import { useEffect } from "react";
import { useState } from "react";

function Variante4() {

  const [count,setCount] = useState(0);
  const [againCount,setAgainCount] = useState(0);

  useEffect(() => {
    alert(`I will render on both Button clicked`)},[count,againCount]);

  function handleUpdateClick() {
    setCount((prev) => prev+1);
  }

  function handleUpdateClick2() {
    setAgainCount((prev) => prev+1);
  }


  return (
    <>
    <div>
    <p>Count: {count}</p>
    <button onClick={handleUpdateClick}>Update</button>
    </div>

     <div>
    <p>Again Count: {againCount}</p>
    <button onClick={handleUpdateClick2}>Update</button>
    </div>
    </>
  )
}

export default Variante4;