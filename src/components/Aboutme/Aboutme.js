import React from 'react'
import usfLogo from '../../assets/university-of-south-florida-usf-vector-logo-2022.svg'

const Aboutme = () => {
    return (
        <>
            <div className='white-bg-2'>
                <div id="aboutme-link"></div>
                <section data-aos="fade-up" className="aboutme-container">
                    <div className="titles">
                        <h1>About me</h1>
                    </div>
                    <div className="about-text-container">
                        <div className='about-text'>
                            <p>Hello, my name is Juan Gomez and I'm a driven software engineer with a passion for learning. I will be graduating from the University of South Florida in Fall 2023, with a Bachelors in Computer Science.
                                With experience in both web and mobile development, I possess a solid understanding of technologies such as AI, data structures, and algorithms. I have a proven track record of delivering effective software solutions and am dedicated to continuously enhancing my abilities.
                                 </p>
                        </div>
                        <figure className='about-img'>
                            <img src="https://picsum.photos/200/300" alt="USF logo"></img>
                        </figure>
                    </div>
                    <div className="about-text-container reverse-flex">
                        <div className='about-text'>
                            <p>Whether working on a team or independently, I am committed to writing high-quality, efficient code and delivering excellent results. I am always eager to tackle new challenges and further develop my skills. Whether working on a team or independently, I am committed to writing high-quality, efficient code and delivering excellent results. I am always eager to tackle new challenges and further develop my skills.</p>
                        </div>
                        <figure className='about-img'>
                            <img src="https://picsum.photos/seed/picsum/200/300" alt="USF logo"></img>
                        </figure>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Aboutme;