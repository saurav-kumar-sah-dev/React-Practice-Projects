import { createContext } from "react";

export const InfoContext = createContext(null);

export const InfoContextProvider = (props) => {

  const name = 'Saurav Kumar Sah';
  const age = 20;
  const roll = 62;

  return (
    <>
    <InfoContext.Provider value={{name,age,roll}}>
    {props.children}
    </InfoContext.Provider>
    </>
  )
}