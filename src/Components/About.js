// import React from 'react'//type "rfc" to bring this template!!
import React, { useState } from 'react';

export default function AboutUs(props) {
  // const [myStyle, setStyle] = useState(props.mode);
  let myStyle = {
    color:props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'#343a40':'white',
  }
  return (
    <>
    <div class="accordion" style={myStyle}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong style={myStyle}>Analyse your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
       Text Utils is User friendly website where user can analyse and modify their text as per their needs.
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong style={myStyle}>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        Text Utils is free to use Website, where you can modify your text as per your needs.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong style={myStyle}>Browser Compatibility</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}> 
        Text Utils is Browser Friendly which supports functionality on ample number of browsers with resplonsive behaviour.
      </div>
    </div>
  </div>
</div>
    </>
  )
}
