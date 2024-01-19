import React, { useState } from "react";

const IncDec = () => {
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment() {
      //setCount(prevCount => prevCount+=1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }

  return (
        <div className="App">
      <h1>{count}</h1> 
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default IncDec
