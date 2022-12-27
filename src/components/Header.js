import React from 'react'
import "./Header.css"

function Header() {
  return (
<div className="header">
        <div className="header__navbar">
            <div className='tuor_logo'>
                <div className='logo_img'>
                    <img src='./images/logo.png' alt=''/>
                </div>
                    <div className='navbar'>
                    <ul>
                        <li><a href='!#'>expore</a></li>
                        <li><a href='!#'>help</a></li>
                        <li><a href='!#'>blog</a></li>
                        <li><a href='!#'>contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar_login">
                <div className="login">
                    <ul>
                        <li><a href="!#">login</a></li>
                        <li><a href="!#">sign up</a></li>
                    </ul>
                </div>
                <div className="btns_add">
                    <a href="!#" className='btn'>add listing</a>
                </div>
                <div className="call_dial">
                    <a href="!#">call: +01 123456789</a>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Header