import React, { useState } from "react";

import "./Skills.css"


type Skills = {
    img: string,
    skill: string,
    description: string
}

export const Skill: React.FC<Skills> = ({ img, skill, description }) => {

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
            <a onClick={handleModal}><img src={img} alt="" /> {skill}</a>
            <div onClick={handleModal} className={`skill ${modal}`} >
                <div className="modal-text">
                    <h2>{skill}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}