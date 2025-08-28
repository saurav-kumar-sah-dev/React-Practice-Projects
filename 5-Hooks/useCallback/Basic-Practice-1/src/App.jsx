import { useState } from "react"
import Example1 from "./Components/example1"

function App() {
  const [count, setCount] = useState(0)

  function updateCount() {
    setCount((prev) => prev+1)
  }

  return (
    <>
    <div>
     <p>Count: {count}</p>
     <button onClick={updateCount}>Update</button>
    </div>

    <br />

    <div>
      <Example1 buttonName='click-me' />
    </div>

    </>
  )
}

export default App
