import { useContext } from "react";
import { UserContext } from "../Context/userInfoContext";

function UserInfo() {

  const {name,age,roll} = useContext(UserContext)
  return (
    <>
    <h1>Child Component</h1>
    <p>{name}</p>
    <p>{age}</p>
    <p>{roll}</p>
    </>
  )
}

export default UserInfo;