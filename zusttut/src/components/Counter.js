import React from 'react'
import useCounterstore from '../app/counterStore'

export default function Counter() {

    const {count,increment,decrement,reset}=useCounterstore();
  return (
    <div>
      <h1>Click to see result {count}</h1>
      <button onClick={ increment}>Add</button>
      <button onClick={ decrement}>Decrement</button>
      <button onClick={ reset}>Reset</button>
    </div>
  )
}
