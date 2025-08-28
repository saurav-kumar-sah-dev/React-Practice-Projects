import { useRef } from "react";


function Example1() {

  const countRef = useRef(0);

  function handleButton() {
    countRef.current=countRef.current+1;
    console.log(`Counter : ${countRef.current}`)
  }

  return (
    <>
    <button  onClick={handleButton}>Update</button>
    </>
  )
}

export default Example1;