import React, { useContext, useState } from "react"
import "./Navbar.css"
import linkedInLogo from "../../assets/socials/linkedin-svgrepo-com.svg"
import githubLogo from "../../assets/socials/github-142-svgrepo-com.svg"
import resumeLogo from "../../assets/socials/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg"

import { PortfolioContext, PortfolioContextProps } from "../PortfolioContext"

const Navbar: React.FC = () => {

    const { updateCurrentState } = useContext<PortfolioContextProps>(PortfolioContext);

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
                    <a onClick={() => { updateCurrentState(1) }}>About Me</a>
                    <a onClick={() => { updateCurrentState(2) }}>Projects</a>
                    <a onClick={() => { updateCurrentState(3) }}>Timeline</a>
                </div>
                <h1 onClick={() => { updateCurrentState(0) }} className="logo">Tech by Juan</h1>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/jjgomezswe/" ><img src={linkedInLogo} alt="linkedin" /></a>
                    <a href="https://github.com/jjosegomez" ><img src={githubLogo} alt="github" /></a>
                    <a href="https://docs.google.com/document/d/1e39WtsnwBifsmVNcytldUySPRYGdlBdfHojKvtSfboc/edit?usp=sharing" ><img src={resumeLogo} alt="email" /></a>
                </div>
            </nav>

            <nav className="mobile-nav">
                <h1 onClick={() => { updateCurrentState(0) }} className="logo">Tech by Juan</h1>

                <div onClick={handleCollapse} className={`hamburger ${hamburger}`} id="hamburger-6">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`mobile-menu ${collapse}`}>
                    <h1 onClick={() => { updateCurrentState(0); handleCollapse() }} className="logo menu">Tech by Juan</h1>
                    <div className={"mobile-links"}>
                        <a onClick={() => { updateCurrentState(1); handleCollapse() }}>About Me</a>
                        <a onClick={() => { updateCurrentState(2); handleCollapse() }}>Projects</a>
                        <a onClick={() => { updateCurrentState(3); handleCollapse() }}>Timeline</a>
                    </div>
                    <div className="mobile-contact ">
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