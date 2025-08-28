import { useState } from 'react'



function App() {

  const [user,setUser] = useState({name:'Saurav',age:20});

  function updateName() {
    setUser({...user, name:'Saurav Kumar Sah'});
  }

  function updateAge() {
    setUser({...user, age: user.age+1});
  }

  return (
    <>

    <p>Name: {user.name}</p>
    <p>age: {user.age}</p>
    <button onClick={updateName}>Updated Name</button>
    <button onClick={updateAge}>Updated Age</button>
    
      
    </>
  )
}

export default App
