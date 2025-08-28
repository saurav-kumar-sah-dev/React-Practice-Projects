import { useState } from "react";

function Example7() {
  const [typedText, setTypedText] = useState('');

  function handleInputChange(event) {
    setTypedText(event.target.value);
    console.log(`Typed text: ${event.target.value}`);
  }

  return (
    <>
      <input
        value={typedText}
        onChange={handleInputChange}
        type="text"
        placeholder="Type anything here"
      />
      <p>Typed text: {typedText}</p>
    </>
  );
}

export default Example7;
