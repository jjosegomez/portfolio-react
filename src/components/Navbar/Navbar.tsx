import React, { useState } from "react"
import "./Navbar.css"
import linkedInLogo from "../../assets/socials/linkedin-svgrepo-com.svg"
import githubLogo from "../../assets/socials/github-142-svgrepo-com.svg"
import resumeLogo from "../../assets/socials/profile-svgrepo-com.svg"
import { NavLink, Link } from "react-router-dom"

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

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <nav className="desktop-nav">
                <div className="links">
                    <NavLink to="about" onClick={() => {handleCollapse(); scrollUp()}}>About</NavLink>
                    <NavLink to="projects" onClick={() => {handleCollapse(); scrollUp()}}>Projects</NavLink>
                    <NavLink to="timeline" onClick={() => {handleCollapse(); scrollUp()}}>Timeline</NavLink>
                </div>
                <Link to="/" onClick={() => {scrollUp()}}><h1 className="logo">Tech by Juan</h1></Link>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/jjgomezswe/" ><img src={linkedInLogo} alt="linkedin" /></a>
                    <a href="https://github.com/jjosegomez" ><img src={githubLogo} alt="github" /></a>
                    <a href="https://docs.google.com/document/d/1e39WtsnwBifsmVNcytldUySPRYGdlBdfHojKvtSfboc/edit?usp=sharing" ><img src={resumeLogo} alt="email" /></a>
                </div>
            </nav>

            <nav className="mobile-nav">
            <Link to="/" onClick={() => {scrollUp()}}><h1 className="logo">Tech by Juan</h1></Link>

                <div onClick={handleCollapse} className={`hamburger ${hamburger}`} id="hamburger-6">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`mobile-menu ${collapse}`}>
                    <Link to="/" onClick={() => {scrollUp()}}><h1 className="logo menu">Tech by Juan</h1></Link>
                    <div className={"mobile-links"}>
                    <NavLink to="about" onClick={() => {handleCollapse(); scrollUp()}}>About Me</NavLink>
                    <NavLink to="projects" onClick={() => {handleCollapse(); scrollUp()}}>Projects</NavLink>
                    <NavLink to="timeline" onClick={() => {handleCollapse(); scrollUp()}}>Timeline</NavLink>
                    </div>
                    <div className="mobile-contact">
                        <a href="https://www.linkedin.com/in/jjgomezswe/" ><img src={linkedInLogo} alt="linkedin" /></a>
                        <a href="https://github.com/jjosegomez" ><img src={githubLogo} alt="github" /></a>
                        <a href="https://docs.google.com/document/d/1e39WtsnwBifsmVNcytldUySPRYGdlBdfHojKvtSfboc/edit?usp=sharing"><img src={resumeLogo} alt="email" /></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;