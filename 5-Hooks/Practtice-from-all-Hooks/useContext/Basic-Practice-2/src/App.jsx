import { useContext } from "react"
import { InfoComponent } from "./Components/infoComponent"
import { InfoContextProvider } from "./Context/infoContext"
import { InfoContext } from "./Context/infoContext"

function App() {
  

  return (
    <>
      <InfoContextProvider>
        <MainComponent/>
      </InfoContextProvider>
    </>
  )
}

function MainComponent() {
  const {name,age,roll} = useContext(InfoContext);

  return (
    <>
    
    <div>
       <h1>Parent Component</h1>
       <p>{name}</p>
       <p>{age}</p>
       <p>{roll}</p>
    </div>

    <div>
      <InfoComponent/>
    </div>
    </>
  )
}

export default App
