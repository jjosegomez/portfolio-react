import React from "react";
import "./Timeline.css";

const ExperienceBlock = (props) => {
    return(
        <div className="experience-block">
            <div className="experience-block-header">
                <h3>{props.company}</h3>
                <h3>{props.title}</h3>
            </div>
            <div className="description">
                <p>{props.description1}</p>
                <p>{props.description2}</p>
                <p>{props.description3}</p>
            </div>
        </div>
    )
}

const Timeline = () => {
    return (
        <div className="slider-content-container">
            <div className="centered timeline">
                <ExperienceBlock title="Tech Lead" company="Google Developer Student Club" description1="Worked on the Bloomberg API" description2="Worked on the Bloomberg API" description3="Worked on the Bloomberg API" />
                <ExperienceBlock title="Software Development Intern" company="Bloomberg" description1="Worked on the Bloomberg API" description2="Worked on the Bloomberg API" description3="Worked on the Bloomberg API" />
                <ExperienceBlock title="Mentee at Microsoft Mentorship Program " company="Bloomberg" description1="Worked on the Bloomberg API" description2="Worked on the Bloomberg API" description3="Worked on the Bloomberg API" />
            </div>
        </div>
    );
}

export default Timeline