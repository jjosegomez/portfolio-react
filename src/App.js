import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";
import Contactme from "./components/Contactme";
import Popup from "./components/InProgressPopup";
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {
    const [projects, setProjects] = useState(null)
    
    useEffect (() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:5000/api/projects")
                setProjects(response.data)
                console.log(`${response} \nThis is the data the API os returning`)
            }catch(error){
                console.error(`Error while getting projects ${error}`)
            }
        }
        fetchData()
        
    }, [])
    return (
        <>
        {/* <Popup/> */}
        <Navbar />
        <div className="app">
            <Main />
            <Aboutme/>
            <Skills/>
            <Projects data={projects}/>
            <Contactme/>
            <Footer/>
        </div>
        </>
    );
}

export default App;