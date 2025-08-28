import { useMemo, useState } from "react";

function Example1() {

  const [count,setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0);

  function handleInputChange(event) {
    setInputValue(Number(event.target.value));
  }

  function expensiveTask(num) {
    console.log("Expensive calculation running...");
    for(let i=0;i<=100000000;i++) {}
    
    return num*2;
  }

  let result = useMemo(() => expensiveTask(inputValue),[inputValue]);

  function updateCount() {
    setCount((prev) => prev+1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={updateCount}>Update Count</button>
      <p>Result: {result}</p>
      <input value={inputValue} onChange={handleInputChange} type="number" placeholder="Enter Number" />
    </>
  )
}

export default Example1;