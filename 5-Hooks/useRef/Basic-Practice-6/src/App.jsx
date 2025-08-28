import { useRef } from 'react'


function App() {
  
  const texted =useRef(null);

 function  onHandleChange(event) {
  event.preventDefault();
  console.log(`Texted message: ${texted.current.value}`)
 }

  return (
    <>

    <input ref={texted} onChange={onHandleChange} type="text" placeholder='Enter your Name' />

      
    </>
  )
}

export default App
