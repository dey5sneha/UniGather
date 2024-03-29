import React from 'react'
import {Link} from 'react-router-dom'
import image from './image/frontLogo.png'
export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={image}  alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
        <b><span style={{ color: '#4B239F', verticalAlign:"sub"}}>Uni</span></b><span style={{ color: 'black' ,verticalAlign:"sub"}}>Gather</span>
      </Link>
    </div>
  </nav>
  )
}
