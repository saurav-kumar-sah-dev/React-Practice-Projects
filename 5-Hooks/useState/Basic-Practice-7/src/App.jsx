import { useState } from 'react'


function App() {
  
  const [text,setText] = useState();

 function  onHandleChange(event) {
  setText(event.target.value);
  console.log(`Typed text is: ${event.target.value}`)

 }

  return (
    <>

    <input value={text} onChange={onHandleChange} type="text" placeholder='Enter your Name' />

      
    </>
  )
}

export default App
