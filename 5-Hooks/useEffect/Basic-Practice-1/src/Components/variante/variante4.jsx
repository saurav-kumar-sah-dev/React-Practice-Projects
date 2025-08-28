import {useState,useEffect} from 'react'

export  const Variante4 = () => {

  const [count,setCount] = useState(0);
  const [againCount,setAgainCount] = useState(0);
  

  useEffect(() => {
    alert('i will run on each render when count/againCount is updated')},[count,againCount])

  function handleButton() {
    setCount((prev) => prev+1)
  }

  function handleButton2() {
    setAgainCount((prev) => prev+1)
  }


  return (
    <>
    <div>
    <p>Count: {count}</p>
    <button onClick={handleButton}>Update</button>
    </div>

    <div>
    <p>Again Count: {againCount}</p>
    <button onClick={handleButton2}>Update</button>
    </div>
    </>
  )

}