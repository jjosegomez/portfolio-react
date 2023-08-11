import React from 'react'
import { useState } from 'react'
import Hero from "../Hero/Hero"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="top-row">TOP</div>
            <div className="mid-row">
                <div class="left-column">
                    LEFT
                </div>
                <div class="middle-block">
                    <Hero />
                </div>
                <div className="right-column">RIGHT</div>
            </div>
            <div class="bottom-row">BOTTOM</div>
        </div>
    )
}

export default Navbar