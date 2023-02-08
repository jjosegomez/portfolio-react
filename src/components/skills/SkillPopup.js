import React from "react";

const SkillPopup = (props) => {

    const skillDictionary = {
        "c++":{
            name:"C/C++",
            description:"Used to make terminal application and implement advanced algorithms"
        },
        "python": {
            name:"Python",
            description:"Used to make webscraping application and AI and ML projects"
        },
        "swift": {
            name:"Swift",
            description:"Used to make iOS application"
        },
        "web": {
            name:"HTML, CSS & JavaScript",
            description:"Used to make Fully Functional Web Applications."
        }
    }
    return(
        <div className="skill-popup">
            <img className="skill-popup-img"></img>
            <div className="popup-text">
                <h2>{skillDictionary[props.skill]}</h2>
            </div>
        </div>
    )
}

export default SkillPopup