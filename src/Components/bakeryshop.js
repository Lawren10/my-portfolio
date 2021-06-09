import React from 'react'

const BakeryShop = ({bakeryShop, setBakeryShop}) => {
 return (
  <>
   <section id="bakery-shop" className={(bakeryShop)? 'slideup':''}>
    <button id='close' onClick={() => {setBakeryShop(!bakeryShop)}}>
     X
     </button>
    <div id="bakery-title">
     <i id='thumbnail'></i>
     <div>
      <h1>The Bakery Shop</h1>
      <p>A Bakery and confectionarylanding page</p>
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
      A complete redesign to showcase all food produce for easy enquiry.
     </p>
     <button>Visit</button>
    </article>
   </section>
  </>
 )
}

export default BakeryShop
