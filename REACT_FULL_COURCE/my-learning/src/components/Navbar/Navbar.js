import React from 'react';
import "./navbar.css";
import SideBar from '../Sidebar/SideBar';

export default function Navbar() {
  return (
    <div>
        <li>
        <h1 style={{display: "inline"}}>Navbar</h1>
         <span>Home</span>
         <span>About</span>
         <span>Login</span>
         <span>My Account</span>
         </li>
         <SideBar />
    </div>
  )
}
