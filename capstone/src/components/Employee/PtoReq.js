import React, {useState} from 'react'
import ReqForm from './ReqForm'

function PtoReq(props) {
  const [toggle, setToggle] = useState(false)

  function ptoToggle () {
    setToggle(!toggle)
  }

  return ( 
    <div>
      
      {toggle ? <ReqForm setToggle={ptoToggle}/> : <button onClick = {ptoToggle}>Request Time Off</button>}
    </div>
   );
}

export default PtoReq;