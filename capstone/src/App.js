import './App.css';
import React, { useContext } from 'react'
import Protected from './components/Protected/Protected'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/Authentication/ErrorPage'
import Navbar from './components/Navbar/Navbar'
import Admin from './components/Admin/Admin'
import About from './components/About/About'
import { MasterContext } from './context/MasterContext'
import AdminProtected from './components/Protected/AdminProtected'
import EmployeeHome from './components/Employee/EmployeeHome'
import Menu from './components/Menu/Menu'
import Events from './components/SpecialEvents/Events'
import Footer from './components/Footer/Footer';

function App() {

  const { token, user } = useContext(MasterContext)

  function ifAdmin () {
    if(user) {
      return user.isAdmin
    } else {
      return ""
    }
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/'
          element={
            <Home />}
        />

        <Route path='/about'
          element={
            <About />
          }
        />

        <Route path='/login'
          element={
            <Protected
              comp = {<EmployeeHome/>}
              auth={token} />
          }
        />

        <Route path='/admin'
          element={
            <AdminProtected
              isAdmin={ifAdmin}
              comp={<Admin />}
            />
          }
        />

        <Route path='/menu'
          element={
            <Menu />
          }
        />

        <Route path='events'
          element={
            <Events />
          }
        />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;