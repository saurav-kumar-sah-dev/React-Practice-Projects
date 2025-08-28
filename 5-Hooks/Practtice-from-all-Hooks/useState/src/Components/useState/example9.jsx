import { useState } from "react";

function Example9() {

  const [user,setUser] = useState({name:'Saurav',age:20});

  function handleUpdatedName() {
    setUser({...user,name:"Saurav Kumar Sah"});
  }

   function handleUpdatedAge() {
    setUser({...user, age: user.age+1 });
  }

  return (
    <>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <button onClick={handleUpdatedName}>Updated Name</button>
    <button onClick={handleUpdatedAge}>Updated Age</button>
    </>
  )
}

export default Example9;