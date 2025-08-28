import { useRef } from "react";
import { useState } from "react"

export const AddButton = () => {

  const [count,setCount] = useState(0);
  const buttonRef= useRef(null);

  function handleButtonRef() {

    if(buttonRef.current) {

    buttonRef.current.style.color = "white";
    buttonRef.current.style.backgroundColor = "blue";
    buttonRef.current.style.border = "2px solid darkred";
    buttonRef.current.style.fontWeight = "bold";
    buttonRef.current.innerText = "Clicked!";

    }

  }

  function handleButtonUpdate() {
  setCount((prev) => prev+1);
  handleButtonRef();
  }


 return (
  <>
  <p>Count: {count}</p>
  <button onClick={handleButtonUpdate} ref={buttonRef}>Update</button>
  </>
 )
}