import { useContext } from "react"
import { CounterComponent } from "./Componenets/counterComponents"
import { CounterContextProvider, useCustomHook } from "./Context/counterContext"

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
   const countParent = useCustomHook();
  return (
    <>
    <p>Parent Count: {countParent.count}</p>
     <CounterComponent/>
    </>
  )
}

export default App
