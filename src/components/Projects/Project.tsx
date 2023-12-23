import React from 'react'; // Ensure React is imported

type ProjectProps = {
    project: {
        image: string;
        name: string;
        description: string;
        stack: string[];
        lastUpdate: string;
    };
    className:string
};

const Project: React.FC<ProjectProps> = ({ project, className }) => {
    return (
        <div className={`${className} project`}>
            <figure style={{ backgroundImage: `url(${project.image})` }}></figure>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div>
                Technologies Used:
                <ul>
                    {/* Mapping through the stack array and returning a list item for each entry */}
                    {project.stack.map((tech, index) => (
                        <li key={index}>{tech}</li> // Use a unique key for each child
                    ))}
                </ul>
            </div>
            <span>Last Updated: {project.lastUpdate}</span>
        </div>
    );
};

export default Project;
