import "bootstrap/dist/css/bootstrap.min.css";
import {useRef} from 'react'
function App() {

  let buttonRef = useRef(0);

  function handleButton() {
    buttonRef.current=buttonRef.current+1;
    console.log(`Button clicked is: ${buttonRef.current}`)
  }

  return (
    <>
    <button type="button" className="btn btn-success" onClick={handleButton}>Success</button>
    </>
  )
}

export default App
