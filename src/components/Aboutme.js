import React from 'react'
import usfLogo from './assets/university-of-south-florida-usf-vector-logo-2022.svg'
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
                            <p>I am an international student, I am currently enrolled in the computer science program at USF. I enjoy programming and software development this is why I am always learning from external sources and the courses provided by USF.</p>
                        </div>
                        <figure className='about-img'>
                            <img src="https://picsum.photos/200/300" alt="USF logo"></img>
                        </figure>
                    </div>
                    <div className="about-text-container reverse-flex">
                        <div className='about-text'>
                            <p>I am an international student, I am currently enrolled in the computer science program at USF. I enjoy programming and software development this is why I am always learning from external sources and the courses provided by USF.</p>
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