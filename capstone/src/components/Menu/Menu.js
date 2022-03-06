import React, {useEffect, useContext} from 'react'
import {MasterContext} from '../../context/MasterContext'
import MenuItem from './MenuItem'
import './Menu.css'

function Menu() {
  const {getMenuItems, adminMenuItems} = useContext(MasterContext)
  
  function getMenu () {
    getMenuItems()
  }

  useEffect(() => {
    getMenu()
  }, [])

  const drinks = adminMenuItems.filter(x => x.category === 'Drinks')
  const appetizers = adminMenuItems.filter(x => x.category === 'Appetizer')
  const lunch = adminMenuItems.filter(x => x.category === 'Lunch')
  const dinner = adminMenuItems.filter(x => x.category === 'Dinner')
  const kids = adminMenuItems.filter(x => x.category === 'Kids')

  return ( 
    <div id='menu'>

      <h1>Appetizers</h1>
      {appetizers.map(x => <MenuItem name={x.name} desc={x.description} price={x.price}/>)}

      <h1>Lunch</h1>
      {lunch.map(x => <MenuItem name={x.name} desc={x.description} price={x.price}/>)}

      <h1>Dinner</h1>
      <h4>All dinners come with rolls, side salad, and vegetable of the day.</h4>
      {dinner.map(x => <MenuItem name={x.name} desc={x.description} price={x.price}/>)}

      <h1>Kids</h1>
      {kids.map(x => <MenuItem name={x.name} desc={x.description} price={x.price}/>)}

      <h1>Drinks</h1>
      {drinks.map(x => <MenuItem name={x.name} desc={x.description} price={x.price}/>)}
    </div>
   );
}

export default Menu;