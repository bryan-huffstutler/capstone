import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './Home.css'

function Home() {

  return (
    <div id='home-container'>
      <div id='para_1'>

        <img src={logo} style={{ width: '600px' }} />
        <h2>Sports Bar with an Attitude!</h2>
      </div>

      <div id='para_2'>
        <h1>BB's is one of the best restaurant & bar's in the St. Louis area, with delicious food, great lunch specials, happy hour, & late night fun, and an exciting atmosphere like no other.</h1>
      </div>

      <div id='para_3'>
        <div className='div-module' id='event-mod'>
          <Link to='/events' style={{ fontSize: '2.0em', textDecoration: 'none' }}>View our LIVE events!</Link>
        </div>
        <div className='div-module' id='special-mod'>
          <Link to='/menu' style={{ fontSize: '2.0em', textDecoration: 'none' }}>Check out our Specials!</Link>
        </div>
        <div className='div-module' id='about-mod'>
          <Link to='/about' style={{ fontSize: '2.0em', textDecoration: 'none' }}>Want to know more about us?</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;