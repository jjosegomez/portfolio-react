import React from "react";
import { useState } from "react";

const SkillItem = (props) => {

    const [popupClass, setPopupClass] = useState("hidden")
    const [isPopupClicked, setIsPopupClicked] = useState(false)

    const popup = () => {
        setIsPopupClicked(!isPopupClicked)
        console.log()
    }

    return(
        <>
            <div className="lang">
                <a onClick={popup()}><img src={props.image}></img></a>
            </div>
            <div className={popupClass}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default SkillItem