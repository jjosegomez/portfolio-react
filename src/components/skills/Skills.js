import React from 'react'
import { useState } from 'react';
import SkillItem from './SkillItem';
import SkillPopup from './SkillPopup';
import cppLogo from "./../assets/skills-assets/cpp-logo.png"
import pythonLogo from "./../assets/skills-assets/python-logo.png"
import swiftLogo from "./../assets/skills-assets/swift-logo.png"
import webLogo from "./../assets/skills-assets/web-logo.png"

const Popup = ({ skill }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <img src={skill.image} onClick={() => setShowPopup(true)} />
            {showPopup && (
                <div className="skill-popup" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.99)),  url(${skill.image})`,
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
                                description="cpp description"
                            />
                            </a>
                            <a className='skill-item'>
                            <Skill
                                name="Python"
                                image={pythonLogo}
                                description="python description"
                            />
                            </a>
                            <a className='skill-item'>
                                <Skill
                                    name="iOS Dev"
                                    image={swiftLogo}
                                    description="swift description"
                                />
                            </a>
                            <a className='skill-item'>
                                <Skill
                                    name="Web Dev"
                                    image={webLogo}
                                    description="html,css,js,react description"
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

