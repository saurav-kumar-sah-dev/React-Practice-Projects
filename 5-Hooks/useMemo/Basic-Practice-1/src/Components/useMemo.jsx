import { useMemo, useState } from "react"


function Example1() {
  
const [count,setCount] = useState(0);

function expensiveTask(num) {
  for(let i=0;i<=100000000;i++){ }

  return num*2;
  
}

let result = useMemo(() => expensiveTask(4),[])

function handleUpdateButton() {
  setCount((prev) =>prev+1)
}

  return (
    <>
      <p >Count: {count}</p>
      <button style={{color:'white',backgroundColor:'blue'}} onClick={handleUpdateButton}>Update</button>

      <p>Result: {result}</p>
    </>
  )
}

export default Example1;
