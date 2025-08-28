import { useState } from "react";

function Example12() {

  const [typedText,setTypedText] = useState('');

  function handleInputClick(event) {
    setTypedText(event.target.value);
    console.log(`Typed text : ${event.target.value}`)
  }

  return (
    <>
    <input value={typedText} onChange={handleInputClick} type="text" placeholder="Type anything here" />
    <p>Typed text: {typedText}</p>
    </>
  )
}

export default Example12;