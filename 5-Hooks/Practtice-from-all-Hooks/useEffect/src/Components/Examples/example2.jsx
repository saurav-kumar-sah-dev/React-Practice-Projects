import { useEffect, useState } from "react";

function Example2() {

  const [second,setSecond] = useState(0);

  useEffect(() => {
    let timmerId = setInterval(() => {
      console.log(`start timmer`)
      setSecond((prev) => prev+1);
    },1000)

    return (() => {
      console.log('close timmer');
      clearInterval(timmerId);
    })
  },[])

  

  return (
    <>
     <p>timmer: {second}</p>
    </>
  )
}

export default Example2;