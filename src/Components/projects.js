import React, { useState } from 'react'
import SpreeShop from './spreeshop'
import Medicare from './medicare'
import BakeryShop from './bakeryshop'
import Flip from './flip'


const Projects = ({ projects }) => {
 const [spreeShop, setSpreeShop] = useState(false);
 const [medicare, setMediCare] = useState(false);
 const [bakeryShop, setBakeryShop] = useState(false);
 const [flip, setFlip] = useState(false);


 return (
  <>
   <section id="project" className={(projects)? 'slidein':''}>
    {spreeShop && <SpreeShop setSpreeShop={setSpreeShop} spreeShop={spreeShop}/>}
    {medicare && <Medicare setMediCare={setMediCare} medicare={medicare} />}
    {bakeryShop && <BakeryShop setBakeryShop={setBakeryShop} bakeryShop={bakeryShop}/>}
    {flip && <Flip setFlip={setFlip} flip={flip}/>}

    <h1 id='head'>PROJECTS</h1>
    <menu id='project-list'>
     <div className='project-item item1'>
      <button onClick={() => { setSpreeShop(!spreeShop) }}>
       VIEW
      </button>
     </div>
     <div className='project-item item2'>
      <button onClick={()=>{setMediCare(!medicare)}}>VIEW</button>
     </div>
     <div className='project-item item3'>
      <button onClick={()=>{setBakeryShop(!bakeryShop)}}>VIEW</button>
     </div>
     <div className='project-item item4'>
      <button onClick={() => { setFlip(!flip) }}>VIEW</button>
     </div>
    </menu>
   </section>
  </>
 )
}

export default Projects
