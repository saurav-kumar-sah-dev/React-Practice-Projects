import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./Components/userInfo";
import ErrorMessage from "./Components/errorMessage";
function App() {

  // const arr=[]
  const arr=['Saurav','Gourav','Pintu','Ram','Mohan'];

  return (
    <>
    <UserInfo arr={arr}></UserInfo>
    <ErrorMessage arr={arr}></ErrorMessage>
    </>
  )
}

export default App
