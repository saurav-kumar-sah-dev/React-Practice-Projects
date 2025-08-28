import { useState } from "react";

function Example6() {

  const [text,setText] = useState('hello');

  function onHandleInput(event) {
    setText(event.target.value);
    console.log(`Typed text is: ${event.target.value}`)
  }

  return (
    <>
    <input value={text} onChange={onHandleInput} type="text"   />
    </>
  )
}

export default Example6;