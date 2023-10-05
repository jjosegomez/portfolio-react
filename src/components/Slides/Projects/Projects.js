import React from "react";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5050/api/projects");
            const data = await response.json();
            setProjects(data?.projects);
        }

        fetchData();
    }, []);

    return (
        <div className="slider-content-container">
            {console.log(projects)}
            <div className="centered">
                <h1>Projects</h1>
                <ul>
                    {projects?.map((project) => (
                        <li key={project.id}>
                            <strong>Name:</strong> {project.name}<br />
                            <strong>Description:</strong> {project.description}<br />
                            <strong>Language:</strong> {project.language}<br />
                            <strong>Last Update:</strong> {project.lastUpdate}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects