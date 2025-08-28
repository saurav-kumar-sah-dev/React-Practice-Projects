import { createContext } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {

  const name = 'Saurav Kumar Sah';
  const age = 20;
  const roll = 62;

  return (
    <>
    <UserContext.Provider value={{name,age,roll}}>
      {children}
    </UserContext.Provider>
    </>
  )
}