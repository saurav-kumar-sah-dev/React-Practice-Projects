import { useReducer } from "react";

function App() {
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return 0;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => dispatch({ type: "Increment" });
  const handleDecrement = () => dispatch({ type: "Decrement" });
  const handleReset = () => dispatch({ type: "Reset" });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
