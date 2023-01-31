import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Main = () => {
    return (
        <section className="main-container">
            <div className="hero-text">
                <span className="text-style-1">Hey!</span>
                <span className="text-style-2">My name is <span className="name-style">Juan</span></span>
                <span className="text-style-3">Welcome to my Portfolio</span>
            </div>
            <span className="scroll-down">*scroll down for more*</span>
        </section>
    );
}

export default Main;