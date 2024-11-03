import React, { useState } from 'react'

function Form() {
    const [text,setText]=useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }
  
    return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed:{text}</p>
      <button onClick={()=>setText('hello')}>Reset</button>
    </div>
  )
}

export default Form
