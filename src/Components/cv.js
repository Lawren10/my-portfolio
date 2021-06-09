import React from 'react'

const Cv = ({cv}) => {
 return (
  <>
   <section id="cv" className={(cv)? 'slidein':''}>
    <h1>CV</h1>
    <div id="cv-wrapper">
    <article>
      <section id="name-title">
       <h1>LAWRENCE OGEREKA</h1>
       <p> Self-Taught Frontend Developer and Designer <br />
       <span>actively progressing to full stack.</span>
       </p>
      </section>

      <section id="profile">
       <h2>Profile</h2>
       <p>Highly organized, proficient and determined individual, a problem solver, serial learner, highly independent and detail oriented, most of all I constantly improve on my self
        in other to always be of value and relevance.
       </p>
      </section>

      <section id="skill-set">
       <h2>Current Tech Stack</h2>
       <div id="tech-skill">
        <i>HTML</i>
        <i>CSS</i>
        <i>SASS</i>
        <i>JAVASCRIPT</i>
        <i>REACT</i>
        <i>NPM</i>
        <i>NODE</i>
       </div>
       <h2 id='htools'>Design Tools</h2>
       <div id="design-skill">
        <i>PHOTOSHOP</i>
        <i>ILLUSTRATOR</i>
        <i>FIGMA</i>
        <i>ADOBE XD</i>
       </div>
      </section>

      <section id="cv-projects">
       <h2>Projects</h2>
       <ul>
        <li>Spree-Shop(e-commerce webstore.)</li>
        <li>Wellness Medicare</li>
        <li>The Bakery Shop (Sweet and confectionary)</li>
       </ul>
      </section>

      <section id="work-experience">
       <h2>Experience</h2>
       <p> <span id="date">2020 - present</span><br /> Freelance Frontend Developer & desinger  </p>
      </section>

      <section id="education">
       <h2>Education</h2>
       <p>(B.Sc) Human Anatomy </p>
       <h2 id="hcert"> Certifications</h2>
       <p id="cet1">
        <span>CALIFORNIA INSTUTITE OF ART(COUSERA).</span> <br />
        Certificate of completion (Graphic design)
       </p>
       <p id="cet2">
        <span>FREECODECAMP</span> <br />
        Frontend web development and programming cert.
       </p>
       <p id="cet3">
        <span>McANDERSON INSTITUTE OF TECHNOLOGY </span> <br />
        Certificate of completion (Product Design (UI/UX)).
       </p>
      </section>

      <section id="cv-contact">
       <h2>Contact</h2>
       <ul>
        <li>linkdin</li>
        <li>mail</li>
        <li>github</li>
        <li>phone</li>
       </ul>
      </section>
    </article>
    </div>
   </section>
  </>
 )
}

export default Cv
