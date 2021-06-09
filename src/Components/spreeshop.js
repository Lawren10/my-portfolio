import React from 'react'

const SpreeShop = ({setSpreeShop, spreeShop}) => {
 return (
  <>
   <section id="spree-shop" className={(spreeShop)? 'slideup':''}>
    <button id='close' onClick={()=>{setSpreeShop(!spreeShop)}}>X</button>
    <div id="shop-title">
     <i id='thumbnail'></i>
     <div>
      <h1>Spree Shop</h1>
      <p>complete e-commerce site for male and female apparels.</p>
     </div>
    </div>

    <div id="desc">
     <h2>TECH</h2>
     <i>React</i>
     <i>sass</i>
     <i>faker-store Api</i>
    </div>

    <div id="image">

    </div>

    <article>
     <p>
      A fully functional e-commerce website built for easy user experience
      and navigation.
     </p>
     <p>simple intuitive design from the home page to check-out.</p>
     <button>Visit</button>
    </article>
   </section>
  </>
 )
}

export default SpreeShop
