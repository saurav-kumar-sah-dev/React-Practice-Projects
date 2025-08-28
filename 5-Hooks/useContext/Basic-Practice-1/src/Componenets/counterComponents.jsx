import { useContext } from "react"
import { CounterContext } from "../Context/counterContext"

export const CounterComponent = () => {

  const {count,setCount} = useContext(CounterContext);
  return (
    <>
    <p>Coount: {count}</p>
    <button onClick={() => setCount(count+1)}>Update Count</button>
    </>
  )
}