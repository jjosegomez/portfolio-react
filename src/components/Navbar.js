import React from 'react'
import { useState } from 'react'

const Navbar = () => {

    // use state to change classes
    const [isClicked, setIsClicked] = useState(true)
    const [menuClass, setMenuClass] = useState("menu-unclicked hidden")
    const [burgerClass, setBurgerClass] = useState("burger-icon unclicked")

    const navbarActive = () => {
        if(isClicked){
            console.log("burger is active", isClicked)
            setMenuClass("menu-clicked visible")
            setBurgerClass("burger-icon clicked")
        }
        else{
            console.log("burger is not active", isClicked)
            setMenuClass("menu-unclicked hidden")
            setBurgerClass("burger-icon unclicked")
        }
        setIsClicked(!isClicked)
    }

    return (
        <nav className="navbar">
            <div className='website-title'>Juan's Portfolio</div>
            <div className="nav-links">
                <a href="#aboutme-link">About</a>
                <a href="#project-link">Projects</a>
                <a href="#skills-link">Skills</a>
                <a href="#contactme-link">Contact</a>
                <a href="#timeline-link">Timeline</a> 
            </div> 
            <div className="burger-menu" onClick={navbarActive}>
                <div className={burgerClass}>
                    <div className="burger-line-1"></div>
                    <div className="burger-line-2"></div>
                </div>
            </div> 
            <div className={menuClass}>
                <a href="#aboutme-link">About</a>
                <a href="#projects-link">Projects</a>
                <a href="#skills-link">Skills</a>
                <a href="#contact-link">Contact</a>
                <a href="#">Timeline</a> 
            </div>
        </nav>
    )
}

export default Navbar;