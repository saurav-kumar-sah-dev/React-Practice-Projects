import { useReducer } from "react";

function Example1() {

  const reducer = (state,action) => {

    if(action.type==='Increment') {

     return state+1;
    }

    if(action.type==='Decrement') {

     return state-1;
    }

    if(action.type==='Reset') {

     return 0;
    }

    return state;
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

export default Example1;