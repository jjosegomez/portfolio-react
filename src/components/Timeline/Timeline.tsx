import React from "react";
import "./Timeline.css";
import heroImg from "../../assets/images/hero.png"

type ExperienceBlockProps = {
    image: string,
    company: string,
    title: string,
    description1: string,
    description2: string,
    description3: string,
}

type TimeProps = {
    date: string
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ image, company, title, description1, description2, description3 }) => {
    return (
        <>
            <div className="line"></div>
            <div className="experience-block">
            <div style={{backgroundImage:`url(${image})`}} className="experience-block-img"></div>
                <div className="experience-block-text">
                <h2>{company}</h2>
                <h3>{title}</h3>
                <ul className="description">
                    <li>{description1}</li>
                    <li>{description2}</li>
                    <li>{description3}</li>
                </ul>
                </div>
            </div>
            <div className="line"></div>
        </>
    )
}

const Time: React.FC<TimeProps> = ({ date }: { date: string }) => {
    return (
        <div className="date">
            <h3>{date}</h3>
        </div>
    )
}

const Timeline = () => {
    return (
        <div className="timeline">
            <h1>My Timeline</h1>
            <Time date="2020"/>
            <ExperienceBlock image={heroImg} title="Enrolled Computer Science Student" company="University of South Florida" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." />
            <Time date="2021"/>
            <ExperienceBlock image={heroImg} title="Student" company="GlobalTech Program at USF" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." />
            <ExperienceBlock image={heroImg} title="Member" company="CodePath" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." />
            <Time date="2022" />
            <ExperienceBlock image={heroImg} title="Mentee at Microsoft Mentorship Program" company="Microsoft" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." />
            <Time date="2023" />
            <ExperienceBlock image={heroImg} title="Tech Lead" company="Google Developer Student Club" description1="Conducted workshops for USF students, covering web development basics and Google technologies, providing participants with hands-on skills and valuable knowledge to excel in their careers" description2="Collaborated closely with the e-board, playing an integral role in planning and executing exclusive projects that enhanced the club's offerings and fostered greater engagement within the student community" description3="Served as a mentor and guide to students, offering support and encouragement in their programming projects, nurturing their growth, and inspiring creative and innovative solutions" />
            <ExperienceBlock image={heroImg} title="Software Development Intern" company="Eversana Intouch" description1="Led and executed website updates utilizing HTML, CSS, and JavaScript for live client websites at a consulting firm." description2="Pioneered a collaborative intern project with a team of 8 members, serving as the sole developer. Successfully orchestrated the redesign of the website for enhanced modern aesthetics and user-friendliness." description3="Demonstrated strong multitasking abilities by effectively managing and contributing to about 3 simultaneous projects while actively participating in stand-up meetings and regular project reviews with mentor and manager." />
            <ExperienceBlock image={heroImg} title="Graduate Computer Science Student" company="University of South Florida" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." />
            <Time date="Now" />
        </div>
    );
}

export default Timeline