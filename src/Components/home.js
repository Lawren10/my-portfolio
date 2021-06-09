import React, {useState} from 'react'
import Navbar from './navbar'
import Projects from './projects'
import About from './about'
import Cv from './cv'
import { SiLinkedin } from 'react-icons/si'
import { FaGithubAlt } from 'react-icons/fa'

const Home = () => {
 
 const [projects, setProjects] = useState(false);
 const [about, setAbout] = useState(true);
 const [cv, setCv] = useState(false)


 return (
  <>
   <main id='portfolio'>
    <section id='name-info'>
     <Navbar setProjects={setProjects} setAbout={setAbout} setCv={setCv}
      projects={projects} about={about} cv={cv} />
     <div id="intro">
      <p>HI</p>
      <h1>I am Lawrence</h1>
     </div>

     <div id="title">
      <h1>
        <span id='logo'>SELF TAUGHT</span>
        <span id="frontend">FRONTEND</span>
        <span id="developer"> DEVELOPER</span>
        <span id="designer">& DESIGNER</span>
      </h1>
      <p>progressing to full stack developer</p>
     </div>

     <section id="action">
      <footer>
       <div id="icons">
       <i><SiLinkedin/></i>
       <i><FaGithubAlt/></i>
       </div>
      </footer>

     </section>

    </section>

    <section id='general'>
     {projects && <Projects projects={projects} />}
     {about && <About about={about} />}
     {cv && <Cv cv={cv}/>}
    </section>
   </main>
  </>
 )
}

export default Home;