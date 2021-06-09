import React from 'react'

const Flip = ({flip, setFlip}) => {
 return (
  <>
   <section id="flip" className={(flip)? 'slideup': 'slidedown'}>
    <button id='close' onClick={() => {setFlip(!flip)}}>
     X
     </button>
    <div id="flip-title">
     <i id='thumbnail'></i>
     <div>
      <h1>Flip</h1>
      <p>A simple matching card game</p>
     </div>
    </div>

    <div id="desc">
     <h2>TECH</h2>
     <i>Html</i>
     <i>css</i>
     <i>Javascript</i>
    </div>

    <div id="image">

    </div>

    <article>
     <p>
      A simple card game,my very first project,its basic but kindly focus more on the UI.
     </p>
     <button>Visit</button>
    </article>
   </section>
  </>
 )
}

export default Flip
