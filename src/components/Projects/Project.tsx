import React from 'react'; // Ensure React is imported

type ProjectProps = {
    project: {
        image: string;
        name: string;
        description: string;
        stack: string[];
    };
    className:string
};

const Project: React.FC<ProjectProps> = ({ project, className }) => {
    return (
        <div className={`${className} project`}>
            <figure style={{ backgroundImage: `url(${project.image})` }}></figure>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className='project-technologies'>
                <h3>Technologies Used:</h3>
                <ul>
                    {/* Mapping through the stack array and returning a list item for each entry */}
                    {project.stack.map((tech, index) => (
                        <li key={index}>{tech}</li> // Use a unique key for each child
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
