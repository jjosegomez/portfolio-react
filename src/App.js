import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Hero/Hero";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/Skills/Skills";
import Project from "./components/ProjectList/ProjectList";
import Footer from "./components/Footer/Footer";
import Contactme from "./components/Contactme/Contactme";
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {
    const [projects, setProjects] = useState([])
    
    useEffect (() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:5000/api/")
                setProjects(response.data)
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
            <Project data={projects}/>
            <Contactme/>
            <Footer/>
        </div>
        </>
    );
}

export default App;