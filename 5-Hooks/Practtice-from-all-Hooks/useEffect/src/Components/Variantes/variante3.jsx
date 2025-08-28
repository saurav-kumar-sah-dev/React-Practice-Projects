import { useEffect } from "react";
import { useState } from "react";

function Variante3() {

  const [count,setCount] = useState(0);

  useEffect(() => {
    alert(`I will render when Button clicked`)},[count]);

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

export default Variante3;