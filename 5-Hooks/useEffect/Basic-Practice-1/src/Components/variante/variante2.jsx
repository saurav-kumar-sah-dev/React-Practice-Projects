import {useState,useEffect} from 'react'

export  const Variante2 = () => {

  const [count,setCount] = useState(0);

  useEffect(() => {
    alert('I will run on only first render.')},[])

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