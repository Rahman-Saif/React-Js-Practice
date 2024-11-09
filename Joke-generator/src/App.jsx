
import { useState } from 'react'
import './App.css'

function App() {
  const [joke,setJoke]=useState('');

  const createJoke=()=>{
    fetch(`https://sv443.net/jokeapi/v2/joke/Programming?type=single`)
     .then((res)=>res.json())
     .then(data=>setJoke(data.joke))
  }

  return (
    <>
      <h2>Joke Generator</h2>
      <button onClick={createJoke}>Get Joke</button>
      <p>{joke}</p>
    </>
  )
}

export default App
