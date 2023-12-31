import React, { useState } from "react";
import "./Skills.css"
import { SkillsType } from "../../types/SkillTypes";

export const Skill: React.FC<SkillsType> = ({ img, name, description }) => {

    const [modal, setModal] = useState<string>("")

    const handleModal = () => {
        if (modal == "active") {
            setModal("")
        }
        if (modal == "") {
            setModal("active")
        }
        console.log(modal)
    }

    return (
        <>
            <a className="skill" onClick={handleModal}><img src={img} alt="." /> {name}</a>
            <div onClick={handleModal} className={`skill-modal ${modal}`} >
                <div className="modal-text">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}