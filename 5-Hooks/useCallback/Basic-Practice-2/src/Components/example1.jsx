import React from "react";

const Example1 =  React.memo((props) =>  {
  console.log('my button name is',props.buttonName)
  return (
    <div>
        <button onClick={props.fun}>{props.buttonName}</button>
    </div>
  )
})

export default Example1;