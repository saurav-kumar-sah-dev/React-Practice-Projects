import { useRef } from "react";


function Example2() {

  const domUpdateRef = useRef(null);

  function handleButton() {
    domUpdateRef.current.style.color = 'red';
    domUpdateRef.current.style.fontSize = '25px';
  }

  return (
    <>
    <button  onClick={handleButton} ref={domUpdateRef}>click-me</button>
    </>
  )
}

export default Example2;