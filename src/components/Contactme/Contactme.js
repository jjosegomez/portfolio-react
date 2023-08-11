import React from "react";
import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import whiteUSF from "../../assets/white-usf-logo.svg"
import pp from "../../assets/pp.jpeg"

const Contactme = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    });
    return (
        <>
            <div id='contactme-link'></div>
            <div data-aos="fade-up" className="contactme-container">
                <div className="titles">
                    <h2>Contact me</h2>
                </div>
                <div className="card">
                    <div className="top-card">
                        <figure className="pp">
                            <img src={pp} alt="profile-pic"></img>
                        </figure>
                        <article className="card-text">
                            <figure className="white-usf-logo">
                                <img src={whiteUSF}></img>
                            </figure>
                            <p>Computer Science Student at USF</p>
                            <p>juanjo.gomez2000@hotmail.com</p>
                            <a className="a-tag" href="https://www.linkedin.com/in/juan-j-gomez-59174a189/" target="_blank">LinkedIn</a>
                            <a className="a-tag" href="https://www.github.com/jjosegomez" target="_blank">GitHub</a>
                        </article>
                    </div>
                    <div className="card-name">
                        <span>Juan J. Gomez</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contactme