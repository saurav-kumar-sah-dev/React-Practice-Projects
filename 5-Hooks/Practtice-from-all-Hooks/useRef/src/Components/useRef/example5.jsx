import { useState } from "react";
import { useRef } from "react";

function Example5() {
  
  const [typedText,setTypedText] = useState('');
  const textRef = useRef(null);


  function handleInputChange(event) {
    event.preventDefault();
    setTypedText(textRef.current.value);
    console.log(`Typed text: ${textRef.current.value}`);

  }

  return (
    <>
    <input ref={textRef} onChange={handleInputChange} type="text" placeholder="Type anything here" />
    <p>Typed text: {typedText}</p>
    </>
  )
}

export default Example5;