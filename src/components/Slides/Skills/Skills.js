import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

import reactIcon from "../../../assets/skills/React-icon.svg"
import expressIcon from "../../../assets/skills/expressjs-icon.svg"
import mongoIcon from "../../../assets/skills/mongodb-icon.svg"
import nodeIcon from "../../../assets/skills/nodejs-icon.svg"
import htmlIcon from "../../../assets/skills/html-5-svgrepo-com.svg"
import cssIcon from "../../../assets/skills/css-3-logo-svgrepo-com.svg"
import jsIcon from "../../../assets/skills/Unofficial_JavaScript_logo_2.svg"
import pythonIcon from "../../../assets/skills/python-icon.svg"
import cppIcon from "../../../assets/skills/ISO_C++_Logo.svg"
import swiftIcon from "../../../assets/skills/swift-icon.svg"
import gitLogo from "../../../assets/skills/git-icon-logo-svgrepo-com.svg"
import postgresIcon from "../../../assets/skills/postgresql_logo.svg"


import "./Skills.css"

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const style = {
    textAlign: "center",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    bgcolor: 'rgba(30, 30, 30)',
    color: "white",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function SpringModal({ skill, img, description }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={{ width: "150px", margin: "1rem" }} onClick={handleOpen}>
                <img src={img} alt='skill-img'></img>
            </Button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            {skill}
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}


const Skills = () => {

    //TODO: array loop using array.map
    //FIXME: not displaying any images, images being past as objects.

    const skillsArray = [
        {
            skill: "React",
            img: reactIcon,
            description: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently. React is widely used for developing single-page applications and interactive user interfaces.",
        },
        {
            skill: "Express",
            img: expressIcon,
            description: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used for building APIs, handling HTTP requests, and serving dynamic content. Express.js simplifies the process of building scalable and maintainable web applications.",
        },
        {
            skill: "Node",
            img: nodeIcon,
            description: "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side. It is designed to build scalable and high-performance network applications. Node.js is commonly used for building server-side web applications, APIs, and real-time applications.",
        },
        {
            skill: "MongoDB",
            img: mongoIcon,
            description: "MongoDB is a popular NoSQL database management system that stores data in flexible, JSON-like documents. It is known for its flexibility, scalability, and ease of use. MongoDB is widely used for building modern, data-driven applications and is particularly suited for handling large volumes of unstructured or semi-structured data.",
        },
        {
            skill: "HTML",
            img: htmlIcon,
            description: "HTML (HyperText Markup Language) is the standard markup language used for creating web pages and web applications. It defines the structure and layout of content on the web. HTML elements are represented by tags, which define headings, paragraphs, links, images, and other elements displayed in a web browser.",
        },
        {
            skill: "CSS",
            img: cssIcon,
            description: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML. It enables web developers to control the layout, colors, fonts, and spacing of web pages. CSS allows the separation of content from presentation, enhancing the visual appeal and user experience of websites.",
        },
        {
            skill: "JavaScript",
            img: jsIcon,
            description: "JavaScript is a versatile programming language commonly used for web development. It enables interactive and dynamic features on websites, making web pages responsive and engaging. JavaScript can be executed in web browsers and server-side environments, making it a fundamental technology for building modern web applications.",
        },
        {
            skill: "C/C++",
            img: cppIcon,
            description: "C and C++ are powerful programming languages known for their high performance and versatility. They are widely used for system programming, game development, embedded systems, and software development that requires optimal performance. C++ is an extension of the C language and includes object-oriented programming features.",
        },
        {
            skill: "Python",
            img: pythonIcon,
            description: "Python is a versatile, high-level programming language known for its simplicity and readability. It is widely used for web development, scientific computing, data analysis, artificial intelligence, and automation. Python's extensive libraries and frameworks make it a popular choice for various applications and rapid development.",
        },
        {
            skill: "Swift",
            img: swiftIcon,
            description: "Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed to be fast, safe, and expressive, making it easier for developers to create high-quality, reliable applications for Apple devices. Swift incorporates modern language features and syntax, enhancing developer productivity.",
        },
        {
            skill: "Postgres",
            img: postgresIcon,
            description: "PostgreSQL, often referred to as Postgres, is a powerful open-source relational database management system (RDBMS). It provides advanced features such as support for JSON, full-text search, and geospatial data. Postgres is known for its extensibility, standards compliance, and strong community support. It is widely used for various applications that require reliable and scalable database solutions.",
        },
        {
            skill: "Git",
            img: gitLogo,
            description: "Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate on projects efficiently by managing branches, merging code changes, and maintaining a detailed history of revisions. Git is widely adopted in the software development industry for its speed, flexibility, and robust branching capabilities.",
        }        
    ]
    return (
        <div className="slider-content-container">
            <div className="centered">
                <h1>Skills</h1>
                <div className='skills-container'>
                    {skillsArray.map((item, index) => (
                        <SpringModal key={index} img={item.img} skill={item.skill} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills