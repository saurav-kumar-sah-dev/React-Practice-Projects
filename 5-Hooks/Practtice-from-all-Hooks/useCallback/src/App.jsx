import { useCallback, useState } from 'react';
import Example1 from './Components/React-memo';
import Example2 from './Components/both-React-memo-and-useCallback';

function App() {
  const [count, setCount] = useState(0);

  /*

  Normal function for updating count (used in Example-1)
  const handleCounter = () => {
    setCount((prev) => prev + 1);
  }

  */


  const handleCounter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);


  return (
    <>
      <div>
        
        <p>Count: {count}</p>

    
        <button onClick={handleCounter}>Update Count</button>
      </div>
      
      <br />

      <div>
  

 {/* <Example1 buttonName='Second Update Count' /> */}    {/* Example1 demonstrates React.memo without useCallback */}

      
        <Example2 buttonName='Second Update Count' fun={handleCounter} />
      </div>
    </>
  );
}

export default App;
