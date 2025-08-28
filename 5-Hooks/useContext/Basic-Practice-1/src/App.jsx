import { CounterComponent } from "./Componenets/counterComponents"
import { CounterContextProvider } from "./Context/counterContext"

function App() {
  
  return (
    <>
    <CounterContextProvider>
        <CounterComponent/>
    </CounterContextProvider>
     
    </>
  )
}

export default App
