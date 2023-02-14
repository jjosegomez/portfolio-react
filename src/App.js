import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";
import Contactme from "./components/Contactme";
import Popup from "./components/InProgressPopup";

const App = () => {
    return (
        <>
        {/* <Popup/> */}
        <Navbar />
        <div className="app">
            <Main />
            <Aboutme/>
            <Skills/>
            <Projects/>
            <Contactme/>
            <Footer/>
        </div>
        </>
    );
}

export default App;