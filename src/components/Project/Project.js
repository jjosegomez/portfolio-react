import React from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Project = (props) => {

    return (
        <>  
            <div id='project-link'></div>
            <div className='white-bg-2'>
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
                        <div className="visit-github">
                            <p>If you like what you see and want to see more, visit my <a className="a-tag" href="https://github.com/jjosegomez" target="_blank" rel="noreferrer">GitHub</a></p>
                        </div>
                    </div>
                </section>
                {props.data}
            </div>
        </>
    );
}

export default Project