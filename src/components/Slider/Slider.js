import React from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

import "./Slider.css"

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper/modules';

import Intro from "../Slides/Intro/Intro";
import About from "../Slides/About/About";
import Skills from "../Slides/Skills/Skills";
import Projects from "../Slides/Projects/Projects";
import Timeline from "../Slides/Timeline/Timeline";


const Slider = () => {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={25}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect={'cube'}
                grabCursor={true}
                loop
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
                <SwiperSlide><Intro /></SwiperSlide>
                <SwiperSlide><About /></SwiperSlide>
                <SwiperSlide><Skills /></SwiperSlide>
                <SwiperSlide><Projects /></SwiperSlide>
                <SwiperSlide><Timeline /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider