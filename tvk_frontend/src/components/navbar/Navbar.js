import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className='main_nav'>
            <ul>
                <li>ABOUT</li>
                <li>NEWSLETTER</li>
                <li>MENTORSHIP</li>
                <li>TESTIMONIALS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar