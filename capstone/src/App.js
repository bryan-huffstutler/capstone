import './App.css';
import React, {useContext} from 'react'
import Protected from './components/Protected/Protected'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/Authentication/ErrorPage'
import Navbar from './components/Navbar'
import Admin from './components/Admin/Admin'
import About from './components/About/About'
import {MasterContext} from './context/MasterContext'

function App() {

  const {token} = useContext(MasterContext)

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

        <Route path='/admin'
          element={
            <Protected
              auth={token}
              comp={<Admin />}
            />
          }
        />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
