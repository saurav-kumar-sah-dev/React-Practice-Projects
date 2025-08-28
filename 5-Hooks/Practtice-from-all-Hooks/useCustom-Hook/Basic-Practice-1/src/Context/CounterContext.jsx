import { useContext } from "react";
import { createContext, useState } from "react";

export const ConterContext  = createContext();

export const ConterContextProvider = ({children}) => {

  const [count,setCount] = useState(0);

  return (
    <>
    <ConterContext.Provider value={{count,setCount}}>
    {children}
    </ConterContext.Provider>
    </>
  )
}

export const useCustomConter = () => {
  const custom = useContext(ConterContext);
  return custom;
}