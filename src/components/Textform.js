import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
      //console.log("uppercase was clicked" + text);
      let newText = (text.toUpperCase());
    setText(newText);
    }

    const handleOnChange = (event) => {
      //console.log("handleonchange");
      setText(event.target.value);
  }
  
    const[text, setText] = useState('Enter text here');
  
  return ( 
    
    
    <div>
    <h1>  {props.Heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control" value ={text} onChange={handleOnChange} id="Textarea" rows="8"></textarea>
  <button type="button"  class="btn btn-primary my-3"  onClick={handleUpClick}>Change to uppercase</button>
</div>
</div>
  )
}
