import {useState,useEffect} from 'react'

export  const Variante3 = () => {

  const [count,setCount] = useState(0);
  

  useEffect(() => {
    alert(`i will run on each render when count is updated ${count} render.`)},[count])

  function handleButton() {
    setCount((prev) => prev+1)
  }

 



  return (
    <>
    <p>Count: {count}</p>
    <button onClick={handleButton}>Update</button>
    </>
  )

}