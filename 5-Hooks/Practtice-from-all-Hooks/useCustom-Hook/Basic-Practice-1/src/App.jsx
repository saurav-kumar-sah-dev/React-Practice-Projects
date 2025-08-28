import { useContext } from "react"
import Counter from "./Components/counter"
import { ConterContextProvider, useCustomConter } from "./Context/CounterContext"
import { ConterContext } from "./Context/CounterContext"


function App() {
  

  return (
    <>
      <ConterContextProvider>
       <Parent/>
      </ConterContextProvider>

     
    </>
  )
}

function Parent() {
  const countValue = useCustomConter();
  return (
    <div>
     <p>Count: {countValue.count}</p>
     <Counter/>
    </div>
  )
}

export default App
