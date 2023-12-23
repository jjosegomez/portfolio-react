import React, { useState } from "react";
import Project from "./Project";
import "./Projects.css"
import technicalAnalysisImg from "../../assets/projects/technical-analysis.gif"

import instagramImg from "../../assets/projects/instagram.gif"
import twitterImg from "../../assets/projects/twitter.gif"
import pacmanImg from "../../assets/projects/pacman.gif"

export type ProjectType = {
    image: string,
    name: string,
    description: string,
    stack: string[],
    lastUpdate: string
}

const Projects: React.FC = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    const projectList: ProjectType[] = [
        {
            "image": "",
            "name": "AI Tutor",
            "description": "An advanced web application leveraging AI and NLP to provide personalized tutoring services. It adapts to individual learning styles and offers interactive problem-solving sessions using TypeScript for application logic, React for a dynamic front-end, and Django as a high-level Python web framework ensuring robust back-end operations.",
            "stack": ["TypeScript", "React", "Django"],
            "lastUpdate": "recently"
        },
        {
            "image": pacmanImg,
            "name": "Pac-Man Project",
            "description": "A recreation of the classic Pac-Man game with an added twist of Reinforced Learning (Reflex Agent) AI. This project aims to demonstrate the use of Python in developing AI that learns and adapts to game mechanics, making the game more engaging and challenging.",
            "stack": ["Python"],
            "lastUpdate": "recently"
        },
        {
            "image": "",
            "name": "FirstLand",
            "description": "A comprehensive Web App and AI Assistant designed to enhance user engagement through intuitive interfaces and automation. Utilizes the MERN stack for a full-cycle development, integrating MongoDB, Express.js, React, and Node.js for a seamless user experience from front to back end.",
            "stack": ["MongoDB", "Express.js", "React", "Node.js"],
            "lastUpdate": "recently"
        },
        {
            "image": "",
            "name": "SupremeBot",
            "description": "An automated bot specialized for e-commerce and data collection through web scraping. Built with Selenium and Python, it navigates and interacts with web pages to automate tasks, collect data, or purchase items quickly, catering to both consumer and business needs.",
            "stack": ["Selenium", "Python"],
            "lastUpdate": "recently"
        },
        {
            "image": "",
            "name": "Automated Birthday Message for Clients",
            "description": "A targeted solution for enhancing client engagement by automating birthday messages. Utilizes JavaScript for scripting and Twilio API for sending SMS, ensuring a personal touch in professional relationships and increasing client retention.",
            "stack": ["JavaScript", "Twilio"],
            "lastUpdate": "recently"
        },
        {
            "image": instagramImg,
            "name": "Instagram Clone",
            "description": "An ambitious project replicating the core functionalities of Instagram, focusing on user posts and interactions using Swift and the Back4App parse server. It aims to mimic the social media experience with custom features and a unique design.",
            "stack": ["Swift", "Back4App", "XCode"],
            "lastUpdate": "recently"
        },
        {
            "image": twitterImg,
            "name": "Twitter Clone",
            "description": "A Twitter clone designed to provide a similar social networking experience. Utilizing Swift for iOS development and integrating with the Twitter API, this project aims to replicate functionalities and UI elements of the original platform while providing a sandbox for additional features.",
            "stack": ["Twitter API", "Swift", "XCode"],
            "lastUpdate": "recently"
        },
        {
            "image": technicalAnalysisImg,
            "name": "Technical Analysis Application",
            "description": "A robust application designed for technical analysis and data visualization in business. Utilizing C# and the .NET framework, the application focuses on analyzing files and visualizing patterns, aiding businesses in making data-driven decisions.",
            "stack": ["C#", ".Net"],
            "lastUpdate": "recently"
        },
        {
            "image": "",
            "name": "Facial Recognition",
            "description": "A sophisticated Machine Learning model aimed at recognizing and verifying individuals from a database based on facial features. This project showcases the application of machine learning and data science techniques in enhancing security and personalization features.",
            "stack": ["SVM", "Classification Models"],
            "lastUpdate": "recently"
        },
        {
            "image": "",
            "name": "Your LifeCoach",
            "description": "An interactive website designed for life coaches to manage case studies, schedule appointments, and handle client traffic efficiently. Combining TypeScript, React, Node.js, and MongoDB, it offers a comprehensive solution for client management, appointment scheduling, and resource organization.",
            "stack": ["TypeScript", "React", "Node.js", "MongoDB"],
            "lastUpdate": "recently"
        }
    ]
    // Your project list here

    // const handleNextProject = () => {
    //     setCurrentIdx((prevIndex) => (prevIndex + 1) % projectList.length); // Loop back to the start
    // }

    // const handlePrevProject = () => {
    //     setCurrentIdx((prevIndex) => (prevIndex - 1 + projectList.length) % projectList.length); // Loop back to the end
    // }

    return (
        <div className="project-container">
            <div className="project-list">
                <h1>My Projects</h1>
                {
                    projectList.map((project, index) => (
                        <a className="project-name" onClick={() => { setCurrentIdx(index) }} key={index}>{project.name}</a> // Use a unique key for each child
                    ))
                }
            </div>
            <Project project={projectList[currentIdx]} className="large-project" />
        </div>
    )
}

export default Projects;
