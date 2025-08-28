import { useContext } from "react"
import { CounterContext } from "../Context/counterContext"
import { useCustomHook } from "../Context/counterContext";

export const CounterComponent = () => {

  const {count,setCount} = useCustomHook();
  return (
    <>
   <p>Child Count: {count}</p>
    <button onClick={() => setCount(count+1)}>Update Count</button>
    </>
  )
}