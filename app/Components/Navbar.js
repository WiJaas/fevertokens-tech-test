"use client"
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
      
        <Link to='/'>
            <div className='navbar'>
                <h1>Crypto<span className='blue'> Currency</span></h1>
            </div>
        </Link>
    )
}

export default Navbar