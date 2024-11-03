import { useState } from "react"
import Form from "./form";


function App() {
  const [count,setCount]=useState(0);
  
  function handleClick(){
    setCount(count=>count+1);
  
  }
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Click</button>
    <Form></Form>
    </>
  )
}

export default App
