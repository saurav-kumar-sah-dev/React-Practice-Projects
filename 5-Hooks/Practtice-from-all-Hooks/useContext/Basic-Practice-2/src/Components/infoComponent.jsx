import { useContext } from "react"
import { InfoContext } from "../Context/infoContext"

export const InfoComponent = () => {
  const userName = useContext(InfoContext)

  return(
    <div>

      <h1>Child Component</h1> 
      <p>{userName.name}</p>
      <p>{userName.age}</p>
      <p>{userName.roll}</p>

    </div>
  )
}