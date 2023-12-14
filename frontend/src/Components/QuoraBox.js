import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/QuoraBox.css";
import AddQuestion from './addQuestion';
function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className='quoraBox'>
        <div className='quoraBox__info'>
            < Avatar src={user?.photo} />
            <h3 style={{marginLeft : "5px"}}>{user?.userName}</h3>
        </div>
        <div className='quoraBox__quora'>
            <p className='quoraBox__para'>What is your Question or Link?</p>
            <div className = 'addQuestion__component'> < AddQuestion /></div>
        </div>
    </div>
  )
}

export default QuoraBox