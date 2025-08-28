import { CounterComponent } from "./Componenets/counterComponents"
import { CounterContextProvider } from "./Context/counterContext"
import { CounterContext } from "./Context/counterContext"
import { useContext } from "react"

function App() {
  
  return (
    <>
    <CounterContextProvider>
        <Parent/>
    </CounterContextProvider>
     
    </>
  )
}


function Parent() {

  const {count} = useContext(CounterContext)
  return (
    <>
    <p>{count}</p>
    <CounterComponent/>

    </>
  )
}

export default App
