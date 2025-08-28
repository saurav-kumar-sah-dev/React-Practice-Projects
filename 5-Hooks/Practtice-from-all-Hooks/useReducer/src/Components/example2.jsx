import { useReducer } from "react";

function Example2() {

  const reducer = (state,action) => {

  switch(action.type) {
    case 'Increment' : return state+1;
    case 'Decrement' : return state-1;
    case 'Reset' : return 0;
    default: return state;
  }
  }

  const [count,dispatch] = useReducer(reducer,0);

  
  return (
    <>
    <p>Count: {count}</p>
    <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
    <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
    <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
    </>
  )
}

export default Example2;