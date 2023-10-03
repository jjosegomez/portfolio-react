import React from "react";
import "./Timeline.css";

const ExperienceBlock = (props) => {
    return(
        <div className="experience-block">
            <div className="experience-block-header">
                <h3>{props.company}</h3>
                <h3> – </h3>
                <h3>{props.title}</h3>
            </div>
            <div className="description">
                <p>{props.description1}</p>
                <p>{props.description2}</p>
                <p>{props.description3}</p>
            </div>
            <strong style={{textAlign:"center"}}>{props.date}</strong>
        </div>
    )
}

const Timeline = () => {
    return (
        <div className="slider-content-container">
            <div className="timeline">
            <h1>Timeline</h1>
            <ExperienceBlock title="Tech Lead" company="Google Developer Student Club" description1="Conducted workshops for USF students, covering web development basics and Google technologies, providing participants with hands-on skills and valuable knowledge to excel in their careers" description2="Collaborated closely with the e-board, playing an integral role in planning and executing exclusive projects that enhanced the club's offerings and fostered greater engagement within the student community" description3="Served as a mentor and guide to students, offering support and encouragement in their programming projects, nurturing their growth, and inspiring creative and innovative solutions" date="January 2023 - Now"/>
            <ExperienceBlock title="Software Development Intern" company="Eversana Intouch" description1="Led and executed website updates utilizing HTML, CSS, and JavaScript for live client websites at a consulting firm." description2="Pioneered a collaborative intern project with a team of 8 members, serving as the sole developer. Successfully orchestrated the redesign of the website for enhanced modern aesthetics and user-friendliness." description3="Demonstrated strong multitasking abilities by effectively managing and contributing to about 3 simultaneous projects while actively participating in stand-up meetings and regular project reviews with mentor and manager." date="June 2023 - August 2023"/>
            <ExperienceBlock title="Mentee at Microsoft Mentorship Program" company="Microsoft" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." date="July 2022 - August 2022" /> </div>
        </div>
    );
}

export default Timeline