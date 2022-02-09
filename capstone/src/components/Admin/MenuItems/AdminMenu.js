import React, { useContext, useState } from 'react'
import { MasterContext } from '../../../context/MasterContext'
import MenuItem from './MenuItem'
import NewMenuItem from './NewMenuItem'

const initInputs = {
  name: "",
  description: "",
  price: 0,
  category: "",
  image: ""
}

function AdminMenu() {
  const { getMenuItems, adminMenuItems, addMenuItem } = useContext(MasterContext)
  const [menuState, setMenuState] = useState(initInputs)
  const [addingItem, setAddingItem] = useState(false)

  function addItem(item) {
    addMenuItem(item)
    toggleAddingItem()
    clearState()
    getMenuItems()
  }

  function clearState(){
    setMenuState(prev => initInputs)
  }

  function toggleAddingItem() {
    setAddingItem(() => !addingItem)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setMenuState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <button onClick={getMenuItems}>See all Menu Items</button>
      {addingItem ?
      <div>
        <NewMenuItem 
          handleChange={handleChange}
          input={menuState}
        />
        <button onClick={() => addItem(menuState)}>Submit</button>
        <button onClick={toggleAddingItem}>Cancel</button>
      </div>

        
        : <button onClick={toggleAddingItem}>Add Menu Item</button>}


      <p>Click on Name to View Item</p>

      {adminMenuItems ? adminMenuItems.map(x => {
        return (
          <MenuItem
            key={x._id}
            id={x._id}
            image={x.image}
            name={x.name}
            description={x.description}
            price={x.price}
            category={x.category}
          />
        )
      }) : ""}



    </div>
  );
}

export default AdminMenu;