import React from 'react'
import {FaHtml5} from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobexd } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import { SiLinkedin } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import { FaPhone } from 'react-icons/fa'






const About = ({about}) => {
 return (
  <>
   <section id="about" className={(about)? 'slidein':''}>
    <h1>ABOUT ME</h1>
    <article>
     <p>
      I am a <span>Frontend Developer & Designer</span>,actively
      progressing to <i>Full-Stack Developer.</i> 
     </p>
     <p>
      Profecient in building user centric webapps and interactive layouts. 
     </p>
     <p>
      Well organised and proficient individual, a problem solver,serial learner,
      highly independent and detail oriented, most of all,
      i constantly improve on myself in other be always be of value and relevance. 
     </p>
     <h2>Current Skill Set</h2>
     <div id="skill-icons">
      <i><FaHtml5/></i>
      <i><FaCss3/></i>
      <i><FaSass/></i>
      <i><SiJavascript/></i>
      <i><FaReact/></i>
      <i><FaGitAlt/></i>
      <i><FaNpm/></i>
      <i><SiAdobephotoshop/></i>
      <i><SiAdobeillustrator/></i>
      <i><SiAdobexd /></i>
      <i><CgFigma/></i>
     </div>
     <h3>How can i be of value?</h3>
     <div id='contact-icon'>
      <i><SiLinkedin/></i>
      <i><FiMail/></i>
      <i><FaPhone/></i>
     </div>
    </article>
   </section>
  </>
 )
}

export default About
