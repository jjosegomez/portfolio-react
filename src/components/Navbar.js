import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const navbarActive = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <nav className="navbar">
            <div className='website-title'>Juan's Portfolio</div>
            <div className="nav-links">
                <a href="#">About me</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contact me</a>
                <a href="#">Timeline</a> 
            </div> 
            <div className='burger-menu'>
                <div className="burger-icon" onClick={navbarActive}>
                    <div className="burger-line-1"></div>
                    <div className="burger-line-2"></div>
                </div>
            </div> 
            <div className='dropdown-menu'>
                <a href="#">About me</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contact me</a>
                <a href="#">Timeline</a> 
            </div>
        </nav>
    )
}

export default Navbar;