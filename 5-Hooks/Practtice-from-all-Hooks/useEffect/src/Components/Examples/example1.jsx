import { useEffect, useState } from "react";

function Example1() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((val) => val.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
  });

  return (
    <>
    <div>
      <ul>{data.map((name) => 
        <li key={name.id}>{name.title}</li>
        )}
      </ul>
    </div>
    </>
  )
}

export default Example1;