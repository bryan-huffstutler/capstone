import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return ( 
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='admin'>Admin</Link>
      </nav>
    </div>
   );
}

export default Navbar;