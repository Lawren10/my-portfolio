import React from 'react'

const Navbar = ({setProjects, setAbout, setCv, projects, about, cv}) => {


 

 return (
  <>
   <nav>
    <button onClick={(e) => { setProjects(false); setCv(false); setAbout(true); }}
     style={(about) ? {color:'#90E0EF'}:{}}>
     ABOUT
     </button>
    <button onClick={(e) => { setAbout(false); setCv(false); setProjects(true); }}
     style={(projects) ? { color:'#90E0EF' }:{}}>
     PROJECTS
     </button>
    <button onClick={(e) => { setProjects(false); setAbout(false); setCv(true); }}
     style={(cv) ? {color:'#90E0EF'}:{}}>
     CV
     </button>
   </nav>
  </>
 )
}

export default Navbar
