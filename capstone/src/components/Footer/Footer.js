import './Footer.css'
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'

function Footer() {
  return ( 
    <footer>
      <Link to='/login'>Employee Login</Link>
      <img src={logo} style={{width: '50px'}}></img>
      <Link to='/admin'>Manager Login</Link>
    </footer>
   );
}

export default Footer;