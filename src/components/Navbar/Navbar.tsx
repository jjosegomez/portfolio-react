import React, { useState } from "react"
import "./Navbar.css"

import linkedInLogo from "../../assets/linkedin-svgrepo-com.svg"
import githubLogo from "../../assets/github-142-svgrepo-com.svg"
import emailLogo from "../../assets/telegram-svgrepo-com.svg"

const Navbar: React.FC = () => {

    const [collapse, setCollapse] = useState<string>("hidden")
    const [hamburger, setHamburger] = useState<string>("")

    const handleCollapse = () => {
        if (collapse == "hidden") {
            setHamburger("is-active")
            setCollapse("collapsed")
        }
        else {
            setCollapse("hidden")
            setHamburger("")
        }
        console.log(collapse)
    }

    return (
        <>
            <nav className="desktop-nav">
                <div className="links">
                    <a href="#">Projects</a>
                    <a href="#">Timeline</a>
                    <a href="#">Hobbies</a>
                </div>
                <h1 className="logo">Tech by Juan</h1>
                <div className="contact">
                    <a><img src={linkedInLogo} alt="linkedin" /></a>
                    <a><img src={githubLogo} alt="github" /></a>
                    <a><img src={emailLogo} alt="email" /></a>
                </div>
            </nav>



            <nav className="mobile-nav">
                <h1 className="logo">Tech by Juan</h1>

                <div onClick={handleCollapse} className={`hamburger ${hamburger}`} id="hamburger-6">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`mobile-menu ${collapse}`}>
                    <h1 className="logo menu">Tech by Juan</h1>
                    <div className={"mobile-links"}>
                        <a href="#">Projects</a>
                        <a href="#">Timeline</a>
                        <a href="#">Hobbies</a>
                    </div>
                    <div className="mobile-contact ">
                        <a><img src={linkedInLogo} alt="linkedin" /></a>
                        <a><img src={githubLogo} alt="github" /></a>
                        <a><img src={emailLogo} alt="email" /></a>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar;