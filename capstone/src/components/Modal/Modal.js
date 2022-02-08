import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ toggleOpen, children }) {
  return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <button onClick={toggleOpen}>CLOSE</button>
        <div id='modal-content'>
          {children}
        </div>

      </div>
    </>

    , document.getElementById('portal'))
}
