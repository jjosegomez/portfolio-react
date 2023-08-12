import React from "react";
import "./Intro.css"
import turnPhone from "../../../assets/turn-phone.gif"

const Intro = () => {
    return (
        <div className='slider-content-container'>
            <div className="centered">
            <h1 className='typewriter'>Juan J Gómez</h1>
            <div className='intro-text'>
                <h3>B.S. Computer Science</h3>
                <span>–</span>
                <h3>Software Engineer</h3>
            </div>
            <div className="landscape">
                <span>view horizontally for a better experience</span>
                <img style={{width:"150px", display: "block", margin:"auto"}} src={turnPhone} alt="turn phone gif"></img>
            </div>
            </div>
        </div>
    )
}

export default Intro