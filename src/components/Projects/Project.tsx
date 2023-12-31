import React from 'react'; // Ensure React is imported
import SkillsList from '../Skills/SkillsList';
import { ProjectType } from '../../types/ProjectType';

type ProjectProps = {
    project: ProjectType,
    className: string
}


const Project: React.FC<ProjectProps> = ({ project, className }) => {
    return (
        <div className={`${className} project`}>
            <figure style={{ backgroundImage: `url(${project.image})` }}></figure>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className='project-technologies'>
                <SkillsList skillList={project.skills} />
            </div>
        </div>
    );
};

export default Project;
