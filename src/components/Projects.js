import React, {useEffect} from 'react'
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Project = () => {

    /*
    make a dictionary where the keys are numbers. every element is an array with media corresponding to each project.
    projects = { 
        1: [project_name, link, picture, label]
        2: [project_name, link, picture, label]
        3: [project_name, link, picture, label]
        4: [project_name, link, picture, label]
        5: [project_name, link, picture, label]
    }

    //we will display 5 random projects everytime the page is loaded
    display(random(key));

    */
    return (
        <>  
            <div id='project-link'></div>
            <section data-aos="fade-up" className="project-container">
                <div className="titles">
                    <h2>Projects</h2>
                </div>
                <div className="project-description">
                    <p>These are some of the personal project I have worked on. It's programmed so it shows random projects on reload.</p>
                </div>
                <div className="project-items-container">
                    <div className="project">
                        <figure className="project-img-container">
                            <img className="project-img" src='https://picsum.photos/200' alt='project-img'></img>
                        </figure>
                        <article className="project-text">
                            <h3>project_name</h3>
                            <span>project description or label</span>
                        </article>
                    </div>
                    <div className="project">
                        <figure className="project-img-container">
                            <img className="project-img" src='https://picsum.photos/200' alt='project-img'></img>
                        </figure>
                        <article className="project-text">
                            <h3>project_name</h3>
                            <span>project description or label</span>
                        </article>
                    </div>
                    <div className="project">
                        <figure className="project-img-container">
                            <img className="project-img" src='https://picsum.photos/200' alt='project-img'></img>
                        </figure>
                        <article className="project-text">
                            <h3>project_name</h3>
                            <span>project description or label</span>
                        </article>
                    </div>
                    <div className="project">
                        <figure className="project-img-container">
                            <img className="project-img" src='https://picsum.photos/200' alt='project-img'></img>
                        </figure>
                        <article className="project-text">
                            <h3>project_name</h3>
                            <span>project description or label</span>
                        </article>
                    </div>
                    <div className="visit-github">
                        <p>If you like what you see and want to see more, visit my <a className="a-tag" target="_blank" href="https://github.com/jjosegomez">GitHub</a></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project