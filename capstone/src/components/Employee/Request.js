import React, {useContext} from 'react'
import {MasterContext} from '../../context/MasterContext'

function Request(props) {
  const {deletePtoReq} = useContext(MasterContext)

  return (
    <div>
      <h4>{props.date}</h4>
      <p>Time of Day: {props.time}</p>
      <p>Type and Amount of Time: {props.typeOfTime}({props.amount})</p>
      <p>{props.approval == null ? "Not Seen By Manager" : props.approval}</p>
      <button onClick={() => deletePtoReq(props.id)}>Cancel Request</button>
    </div>
  );
}

export default Request;