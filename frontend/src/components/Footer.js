import React from "react";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <a className="a-tag" href="#aboutme-link">About me</a>
                <span className="divider">|</span>
                <a className="a-tag" href="#project-link">Projects</a>
                <span className="divider">|</span>
                <a className="a-tag" href="#contactme-link">Contact me</a>
                <span className="divider">|</span>
                <a className="a-tag" href="#"> Resume</a>
            </div>
            <h1>copyright-2022&copy;</h1>
        </div>
    );
}

export default Footer;