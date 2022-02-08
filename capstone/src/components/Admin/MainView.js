import React, { useContext } from 'react'
import { MasterContext } from '../../context/MasterContext'
import AdminMenu from './MenuItems/AdminMenu'
import AdminEvents from './AdminEvents'
import AdminEmployees from './Employees/AdminEmployees'
import AdminSchedule from './AdminSchedule'
import logo from '../../images/logo.svg'

function MainView() {

  const { adminMenuState } = useContext(MasterContext)

  switch (adminMenuState) {
    case "menu":
      return (
        <div>
          <AdminMenu />
        </div>
      );
    case "events":
      return (
        <div>
          <AdminEvents />
        </div>
      );
    case "employees":
      return (
        <div>
          <AdminEmployees />
        </div>
      )
    case "":
      return (
        <div>
          <img src={logo} height="600px" width="600px" />
        </div>
      )
  }
  return (
    <div>
      <img src={logo} height="600px" width="600px" />
    </div>
  )
}

export default MainView;