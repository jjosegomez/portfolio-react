import React from 'react'
import { useState } from 'react';
import cppLogo from "./assets/skills-assets/cpp-logo.png"
import pythonLogo from "./assets/skills-assets/python-logo.png"
import swiftLogo from "./assets/skills-assets/swift-logo.png"
import webLogo from "./assets/skills-assets/web-logo.png"

const Popup = ({ skill }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <img src={skill.image} onClick={() => setShowPopup(true)} />
            {showPopup && (
                <div className="skill-popup" style={{
                    backgroundImage: `linear-gradient(rgba(40,43,48,.8), rgba(30,33,36,.99)),  url(${skill.image})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}>
                    <div className='skill-popup-content'>
                        <h2>{skill.name}</h2>
                        <p>{skill.description}</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Skill = ({ name, image, description }) => {
    return <Popup skill={{ name, image, description }} />;
};

const Skills = () => {
    return (
        <div>
            <div className='white-bg-1'>
                <section data-aos="fade-up" className="skills-container">
                    <div className="titles">
                        <h1>Skills</h1>
                    </div>
                    <div className='skills'>
                        <div className='programming-languages'>
                            <a className='skill-item'>
                            <Skill
                                name="C++"
                                image={cppLogo}
                                description="I have used C++ to develop high-performing algorithms and designing data structures. Used for Object Oriented Programming and Cryptographic Encryption"
                            />
                            </a>
                            <a className='skill-item'>
                            <Skill
                                name="Python"
                                image={pythonLogo}
                                description="I used Python for Web scraping, Data analysis, AI/ML and Web development."
                            />
                            </a>
                            <a className='skill-item'>
                                <Skill
                                    name="iOS Dev"
                                    image={swiftLogo}
                                    description=" This is a programming language developed by Apple for building software for their platforms, such as macOS, iOS, and watchOS. I have developed a couple of mobile applications using this technology."
                                />
                            </a>
                            <a className='skill-item'>
                                <Skill
                                    name="Web Dev"
                                    image={webLogo}
                                    description="These are the core technologies used for building websites and web applications. HTML to define the structure and content of web pages, CSS to specify the layout and styling, and JavaScript to add interactivity and dynamic behavior to web pages. I am currently learning React JS, However I have experience using vanilla JavaScript and other technologies like WordPress and Bootstrap"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Skills;

