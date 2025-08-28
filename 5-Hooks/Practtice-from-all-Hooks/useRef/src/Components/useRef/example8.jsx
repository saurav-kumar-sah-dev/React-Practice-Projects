import { useState } from "react";
import { useRef } from "react";

function Example8() {

  const updatedDOMRef = useRef(null);

  function handleUpdatedDOM() {

    if(updatedDOMRef.current) {
      updatedDOMRef.current.style.color='red';
      updatedDOMRef.current.style.fontSize='30px';
    }

  }

  return (
  <>
  <p ref={updatedDOMRef}>Hello World</p>
  <button onClick={handleUpdatedDOM}>Update DOM</button>
  </>
  )
}

export default Example8;