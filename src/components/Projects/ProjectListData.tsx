import { ProjectType } from "../../types/ProjectType";

//skills
// import cppLogo from "../../assets/skills/cpp.svg"
import reactLogo from "../../assets/skills/React-icon.svg"
// import htmlLogo from "../../assets/skills/html.svg"
// import cssLogo from "../../assets/skills/css.svg"
import jsLogo from "../../assets/skills/javascript.svg"
import typescriptLogo from "../../assets/skills/typescript.svg"
import nodeLogo from "../../assets/skills/nodejs.svg"
import expressLogo from "../../assets/skills/express.svg"
import mongodbLogo from "../../assets/skills/mongodb.svg"
import pythonLogo from "../../assets/skills/python-icon.svg"
// import gitLogo from "../../assets/skills/git.svg"
import swiftLogo from "../../assets/skills/swift-icon.svg"

//projects
import FacialRecognitionImg from "../../assets/projects/facial-recognition.gif";
import teachABullImg from "../../assets/projects/teachabull.gif";
import technicalAnalysisImg from "../../assets/projects/technical-analysis.gif";
import instagramImg from "../../assets/projects/instagram.gif";
import twitterImg from "../../assets/projects/twitter.gif";
import pacmanImg from "../../assets/projects/pacman.gif";


export const projectListData: ProjectType[] = [
    {
        image: teachABullImg,
        name: "Teach-A-Bull",
        description: "An advanced web application leveraging AI and NLP to provide personalized tutoring services. It adapts to individual learning styles and offers interactive problem-solving sessions using TypeScript for application logic, React for a dynamic front-end, and Django as a high-level Python web framework ensuring robust back-end operations.",
        skills: [
            {
                name: "TypeScript",
                img: typescriptLogo,
                description: "Used for application logic."
            },
            {
                name: "React",
                img: reactLogo,
                description: "Utilized for dynamic front-end."
            },
            {
                name: "Django",
                img: "",
                description: "High-level Python web framework."
            }
        ]
    },
    {
        image: pacmanImg,
        name: "Pac-Man Project",
        description: "A recreation of the classic Pac-Man game with an added twist of Reinforced Learning (Reflex Agent) AI. This project aims to demonstrate the use of Python in developing AI that learns and adapts to game mechanics, making the game more engaging and challenging.",
        skills: [
            {
                name: "Python",
                img: pythonLogo,
                description: "Utilized for game development and AI implementation."
            }
        ]
    },
    {
        image: "",
        name: "FirstLand",
        description: "A comprehensive Web App and AI Assistant designed to enhance user engagement through intuitive interfaces and automation. Utilizes the MERN stack for a full-cycle development, integrating MongoDB, Express.js, React, and Node.js for a seamless user experience from front to back end.",
        skills: [
            {
                name: "MongoDB",
                img: mongodbLogo,
                description: "NoSQL database used for data storage."
            },
            {
                name: "Express.js",
                img: expressLogo,
                description: "Web application framework for Node.js."
            },
            {
                name: "React",
                img: reactLogo,
                description: "Utilized for front-end development."
            },
            {
                name: "Node.js",
                img: nodeLogo,
                description: "JavaScript runtime for server-side development."
            }
        ]
    },
    {
        image: "",
        name: "SupremeBot",
        description: "An automated bot specialized for e-commerce and data collection through web scraping. Built with Selenium and Python, it navigates and interacts with web pages to automate tasks, collect data, or purchase items quickly, catering to both consumer and business needs.",
        skills: [
            {
                name: "Selenium",
                img: "",
                description: "Used for web automation."
            },
            {
                name: "Python",
                img: pythonLogo,
                description: "Utilized for scripting and automation."
            }
        ]
    },
    {
        image: "",
        name: "Automated Birthday Message for Clients",
        description: "A targeted solution for enhancing client engagement by automating birthday messages. Utilizes JavaScript for scripting and Twilio API for sending SMS, ensuring a personal touch in professional relationships and increasing client retention.",
        skills: [
            {
                name: "JavaScript",
                img: jsLogo,
                description: "Used for scripting and web interactions."
            },
            {
                name: "Twilio",
                img: "",
                description: "API used for sending SMS messages."
            }
        ]
    },
    {
        image: instagramImg,
        name: "Instagram Clone",
        description: "An ambitious project replicating the core functionalities of Instagram, focusing on user posts and interactions using Swift and the Back4App parse server. It aims to mimic the social media experience with custom features and a unique design.",
        skills: [
            {
                name: "Swift",
                img: swiftLogo,
                description: "Utilized for iOS app development."
            },
            {
                name: "Back4App",
                img: "",
                description: "Parse server used for backend."
            },
            {
                name: "XCode",
                img: "",
                description: "Integrated development environment for Swift."
            }
        ]
    },
    {
        image: twitterImg,
        name: "Twitter Clone",
        description: "A Twitter clone designed to provide a similar social networking experience. Utilizing Swift for iOS development and integrating with the Twitter API, this project aims to replicate functionalities and UI elements of the original platform while providing a sandbox for additional features.",
        skills: [
            {
                name: "Twitter API",
                img: "",
                description: "API used for Twitter functionalities."
            },
            {
                name: "Swift",
                img: swiftLogo,
                description: "Utilized for iOS app development."
            },
            {
                name: "XCode",
                img: "",
                description: "Integrated development environment for Swift."
            }
        ]
    },
    {
        image: technicalAnalysisImg,
        name: "Technical Analysis Application",
        description: "A robust application designed for technical analysis and data visualization in business. Utilizing C# and the .NET framework, the application focuses on analyzing files and visualizing patterns, aiding businesses in making data-driven decisions.",
        skills: [
            {
                name: "C#",
                img: "",
                description: "Utilized for application development."
            },
            {
                name: ".Net",
                img: "",
                description: ".NET framework for application development."
            }
        ]
    },
    {
        image: FacialRecognitionImg,
        name: "Facial Recognition",
        description: "Our Facial Recognition Project utilizes the Olivetti Research Laboratory (ORL) dataset, which contains a diverse collection of grayscale facial images. This dataset serves as the cornerstone of our project, enabling the development and evaluation of machine learning models for recognizing and authenticating individuals based on facial features.",
        skills: [
            {
                name: "Support Vector Machines (SVM)",
                img: "",
                description: "Machine learning algorithm used for classification."
            },
            {
                name: "K-Nearest Neighbors (KNN)",
                img: "",
                description: "Machine learning algorithm used for classification."
            },
            {
                name: "Principal Component Analysis (PCA)",
                img: "",
                description: "Dimensionality reduction technique."
            },
            {
                name: "Linear Discriminant Analysis (LDA)",
                img: "",
                description: "Dimensionality reduction and feature extraction."
            },
            {
                name: "Dimensionality Reduction and Feature Extraction",
                img: "",
                description: "Techniques for reducing data complexity and extracting meaningful features."
            },
            {
                name: "Python",
                img: pythonLogo,
                description: "Utilized for scripting and automation."
            }
        ]
    },
    {
        image: "",
        name: "Your LifeCoach",
        description: "An interactive website designed for life coaches to manage case studies, schedule appointments, and handle client traffic efficiently. Combining TypeScript, React, Node.js, and MongoDB, it offers a comprehensive solution for client management, appointment scheduling, and resource organization.",
        skills: [
            {
                name: "TypeScript",
                img: typescriptLogo,
                description: "Used for application logic."
            },
            {
                name: "React",
                img: reactLogo,
                description: "Utilized for dynamic front-end."
            },
            {
                name: "Node.js",
                img: nodeLogo,
                description: "JavaScript runtime for server-side development."
            },
            {
                name: "MongoDB",
                img: mongodbLogo,
                description: "NoSQL database used for data storage."
            }
        ]
    }
];
