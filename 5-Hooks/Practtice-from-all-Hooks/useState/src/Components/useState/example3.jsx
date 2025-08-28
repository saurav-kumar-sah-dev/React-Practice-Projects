import { useState } from "react";

function Example3() {

  const [name,setName] = useState('Saurav');
  const [age,setAge] = useState(20);

  function handleButton1() {
    setName('Saurav Kumar Sah');
  }

  function handleButton2() {
    setAge((prev) => prev+1);
  }

  return (
    <>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <button style={{margin:'10px'}} onClick={handleButton1}>Updated Name</button>
    <button style={{margin:'10px'}} onClick={handleButton2}>Updated Age</button>
    </>
  )
}

export default Example3;