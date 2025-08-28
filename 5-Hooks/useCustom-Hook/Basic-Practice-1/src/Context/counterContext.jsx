import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext([]);

export const CounterContextProvider = (props) => {

  const [count,setCount] = useState(0);

  return (
    <>
    <CounterContext.Provider value={{count,setCount}}>
     {props.children}
    </CounterContext.Provider>
    </>
  )
}

export const useCustomHook = () => {
  const custom = useContext(CounterContext);
  return custom;
}