import React, {useState, useContext} from 'react'
import {MasterContext} from '../../context/MasterContext'
import EmpPto from './EmpPto'
import EmpPtoReqs from './EmpPtoReqs'
import EmpInfo from './EmpInfo'

function EmployeeHome(props) {

  const {logout, user} = useContext(MasterContext)
  return ( 
    <div>
      <h1>Welcome @{user.username}</h1>
      <button onClick={logout}>Logout</button>
      <EmpInfo />
      <EmpPto />
      <EmpPtoReqs />
    </div>
   );
}

export default EmployeeHome;