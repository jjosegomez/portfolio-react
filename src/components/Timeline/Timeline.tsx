import React from "react";
import "./Timeline.css";

import microsoft from "../../assets/timeline/microsoft.png"
import globaltech from "../../assets/timeline/globaltech.png"
import enrolledUsf from "../../assets/timeline/enrollusf.png"
import codepath from "../../assets/timeline/codepath.jpeg"
import gdsc from "../../assets/timeline/gdsc.jpeg"
import eversana from "../../assets/timeline/eversana.png"
import graduateusf from "../../assets/timeline/graduateusf.png"


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
                <div style={{ backgroundImage: `url(${image})` }} className="experience-block-img"></div>
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
            <Time date="2020" />
            <ExperienceBlock image={enrolledUsf} title="Enrolled Computer Science Student" company="University of South Florida" description1="Graduated from Hillsborough Community College and eagerly transitioned to pursue a computer science degree at USF." description2="Independently delved into learning HTML, CSS, and JavaScript as a recreational pursuit alongside academic studies." description3="Felt a mix of excitement and apprehension while embarking on the new educational journey, coupled with being honored with a transfer scholarship based on academic excellence." />
            <Time date="2021" />
            <ExperienceBlock image={globaltech} title="Student" company="GlobalTech Program at USF" description1="Discovered a passion for programming and technology during the initial year at USF, leading to a desire for further learning."description2="Enrolled in the Global Tech Program at USF, led by an ex-Google engineer, providing an introduction to web development and an opportunity to enhance existing knowledge."description3="Appreciated the program's emphasis on multicultural teamwork, finding it personally fulfilling, and culminating in receiving a certification at the program's completion."/>
            <ExperienceBlock image={codepath} title="Member" company="CodePath" description1="Expanded tech skills by enrolling in CODEPATH courses, a pivotal organization in my professional development journey."description2="Joined an iOS development program, delving into Swift and Storyboard UI, which turned out to be an immensely rewarding experience."description3="First exposure to APIs occurred during this program, learning how to integrate them into apps for real-time data population, marking a significant learning milestone."/>
            <Time date="2022" />
            <ExperienceBlock image={microsoft} title="Mentee at Microsoft Mentorship Program" company="Microsoft" description1="Acquired proficiency in Microsoft Technologies, including Power Apps, Power BI, and Power AI, through dedicated learning and practical application." description2="Assisted to workshops on leadership, communication, emotional intelligence, public speaking, teamwork and other topics, supporting enhancing my soft skills and professional development." description3="Collaborated effectively within a small team and actively participated in a Hackathon Project, contributing valuable ideas and technical expertise." />
            <Time date="2023" />
            <ExperienceBlock image={gdsc} title="Tech Lead" company="Google Developer Student Club" description1="Conducted workshops for USF students, covering web development basics and Google technologies, providing participants with hands-on skills and valuable knowledge to excel in their careers" description2="Collaborated closely with the e-board, playing an integral role in planning and executing exclusive projects that enhanced the club's offerings and fostered greater engagement within the student community" description3="Served as a mentor and guide to students, offering support and encouragement in their programming projects, nurturing their growth, and inspiring creative and innovative solutions" />
            <ExperienceBlock image={eversana} title="Software Development Intern" company="Eversana Intouch" description1="Led and executed website updates utilizing HTML, CSS, and JavaScript for live client websites at a consulting firm." description2="Pioneered a collaborative intern project with a team of 8 members, serving as the sole developer. Successfully orchestrated the redesign of the website for enhanced modern aesthetics and user-friendliness." description3="Demonstrated strong multitasking abilities by effectively managing and contributing to about 3 simultaneous projects while actively participating in stand-up meetings and regular project reviews with mentor and manager." />
            <ExperienceBlock image={graduateusf} title="Graduate Computer Science Student" company="University of South Florida" description1="Developed strong problem-solving skills and algorithmic thinking by breaking down complex problems and creating efficient algorithms. Explored data structures and computational thinking." description2="Attained proficiency in programming languages such as Python, Java, and C++, applying theoretical knowledge to real-world software development projects." description3="Gained comprehensive understanding of computer systems, including computer architecture, operating systems, networks, databases, and software engineering principles."
            />
            <Time date="Now" />
        </div>
    );
}

export default Timeline