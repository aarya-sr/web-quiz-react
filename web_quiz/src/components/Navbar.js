import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
      <h1>WEB - QUIZ</h1>
        <ul>
            <li><button className='btn'>Login</button></li>
            <li><button className='btn'>Sign Up</button></li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
            <li>Report Card</li>
        </ul>
    </nav>
    
  )
}

export default Navbar