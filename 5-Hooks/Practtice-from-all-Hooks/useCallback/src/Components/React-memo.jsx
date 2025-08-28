import React from "react";

const Example1 = React.memo(({buttonName}) => {
  console.log('Child render')
  return (
    <>
    <button>{buttonName}</button>
    </>
  )
 })

 export default Example1;