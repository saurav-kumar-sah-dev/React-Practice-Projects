const BasicPractice2 = () => {

  function areaOfCircle(radius) {
    let area= Math.PI*radius*radius

    return area;
  }

  let result=areaOfCircle(7);
  
  return (
    <>

    <p>Area of Circle is : {result} </p>
    
    </>
  )
}

export default BasicPractice2;