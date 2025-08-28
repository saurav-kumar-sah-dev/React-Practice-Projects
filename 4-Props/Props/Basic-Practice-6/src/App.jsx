import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./Components/userInfo";

function App() {

  // const arr=[]
   const arr=['Saurav','Gourav','Pintu','Ram','Mohan'];

  return (
    <>
    <UserInfo arr={arr}></UserInfo>
    </>
  )
}

export default App
