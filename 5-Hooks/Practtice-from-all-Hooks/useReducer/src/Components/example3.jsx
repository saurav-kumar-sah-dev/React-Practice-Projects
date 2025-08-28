import { useReducer } from "react";

function Example3() {

  function reducer(state,action) {
    switch(action.type) {
      case 'Increment' : return state+1;
      case 'Decrement' : return state-1;
      case 'Reset' : return 0;
      default: return state;
    }
  }

  const [count,dispatch] = useReducer(reducer,0)

  function handleIncrementButton() {
    dispatch({type: 'Increment'})
  }

  function handleDecrementButton() {
    dispatch({type: 'Decrement'})
  }

  function handleResetButton() {
    dispatch({type: 'Reset'})
  }


  return (
    <>
    <p>Count: {count}</p>
    <button onClick={handleIncrementButton}>Increment</button>
    <button onClick={handleDecrementButton}>Decrement</button>
    <button onClick={handleResetButton}>Reset</button>
    </>
  )
}

export default Example3;