import heroImg from "../../assets/images/hero.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Juan Gomez</h1>
                <div className="subtitle">
                    <h2>Software Engineer at Medtronic</h2>
                </div>
                <span>Dynamic and innovative Software Engineer with expertise in full-stack development and automation. Skilled in crafting seamless user experiences and driving operational efficiency through technologies like the MERN stack, DevOps practices, and database optimization. Dedicated to solving complex challenges and delivering impactful solutions!</span>
                <a className="lets-talk-button"  href='https://www.linkedin.com/in/jjgomezswe/' target="_blank">Lets Talk!</a>
            </div>
            <div style={{ backgroundImage: `url(${heroImg})` }} className="hero-img tv"></div>
        </div>
    )
}

export default Hero