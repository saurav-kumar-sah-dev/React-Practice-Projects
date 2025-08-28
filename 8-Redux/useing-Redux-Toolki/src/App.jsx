import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counter/CounterSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);

  const Dispatch = useDispatch();

  const [amount,setAmount]=useState(0);

  function handleIncrementButton() {
    Dispatch(increment());
  }

  function handleDecrementButton() {
    Dispatch(decrement());
  }

  function handleResetButton() {
    Dispatch(reset());
  }

  function handleincrementByAmountButton() {
    Dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
      <button onClick={handleResetButton}>Reset</button>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={handleincrementByAmountButton}>incrementByAmount</button>
    </div>
  );
}

export default App;
