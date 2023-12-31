import React, { useState } from "react";
import Project from "./Project";
import "./Projects.css"
import { projectListData } from "./ProjectListData";

const ProjectList: React.FC = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    return (
        <div className="project-container">
            <div className="project-list">
                <h1>My Projects</h1>
                {
                    projectListData.map((project, index) => (
                        <a className="project-name" onClick={() => { setCurrentIdx(index) }} key={index}>{project.name}</a> // Use a unique key for each child
                    ))
                }
            </div>
            <Project project={projectListData[currentIdx]} className="large-project" />
        </div>
    )
}

export default ProjectList;
