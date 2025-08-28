import { useReducer } from "react"

function App() {


  function reducer(state,action) {

    switch(action.type) {
      case 'Increment' : return state+1;
      case 'Decrement' : return state-1;
      case 'Reset' : return 0;
      default: return state;
    }
  }
  const [count,Dispatch] = useReducer(reducer,0);




  return (
    <>
   
   <p>Count: {count}</p>
   <button onClick={() => {Dispatch({type:'Increment'})}}>Increment</button>
   <button onClick={() => {Dispatch({type:'Decrement'})}}>Decrement</button>
   <button onClick={() => {Dispatch({type:'Reset'})}}>Reset</button>
      
    </>
  )
}

export default App
