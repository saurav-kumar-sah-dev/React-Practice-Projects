import "bootstrap/dist/css/bootstrap.min.css";
import {useRef} from 'react'
function App() {

  let buttonRef = useRef(null);

  function handleButton() {
    buttonRef.current.style.color = "white";
    buttonRef.current.style.backgroundColor = "red";
    buttonRef.current.style.border = "2px solid darkred";
    buttonRef.current.style.fontWeight = "bold";
    buttonRef.current.innerText = "Clicked!";
  }

  

  return (
    <>
    <button type="button" className="btn btn-success" onClick={handleButton} ref={buttonRef}>Success</button>
    </>
  )
}

export default App
