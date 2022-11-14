import React from 'react'
import usfLogo from './assets/university-of-south-florida-usf-vector-logo-2022.svg'
const Aboutme = () => {
    return (
        <>
            <div id="aboutme-link"></div>
            <section data-aos="fade-up" className="aboutme-container">
                <div className="titles">
                    <h1>About me</h1>
                </div>
                <div className="aboutme-text">
                    <p>I am an international student, I am currently enrolled in the computer science program at USF. I enjoy programming and software development this is why I am always learning from external sources and the courses provided by USF.</p>
                    <img className='usf-img' src={usfLogo} alt="USF logo"></img>
                    <p>I love and enjoy programming and experimenting with different languages and tools. I want to find the branch of computer science that I want to focus on. this is why I have been jumping around different branches learning from various sources. Due to this, I have been exposed to many different topics in the programming world such as game development, ios development, automation using web scraping and algorithms, software engineering, and web development. Thanks to this I've had the opportunity to learn several programming languages like Python, C/C++, Swift, HTML, CSS, JavaScript, and more.</p>
                </div>
                </section>
        </>
    );
}
export default Aboutme;