import React from 'react'
import './MenuItem.css'

function MenuItem(props) {
  return ( 
    <div id='menu-item'>
      <h4>{props.name}</h4>
      <p>{props.desc} <br/>${props.price}</p>
    </div>
   );
}

export default MenuItem;