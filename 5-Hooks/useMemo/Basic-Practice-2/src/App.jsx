import { useMemo } from "react";
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    for(let i=0;i<=10000000; i++) {}
    return num*2;
  }

  function handleInputChange(event) {
    setInput(Number(event.target.value));
  }

  let result = useMemo(() => expensiveTask(input), [input]);

  function handleUpdateCount() {
    setCount((prev) => prev+1);
  }

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={handleUpdateCount}>Update Count</button>
      </div>

      <div>
        <p>Result : {result}</p>
          <input value={input} onChange={handleInputChange} type="number" placeholder="Enter Number"/>
      </div>
    </>
  )
}

export default App
