import React, { useEffect } from 'react'
import Aos from 'aos'
import pp from "./assets/pp.jpeg"
import 'aos/dist/aos.css' // You can also use <link> for styles

const Main = () => {
    return (
        <section className="hero-container">
            <div className='hero-card'>
                <img src={pp}></img>
                <label className='card-text'>
                    <h2 id='my-name'>Juan J Gomez</h2>
                    <h4>Incoming Software Engineer</h4>
                </label>
            </div>
        </section>
    );
}
export default Main;
