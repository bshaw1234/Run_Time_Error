import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className='left-navbar'>
            <ul className='left-list'>
                <li>
                    JENNY BROWN
                </li>
                <li>
                <a className='nav-link' href='#'>ABOUT</a>
                </li>
                <li>
                <a className='nav-link' href='#'>WORK</a>
                </li>
            </ul>
        </div>
        <div className='right-navbar'>
            <ul className='right-list'>
                <li>
                    <a className='nav-link' href='#'>LET'S CONNECT</a>
                </li>
                <li>
                <a className='nav-link' href='#'>info.bussiness@work.com</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar