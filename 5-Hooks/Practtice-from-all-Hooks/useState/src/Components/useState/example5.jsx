import { useState } from "react";

function Example5() {

  const [user,setUser] = useState({name:'saurav',age:20});

  function updateName() {
    setUser({...user, name: 'Saurav kumar Sah'});
  }

  function updateAge() {
    setUser({...user, age: user.age+1});
  }

  return (
    <>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <button onClick={updateName}>Update Name</button>
    <button onClick={updateAge}>Update Age</button>
    </>
  )
}

export default Example5;