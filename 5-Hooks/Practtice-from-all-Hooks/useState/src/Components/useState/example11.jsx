import { useState } from "react";

function Example11() {

  const [user,setUser] = useState(['Ram','Shyam','Rakesh']);

  function handleUpdatedUser() {
    setUser([...user,'Ramesh']);
  }

   

  return (
    <>
    <div>
      <ul>{user.map((name,index) => 
        <li key={index}>
            {name}
        </li>
        )}
      </ul>
    </div>
    <button onClick={handleUpdatedUser}>Updated Name</button>
    </>
  )
}

export default Example11;