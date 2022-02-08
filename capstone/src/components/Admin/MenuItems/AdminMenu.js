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
  const [isEditingItem, setIsEditingItem] = useState(false)
  const [addingItem, setAddingItem] = useState(false)

  function addItem(item) {
    addMenuItem(item)
    toggleAddingItem()
    clearState()
  }
//Need to write function to edit item, and pass it to modal....
  function editItem(item){

  }

  function clearState(){
    setMenuState(prev => initInputs)
  }

  function toggleAddingItem() {
    setAddingItem(() => !addingItem)
  }

  function toggleEditItem() {
    setIsEditingItem(() => !isEditingItem)
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


      <p>Click on Name to view options!</p>

      {adminMenuItems ? adminMenuItems.map(x => {
        return (
          <MenuItem
            key={x._id}
            id={x._id}
            image={x.image}
            name={x.name}
            description={x.description}
            price={x.price}
            isEditing={toggleEditItem}
            addItem={addItem}
            handleChange={handleChange}
          />
        )
      }) : ""}



    </div>
  );
}

export default AdminMenu;