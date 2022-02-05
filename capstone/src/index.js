import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import MasterProvider from './context/MasterContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MasterProvider>
        <App />
      </MasterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);