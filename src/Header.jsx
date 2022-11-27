import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='navbar'>
    <div id='box1'>
    <div>
        <NavLink to="/"><span>POTFOLIO</span></NavLink>
    </div>
    </div>
    <div id='box2'>
    <div>
        <NavLink to="/">Home</NavLink>
    </div>
    <div>
        <NavLink to="/About">About</NavLink>
    </div>
    <div>
        <NavLink to="/Skill">Skill</NavLink>
    </div>
    <div>
        <NavLink to="/Project">Project</NavLink>
    </div>
    
    <div>
        <NavLink to="/Contact">Contact</NavLink>
    </div>
      </div>
    </div>
  )
}

export default Header
