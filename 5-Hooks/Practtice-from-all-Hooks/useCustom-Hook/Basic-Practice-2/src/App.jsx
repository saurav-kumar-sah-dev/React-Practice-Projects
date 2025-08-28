import useConterCustom from './Components/counterCustom'

function App() {

  const {count,IncrementButton,DecrementButton,ResetButton } = useConterCustom();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={IncrementButton}>Increment</button>
      <button onClick={DecrementButton}>Decrement</button>
      <button onClick={ResetButton}>Reset</button>

    </>
  )
}

export default App
