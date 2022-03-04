import React from 'react'
import AdminNav from './AdminNav'
import MainView from './MainView'
import Notifications from './Notifications'

function AdminLayout() {
  return ( 
    <div id='layout-container'>
      <div id='admin-nav'>
        <AdminNav />
      </div>
      
      <div id='main-view'>
        <MainView />
      </div>

      {/* <div> 
        <Notifications />
      </div>       */}
    </div>
   );
}

export default AdminLayout;