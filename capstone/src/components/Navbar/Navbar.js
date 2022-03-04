import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return ( 
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='events'>Events</Link>
        <Link to='menu'>Menu</Link>
      </nav>
    </div>
   );
}

export default Navbar;