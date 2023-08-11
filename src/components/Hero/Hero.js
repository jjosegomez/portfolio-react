import React, { useEffect } from 'react'
import AnimationOnScroll from 'aos'
import pp from "../../assets/pp.jpeg"
import 'aos/dist/aos.css' // You can also use <link> for styles

const Main = () => {
    return (
        <section className="hero-container">
            <div className='hero-card'>
                <label className='card-text'>
                    <h1 className='typewriter'>Juan J Gomez</h1>
                    <h3>B.S. Computer Science</h3>
                </label>
            </div>
        </section>
    );
}
export default Main;
