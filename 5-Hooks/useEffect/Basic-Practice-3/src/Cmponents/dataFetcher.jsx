import { useEffect, useState } from "react";

function DataFetcher() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(val => val.json())
    .then(data=>setData(data))
    .catch((err) => console.error(err))
  },[])
  return (
    <>
    <ul>{data.map((name) => 
      <li key={name.id}>{name.title}</li>
      )}
    </ul>
    </>
  )
}

export default DataFetcher;