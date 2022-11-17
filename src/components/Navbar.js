import React from 'react'
const Navbar = () => {
    return (
        <nav data-aos="fade-up" className="navbar-container">
            <div className="nav-links">
                <a href="#aboutme-link">About me</a>
                <a href="#project-link">Projects</a>
                <a href='#'>Skills</a>
                <a href="#contactme-link">Contact me</a>
                <a href="#">Timeline</a> 
            </div>    
        </nav>
    )
}

export default Navbar;