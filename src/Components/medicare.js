import React from 'react'

const Medicare = ({setMediCare, medicare}) => {
 return (
  <>
   <section id="medicare" className={(medicare)? 'slideup':'' }>
    <button id='close' onClick={() => { setMediCare(!medicare) }}>
     X
     </button>
    
    <div id="medicare-title">
     <i id='thumbnail'></i>
     <div>
      <h1>Wellness Medicare</h1>
      <p>Medical service landing page</p>
     </div>
    </div>

    <div id="desc">
     <h2>TECH</h2>
     <i>Html</i>
     <i>sass</i>
     <i>Javascript</i>
    </div>

    <div id="image">

    </div>

    <article>
     <p>
      A complete redesign to showcase all medical service for easy enquiry.
     </p>
     <button>Visit</button>
    </article>
   </section>
  </>
 )
}

export default Medicare
