import React, {useContext} from 'react'
import {MasterContext} from '../../context/MasterContext'
import logo from '../../images/logo.svg'
function AdminNav() {

  const {user, logout, handleMasterChange} = useContext(MasterContext)

  return ( 
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Welcome @{user.username}!</h1>
      <button onClick={handleMasterChange} name="adminMenuState" value="menu">Menu Items</button>
      <button onClick={handleMasterChange} name="adminMenuState" value="events">Events</button>
      <button onClick={handleMasterChange} name="adminMenuState" value="employees">Employees</button>
      <img src={logo} />
    </div>
  );
}

export default AdminNav;