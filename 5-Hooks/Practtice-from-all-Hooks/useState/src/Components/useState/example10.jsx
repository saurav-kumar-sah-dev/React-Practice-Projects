import { useState } from "react";

function Example10() {

  const [name,setName] = useState('Saurav');
  const [age,setAge] = useState(20);


  function handleUpdatedName() {
    setName('Saurav Kumar Sah');
  }

   function handleUpdatedAge() {
    setAge((prev) => prev+1);
  }

  return (
    <>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <button onClick={handleUpdatedName}>Updated Name</button>
    <button onClick={handleUpdatedAge}>Updated Age</button>
    </>
  )
}

export default Example10;