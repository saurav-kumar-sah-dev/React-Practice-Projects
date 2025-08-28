import { useState } from "react";
import { useRef } from "react";

function Example9() {

  const [count,setCount] =useState(0);

  const updatedDOMRef = useRef(null);

  function handleUpdatedDOM() {

    if(updatedDOMRef.current) {
      updatedDOMRef.current.style.color='red';
      updatedDOMRef.current.style.fontSize='30px';
    }

  }

 function handleUpdatedCounter() {
  setCount((prev) => prev+1);
  handleUpdatedDOM();
 }


  return (
  <>
  <p ref={updatedDOMRef}>Count: {count}</p>
  <button onClick={handleUpdatedCounter}>Update DOM + Update Counter</button>
  </>
  )
}

export default Example9;