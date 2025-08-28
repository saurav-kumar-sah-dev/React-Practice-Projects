import { useRef } from "react";


function Example4() {

  const countRef = useRef(null);

  function onHandleInput(event) {
    event.preventDefault();
    console.log(`Texted message: ${countRef.current.value}`)
  }

  return (
    <>
    <input ref={countRef} onChange={onHandleInput} type="text" placeholder="Enter here Something" />
    </>
  )
}

export default Example4;