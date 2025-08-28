import { useRef } from "react";

function Example7() {

  const inputTextRef = useRef(null);

  function handleUpdatedInput(event) {

    event.preventDefault();
    
    console.log(`Typed text: ${inputTextRef.current.value}`)

  }

  return (
  <>
  <input ref={inputTextRef} onChange={handleUpdatedInput} type="text" placeholder="Type anything here" />
  </>
  )
}

export default Example7;