import { useEffect, useState } from "react";

function Timmer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Start Timmer");
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Closed timmer");
      clearInterval(timerId);
    };
  }, []); 

  return (
    <>
      <p>Time: {time}</p>
    </>
  );
}

export default Timmer; 
