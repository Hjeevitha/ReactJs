import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { SiCodereview } from "react-icons/si";
import img from "./Free_Sample_By_Wix.jpg"

const Navbar = () => {
  return (
   <>
   <nav className='navcontainer'>
      <aside className='logoblock'>
      {/* <h1>logo</h1> */}
      <img src={img} alt="" height="50px" width="50px"/>
      </aside>
      <aside className='listblock'>
           <ul>
            <NavLink to="/"><li className='navlist'><span>home</span><span><FaHome /></span></li></NavLink>
            <NavLink to="/viewall" className='navlistviewall'><li><span>viewall</span><span><SiCodereview /></span></li></NavLink>
           </ul>
      </aside>
   
   </nav>
   
   </>
  )
}

export default Navbar

