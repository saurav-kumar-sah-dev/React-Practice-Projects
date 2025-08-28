import { useContext } from "react"
import { CounterContext } from "../Context/counterContext"

export const CounterComponent = () => {

  const {count,setCount} = useContext(CounterContext);
  return (
    <>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  )
}