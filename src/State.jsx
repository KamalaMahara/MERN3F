import { useState } from "react"

function State() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => { setNumber(number + 1) }}>❤️</button>
      <button onClick={() => { setNumber(number - 1) }}>👎</button>
    </>
  )
}
export default State;