import { useReducer } from "react"

function App() {

  const reducer = (state,action) => {

    if(action.type==='Increment') {
     return state+1;
    }

    if(action.type==='Decrement') {
     return state-1;
    }
    if(action.type==='Reset') {
     return state=0;
    }

    return state;

  }
  
  const [count, Dispatch] = useReducer(reducer,0);

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={() => Dispatch({type:'Increment'})}>Increment</button>
    <button onClick={() => Dispatch({type:'Decrement'})}>Decrement</button>
    <button onClick={() => Dispatch({type:'Reset'})}>Reset</button>
      
    </>
  )
}

export default App
