import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./Components/userInfo";

function App() {

  let obj = {
    name: 'Saurav Kumar Sah',
    roll: 60,
    age:20,
    marks:98,

    detailsInfo: {
      state: 'Bihar',
      mobile_no:8235970780,
      'favourite-subject': 'Math',
    },
  }

  return (
    <>
    <UserInfo obj={obj}></UserInfo>
    </>
  )
}

export default App
