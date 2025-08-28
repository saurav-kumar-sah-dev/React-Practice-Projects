import { useContext } from "react"
import Counter from "./Components/counter"
import { ConterContextProvider } from "./Context/CounterContext"
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
  const countValue = useContext(ConterContext)
  return (
    <div>
     <p>Count: {countValue.count}</p>
     <Counter/>
    </div>
  )
}

export default App
