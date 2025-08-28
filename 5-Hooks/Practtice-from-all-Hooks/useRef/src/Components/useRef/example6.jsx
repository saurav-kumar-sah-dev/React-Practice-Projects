import { useRef } from "react";

function Example6() {

  const counterRef = useRef(0);

  function handleUpdatedCounter(event) {

    event.preventDefault();
    
    counterRef.current=counterRef.current+1
    console.log(`Counter: ${counterRef.current}`)

  }

  return (
  <>
  <button onClick={handleUpdatedCounter}>update</button>
  </>
  )
}

export default Example6;