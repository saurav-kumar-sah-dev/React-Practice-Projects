import { useState } from "react";

function useConterCustom() {

  const [count,setCount] = useState(0);

  function IncrementButton() {
    setCount(count+1);
  }

  function DecrementButton() {
    setCount(count-1);
  }

  function ResetButton() {
    setCount(0);
  }

  return {count,setCount,IncrementButton,DecrementButton,ResetButton};
}

export default useConterCustom;