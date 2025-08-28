import { useState } from "react"
import Example1 from "./Components/example1"
import { useCallback } from "react"

function App() {
  const [count, setCount] = useState(0)

  const updateCount= useCallback(() => {
           setCount((prev) => prev+1) },[])

  return (
    <>
    <div>
     <p>Count: {count}</p>
     <button onClick={updateCount}>Update</button>
    </div>

    <br />

    <div>
     <Example1 buttonName='click-me' fun={updateCount}  />
    </div>

    </>
  )
}

export default App
