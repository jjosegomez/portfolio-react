import aboutMeImg from "../../assets/images/aboutme.jpeg"
import "./About.css"

const About: React.FC = () => {
    return (
        <>
            <div className="about">
                <figure className="about-img" style={{backgroundImage:`url(${aboutMeImg})`}}></figure>
                <div className="about-text">
                    <h1>👋 Hey, I'm Juan!</h1>
                    <br/>
                    <p>I'm Juan José Gomez, a dynamic software engineer dedicated to creating captivating web applications that bring innovative ideas to life. My expertise spans HTML, CSS, JavaScript, React, Node, and more, allowing me to craft seamless user experiences that make a lasting impact.</p>
                    <p>🚀 My focus on AI and web development has been instrumental in shaping my journey. I'm currently exploring Data Science courses by Harvard University, continually enriching my skills to stay at the forefront of technological innovation.</p>
                    <p>💼 My experience at Eversana Intouch involved leading projects that revitalized client websites, enhancing user engagement through HTML, CSS, and JavaScript. Additionally, as a tech lead at the Google Developer Student Club, I ignited passion among students and fostered innovation through technical workshops.</p>
                    <p>🌟 I've showcased my skills in AI and web development through personal projects. Collaborating on Prometheus AITutor, a four-person team and I developed an NLP-based Personal Tutor Web Application. My responsibilities ranged from backend (Django) to frontend (React TypeScript) integration, implementing ML models for tailored user learning and testing experiences. Simultaneously, I led the development of the Zillow Clone with AI Realtor Assistant, leveraging the MERN stack to create a dynamic real estate platform. Integrating OpenAI API for a Realtor Assistant feature, employing Passport.js authentication for security, and using Google Places API for location-based services showcased my prowess in AI and web development.</p>
                    <p>🤖 These experiences, along with my stint at Microsoft where I honed leadership and communication skills through a mentorship program and contributed to an innovative AR/VR project using Microsoft HoloLens, have been pivotal in my professional growth.</p>
                    <p>🎓 As a Computer Science graduate enthusiast from the University of South Florida, I maintain a robust GPA of 3.4. My coursework in operating systems, AI/ML, and more continues to fuel my passion for exploring new technological frontiers.</p>
                    <p>🌴 Balancing my tech endeavors, I enjoy soaking up Tampa's vibrant sun, finding harmony between coding and moments of relaxation.</p>
                    <p>🔍 Let's collaborate and continue to create tech magic together! Reach out, and let's contribute significantly to the ever-evolving tech landscape. 🌐🚀</p>
                </div>
            </div>
        </>
    );
}

export default About