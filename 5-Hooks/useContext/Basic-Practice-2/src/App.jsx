import { useContext } from "react";
import UserInfo from "./Components/userInfo";
import { UserContextProvider, UserContext } from "./Context/userInfoContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <MainApp />
      </UserContextProvider>
    </>
  );
}

// This is inside the Provider, so we can safely use useContext here
function MainApp() {
  const info = useContext(UserContext);

  return (
    <>
      <div>
        <h1>Parent Component (App.jsx)</h1>
        <p>Name: {info.name}</p>
        <p>Age: {info.age}</p>
      </div>

      {/* Child component */}
      <div>
        <UserInfo />
      </div>
    </>
  );
}

export default App;
