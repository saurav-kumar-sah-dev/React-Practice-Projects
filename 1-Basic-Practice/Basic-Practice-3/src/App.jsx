import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/heading";
import BasicPractice2 from "./Components/basicExample2";
import BasicPractice from "./Components/basicExample";
import Footer from "./Components/footer";

function App() {
  return (
    <>
    <Heading/>  <br />
    <BasicPractice></BasicPractice>
    {/* <BasicPractice2/> */}   <br />
    <Footer/>
    
    </>
  )
}

export default App;