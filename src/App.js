import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contactme from "./components/Contactme";
import Resume from "./components/Resume";

const App = () => {
    return (
        <>
        <div className="container">
            <Main />
            <Navbar />
            <Aboutme />
            <Skills />    
            <Projects />
            <Contactme />
            <Resume/>
            <Footer />
        </div>
        </>
        
    );
}

export default App;