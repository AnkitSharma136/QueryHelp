//component responsible for rendering the main container for the sidebar of the Quora interface
import React from 'react'
import "./css/Sidebar.css";
import SidebarOptions from './SidebarOptions';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarOptions />
    </div>
  )
}

export default Sidebar