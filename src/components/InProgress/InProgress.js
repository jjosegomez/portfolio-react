import React from "react"
import { useState } from "react"
import workInProgress from "../../assets/work-in-progress.gif"

const Popup = () => {

    const [active, setActive] = useState("bg-opacity")
    const [isClicked, setIsClicked] = useState(false)

    const closePopup = () => {
        if(!isClicked){
            console.log("clicked", isClicked)
            setActive("hidden")
        }
        setIsClicked(!isClicked)
    }

    return(
        <div className={active} onClick={closePopup}>
            <div className="active-popup">
                <figure>
                    <img src={workInProgress}></img>
                </figure>
                <a onClick={closePopup}> OK</a>
            </div>
        </div>
    )
}

export default Popup