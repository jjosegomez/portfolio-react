import React from "react";

const SkillPopup = (props) => {
    return(
        <div className="skill-popup">
            <img src={props.img}></img>
            <span>{props.description}</span>
        </div>
    )
}