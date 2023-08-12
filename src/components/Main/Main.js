import React, { useEffect } from 'react'
import Intro from "../Layers/Intro/Intro"
import About from '../Layers/About/About';
import Timeline from '../Layers/Timeline/Timeline';
import Projects from '../Layers/Projects/Projects';

const Main = () => {
    return (
        <section className="container">
            {/* <!-- Swiper --> */}
            <div class="swiper-container">
                <div class="slider swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <Intro/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <About />
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <Timeline />
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <Projects />
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    );
}
export default Main;
