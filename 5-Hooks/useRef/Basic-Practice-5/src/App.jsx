import { useRef } from "react"


function App() {
  
  let buttonRef = useRef(null);

 function  handleInput(event) {
  event.preventDefault();
   console.log(`Name: ${buttonRef.current.value}`)
  }

  return (
    <>
    <form onSubmit={handleInput}>
    <input ref={buttonRef} type="text" placeholder="Enter Your Name" />
    <button>Submit</button>
    </form>
    </>
  )
}

export default App
