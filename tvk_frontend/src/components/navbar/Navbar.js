import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className='main_nav'>
            <ul>
                <li>About</li>
                <li>Newsletter</li>
                <li>Mentorship</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar