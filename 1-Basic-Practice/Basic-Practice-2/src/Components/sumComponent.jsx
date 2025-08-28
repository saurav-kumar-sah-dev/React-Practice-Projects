const SumComponent = () => {

  function sum(a,b) {
     return a+b;
  }

  let result = sum(5,10);

  return (
    <>
   <p>Sum of two number is: {result}</p>
    </>
  )
}

export default SumComponent;