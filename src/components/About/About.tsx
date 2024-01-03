import aboutMeImg from "../../assets/images/aboutme.jpeg"
import "./About.css"

const About: React.FC = () => {
    return (
        <>
            <div className="about">
                <figure className="about-img">
                    <img src={aboutMeImg}></img>
                </figure>
                <div className="about-text">
                    <h1>👋 Hey, I'm Juan!</h1>
                    <br />
                    <p>I'm Juan José Gomez, a dynamic Computer Science graduate from the University of South Florida dedicated to creating captivating web applications that bring innovative ideas to life. My expertise spans HTML, CSS, JavaScript, React, Node, and more, allowing me to craft seamless user experiences that make a lasting impact.</p>
                    <p>🚀 My focus on AI and web development has been instrumental in shaping my journey. I'm currently exploring Data Science courses by Harvard University, continually enriching my skills to stay at the forefront of technological innovation.</p>
                    <p>💼 My experience at Eversana Intouch involved leading projects that revitalized client websites, enhancing user engagement through HTML, CSS, and JavaScript. Additionally, as a tech lead at the Google Developer Student Club, I ignited passion among students and fostered innovation through technical workshops.</p>
                    <p>🌟 I've showcased my skills in AI and web development through personal projects. Collaborating on Prometheus AITutor, a four-person team and I developed an NLP-based Personal Tutor Web Application. My responsibilities ranged from backend (Django) to frontend (React TypeScript) integration, implementing ML models for tailored user learning and testing experiences. Simultaneously, I led the development of the Zillow Clone with AI Realtor Assistant, leveraging the MERN stack to create a dynamic real estate platform. Integrating OpenAI API for a Realtor Assistant feature, employing Passport.js authentication for security, and using Google Places API for location-based services showcased my prowess in AI and web development.</p>
                    <p>🤖 These experiences, along with my stint at Microsoft where I honed leadership and communication skills through a mentorship program and contributed to an innovative AR/VR project using Microsoft HoloLens, have been pivotal in my professional growth.</p>
                    <p>🚵‍♂️ Beyond my tech pursuits, I delight in cycling along picturesque trails and immersing myself in thrilling gaming adventures. I find fulfillment in this vibrant blend of outdoor exploration and virtual quests.</p>
                    <p>👩‍👩‍👦‍👦 When I step away from the tech realm, I prioritize cherished moments with family and friends, nurturing these connections and crafting meaningful memories. My passion for aiding others and eagerness for collaboration make me an enthusiastic partner in the dynamic tech landscape. Feel free to reach out if you're seeking a dedicated collaborator. 🤝👨‍💻</p>
                </div>
                <br/>
                <div className="cta-about">
                    <a style={{textAlign:"center", fontSize:"1.3rem"}} className="lets-talk-button"  href='https://www.linkedin.com/in/jjgomezswe/' target="_blank">Lets Talk!</a>
                    <a style={{textAlign:"center", fontSize:"1.3rem"}} className="lets-talk-button"  href="https://docs.google.com/document/d/1e39WtsnwBifsmVNcytldUySPRYGdlBdfHojKvtSfboc/edit?usp=sharing"  target="_blank">Resume</a>
                </div>
            </div>
        </>
    );
}

export default About