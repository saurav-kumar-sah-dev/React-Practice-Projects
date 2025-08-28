import React from "react";

const Example2 = React.memo(({buttonName,fun}) => {
  console.log('Child render')
  return (
    <>
    <button onClick={fun}>{buttonName}</button>
    </>
  )
 })

 export default Example2;