import React from 'react'
import Main from "../Main/Main.css"

const Canvas = () => {
    return (
        <div className='navbar'>
            <div className="top-row">TOP</div>
            <div className="mid-row">
                <div class="left-column">
                    LEFT
                </div>
                <div class="middle-block">
                    <Main />
                </div>
                <div className="right-column">RIGHT</div>
            </div>
            <div class="bottom-row">BOTTOM</div>
        </div>
    )
}

export default Canvas