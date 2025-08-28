import { useState } from "react";
import { useRef } from "react";


function Example3() {

  const [count,setCount] = useState(0);

  const domUpdateRef = useRef(null);

  function handleDomRef() {
    if(domUpdateRef.current) {
    domUpdateRef.current.style.color = 'red';
    domUpdateRef.current.style.fontSize = '25px';
    }
  }

   function handleButton() {
    setCount((prev) => prev+1)
    handleDomRef();
  }

  return (
    <>
    <p ref={domUpdateRef}>Count: {count}</p>
    <button  onClick={handleButton} >click-me</button>      // here we can use for button DOM changes ref={domUpdateRef}
    </>
  )
}

export default Example3;