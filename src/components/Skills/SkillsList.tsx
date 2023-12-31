import React from "react"
import { Skill } from "./Skill"
import "./Skills.css"
import { SkillListType } from "../../types/SkillTypes"

const SkillsList: React.FC<SkillListType> = ({ skillList }) => {
    return (
        <div className='skills-list'>
            {skillList.map((item, index) => (
                <Skill key={index} img={item.img} name={item.name} description={item.description} />
            ))}
        </div>
    )
}

export default SkillsList