import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  useEffect(() => {
    //side effects
    console.log("use effect called");

  }, [])
  const [count, setCount] = useState(0)
  const increasecount = () => {
    setCount(count + 1);
  }
  const decreasecount = () => {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log("hHAAHA");
  }, [count])
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increasecount}>+</button>
      <button onClick={decreasecount}>-</button>
    </>
  )
}

export default UseEffectHook