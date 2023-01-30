import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contactme from "./components/Contactme";
import Timeline from "./components/Timeline";

const App = () => {
    return (
        <>
        <div className="container">
            <Navbar />
            <div className="invisible">
                <Main />
                <Aboutme/>
                <Skills/>
                <Timeline/>
                <Projects/>
                <Contactme/>
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default App;