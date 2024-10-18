import heroImg from "../../assets/images/hero.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Juan Gomez</h1>
                <div className="subtitle">
                    <h2>Software Engineer at Medtronic</h2>
                    <h4>University of South Florida</h4>
                </div>
                <span>Versatile thinker and passionate coder ready to tackle complex challenges. Specializing in full-stack development. Dedicated to creating impactful solutions through technology and always learning!</span>
                <a className="lets-talk-button"  href='https://www.linkedin.com/in/jjgomezswe/' target="_blank">Lets Talk!</a>
            </div>
            <div style={{ backgroundImage: `url(${heroImg})` }} className="hero-img tv"></div>
        </div>
    )
}

export default Hero