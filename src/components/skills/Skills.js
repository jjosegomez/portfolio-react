import React from 'react'
import { useState } from 'react';
import SkillItem from './SkillItem';

const Skills = () => {

    const [popupVisible, setPopupVisible] = useState("visible")

    const popup = () => {
        if (popupVisible === "visible"){
            setPopupVisible("hidden")
        }
        else{
            setPopupVisible("visible")
        }
        console.log(popupVisible)
    }

    return (
        <div className='white-bg-1'>
            <section data-aos="fade-up" className="skills-container">
                <div className="titles">
                    <h1>Skills</h1>
                </div>
                <div className='skills'>
                <p>Click on the skills below for more details!</p>
                    <div className='programming-languages'>
                        <a onClick={popup}><SkillItem img="https://picsum.photos/200"/></a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;

