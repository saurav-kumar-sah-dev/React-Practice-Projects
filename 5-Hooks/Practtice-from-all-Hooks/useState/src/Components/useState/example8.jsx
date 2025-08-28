import { useState } from "react";

function Example8() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  function addFruit() {
    setFruits([...fruits, "Mango"]); // Add new fruit without mutating old array
  }

  return (
    <>
      <h3>Fruits List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
    </>
  );
}

export default Example8;
