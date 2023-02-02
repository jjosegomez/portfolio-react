import React from 'react'
import { useState } from 'react';
import SkillItem from './SkillItem';

const Skills = () => {

    const [isClicked, setIsClicked] = useState(true)

    return (
        <div className='white-bg-1'>
            <section data-aos="fade-up" className="skills-container">
                <div className="titles">
                    <h1>Skills</h1>
                </div>
                <div className='skills'>
                    <div className='programming-languages'>
                        {/* causing re-render error check for infinite loops
                        <SkillItem image="https://picsum.photos/200"/> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;

