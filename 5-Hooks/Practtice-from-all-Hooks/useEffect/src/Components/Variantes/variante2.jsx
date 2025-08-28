import { useEffect } from "react";
import { useState } from "react";

function Variante2() {

  const [count,setCount] = useState(0);

  useEffect(() => {
    alert(`I will render on only first time Button clicked`)},[]);

  function handleUpdateClick() {
    setCount((prev) => prev+1);
  }


  return (
    <>
    <p>Count: {count}</p>
    <button onClick={handleUpdateClick}>Update</button>
    </>
  )
}

export default Variante2;