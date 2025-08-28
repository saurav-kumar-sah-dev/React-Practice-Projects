import { useContext } from "react";
import { ConterContext } from "../Context/CounterContext";
function Counter() {
  
  const {count,setCount} = useContext(ConterContext)

  return (
    <>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Counter;