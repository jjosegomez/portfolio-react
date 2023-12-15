import heroImg from "../../assets/hero.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Juan Gomez</h1>
                <div className="subtitle">
                <h2>Computer Science Graduate</h2>
                <h4>University of South Florida</h4>
                </div>
                <span>"Innovative thinker and passionate coder ready to tackle the tech world. Specializing in [specific area, e.g., Artificial Intelligence, Web Development]. Dedicated to creating meaningful solutions through technology."</span>
                <button>Lets Talk!</button>
            </div>
            <div style={{backgroundImage:`url(${heroImg})`}} className="hero-img tv"></div>
        </div>
    )
}

export default Hero