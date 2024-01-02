import React, { useEffect, useState } from "react";
import Project from "./Project";
import "./Projects.css"
import { projectListData } from "./ProjectListData";

const ProjectList: React.FC = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [toggleSelect, setToggleSelect] = useState<string>("hidden")
    const [selectProjectName, setSelectProjectName] = useState<string>("Select a Project")

    const handleSelect = () => {
        if (toggleSelect == "hidden") {
            setToggleSelect("visible")
        }
        else {
            setToggleSelect("hidden")
        }
        console.log(toggleSelect)
    }

    const handleNextProject = () => {
        if (currentIdx < projectListData.length-1) {
            setCurrentIdx(currentIdx + 1)
        }
        console.log(currentIdx)
    }
    const handlePrevProject = () => {
        if (currentIdx > 0) {
            setCurrentIdx(currentIdx - 1)
        }
        console.log(selectProjectName)
    }

    useEffect( () => {setSelectProjectName(projectListData[currentIdx].name)} ,[currentIdx])

    return (
        <div className="project-container">
            <div className="project-list-desktop">
            <h1>My Projects</h1>
                {
                    projectListData.map((project, index) => (
                        <a className="project-name" onClick={() => { setCurrentIdx(index) }} key={index}>{project.name}</a> // Use a unique key for each child
                    ))
                }
            </div>

            <div className="project-list-mobile">
            <h1>My Projects</h1>
                <div className={`project-select ${toggleSelect}`}>
                    <button className="select-arrow" onClick={handlePrevProject}>&lt;</button>
                    <button className="select-button" onClick={handleSelect}>{selectProjectName}</button>
                    <button className="select-arrow" onClick={handleNextProject}>&gt;</button>
                </div>
                <div className={`project-select-menu ${toggleSelect}`} >
                    {
                        projectListData.map((project, index) => (
                            <a className="project-name" onClick={() => { setCurrentIdx(index); handleSelect() }} key={index}>{project.name}</a> // Use a unique key for each child
                        ))
                    }
                </div>
            </div>

            <Project project={projectListData[currentIdx]} />
        </div>
    )
}

export default ProjectList;
