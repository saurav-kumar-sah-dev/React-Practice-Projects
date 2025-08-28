import { useEffect, useState } from "react";

function LoggerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('Default Logic');

    // Cleanup function should be returned as a function
    return () => {
      alert('Clean up');
    };
  }, []);

  function handleUpdateClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleUpdateClick}>Update</button>
    </>
  );
}

export default LoggerComponent;
