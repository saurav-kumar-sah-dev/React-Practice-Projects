import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./Components/example";

function App() {

  function mul(a,b) {
    return a*b;
  }

  return (
    <>
    <UserInfo fun={mul(5,10)}></UserInfo>
    </>
  )
}

export default App
