import { useContext } from "react";
import { ConterContext, useCustomConter } from "../Context/CounterContext";
function Counter() {
  
  const {count,setCount} = useCustomConter();

  return (
    <>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Counter;