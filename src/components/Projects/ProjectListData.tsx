//data to be rendered in project list section

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
import supremebotImg from "../../assets/projects/supremebot.png"
import FacialRecognitionImg from "../../assets/projects/facial-recognition.gif";
import teachABullImg from "../../assets/projects/teachabull.gif";
import technicalAnalysisImg from "../../assets/projects/technical-analysis.gif";
import instagramImg from "../../assets/projects/instagram.gif";
import twitterImg from "../../assets/projects/twitter.gif";
import pacmanImg from "../../assets/projects/pacman.gif";
import firstlandImg from "../../assets/projects/firstland.png"

import comingsoon from "../../assets/projects/coming-soon.svg"


export const projectListData: ProjectType[] = [
    {
        image: teachABullImg,
        name: "Teach-A-Bull",
        description: "An advanced web application leveraging AI and NLP to provide personalized tutoring services. It adapts to individual learning styles and offers interactive problem-solving sessions using TypeScript for application logic, React for a dynamic front-end, and Django as a high-level Python web framework ensuring robust back-end operations.",
        skills: [
            {
                name: "TypeScript",
                img: typescriptLogo,
                description: "Utilized in Teach-A-Bull for implementing application logic. TypeScript's strong typing system ensures robustness and scalability in the codebase."
            },
            {
                name: "React",
                img: reactLogo,
                description: "Used extensively in Teach-A-Bull for building dynamic front-end interfaces. React's declarative approach simplifies UI development, enhancing user experience."
            },
            {
                name: "Django",
                img: "",
                description: "Employed as the primary framework in Teach-A-Bull for constructing robust back-end functionalities. Django's rapid development and built-in security features ensure a stable server-side environment."
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
                description: "Utilized for game development and AI implementation in Pac-Man Project. Python's simplicity and extensive libraries facilitate AI learning and game mechanics."
            }
        ]        
    },
    {
        image: firstlandImg,
        name: "FirstLand",
        description: "A comprehensive Web App and AI Assistant designed to enhance user engagement through intuitive interfaces and automation. Utilizes the MERN stack for a full-cycle development, integrating MongoDB, Express.js, React, and Node.js for a seamless user experience from front to back end.",
        skills: [
            {
                name: "MongoDB",
                img: mongodbLogo,
                description: "Used in FirstLand as a NoSQL database for efficient and flexible data storage, accommodating diverse user-related information."
            },
            {
                name: "Express.js",
                img: expressLogo,
                description: "Integrated as a web application framework for Node.js in FirstLand, simplifying routing and middleware creation."
            },
            {
                name: "React",
                img: reactLogo,
                description: "Utilized in FirstLand for building engaging front-end interfaces through its component-based structure and efficient rendering."
            },
            {
                name: "Node.js",
                img: nodeLogo,
                description: "Used as a JavaScript runtime in FirstLand, enabling server-side development with a unified language (JavaScript)."
            }
        ]
        
    },
    {
        image: supremebotImg,
        name: "SupremeBot",
        description: "An automated bot specialized for e-commerce and data collection through web scraping. Built with Selenium and Python, it navigates and interacts with web pages to automate tasks, collect data, or purchase items quickly, catering to both consumer and business needs.",
        skills: [
            {
                name: "Selenium",
                img: "",
                description: "Utilized for web automation in SupremeBot, facilitating navigation and interaction with web elements for tasks like web scraping and automated actions."
            },
            {
                name: "Python",
                img: pythonLogo,
                description: "Chosen for scripting and automation in SupremeBot due to its simplicity and extensive libraries, complementing Selenium's functionalities."
            }
        ]
    },
    {
        image: comingsoon,
        name: "Automated Birthday Message for Clients",
        description: "A targeted solution for enhancing client engagement by automating birthday messages. Utilizes JavaScript for scripting and Twilio API for sending SMS, ensuring a personal touch in professional relationships and increasing client retention.",
        skills: [
            {
                name: "JavaScript",
                img: jsLogo,
                description: "Utilized for scripting and web interactions in Automated Birthday Message for Clients, offering flexibility for web element interactions."
            },
            {
                name: "Twilio",
                img: "",
                description: "Integrated Twilio API for sending personalized SMS messages, enhancing client engagement and professional relationships."
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
                description: "Utilized for iOS app development in Instagram Clone, leveraging its power and native capabilities for a seamless mobile experience."
            },
            {
                name: "Back4App",
                img: "",
                description: "Integrated Back4App parse server as the backend for Instagram Clone, providing scalable cloud hosting and real-time database capabilities."
            },
            {
                name: "XCode",
                img: "",
                description: "Used as the integrated development environment (IDE) for Swift in Instagram Clone, facilitating app development."
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
                description: "Integrated Twitter API for replicating functionalities and UI elements of the original Twitter platform, providing additional sandbox for features in Twitter Clone."
            },
            {
                name: "Swift",
                img: swiftLogo,
                description: "Utilized for iOS app development in Twitter Clone, ensuring a native and efficient user experience."
            },
            {
                name: "XCode",
                img: "",
                description: "Used as the integrated development environment (IDE) for Swift in Twitter Clone, facilitating app development."
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
                description: "Chosen for application development in Technical Analysis Application, leveraging its robust framework and extensive libraries."
            },
            {
                name: ".Net",
                img: "",
                description: "Utilized .NET framework in Technical Analysis Application, providing tools for efficient file analysis and data visualization."
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
                description: "Employed SVM as a machine learning algorithm in Facial Recognition for classification based on facial features."
            },
            {
                name: "K-Nearest Neighbors (KNN)",
                img: "",
                description: "Utilized KNN as a machine learning algorithm in Facial Recognition for classification based on proximity in feature space."
            },
            {
                name: "Principal Component Analysis (PCA)",
                img: "",
                description: "Applied PCA as a dimensionality reduction technique in Facial Recognition for reducing data complexity and extracting meaningful facial features."
            },
            {
                name: "Linear Discriminant Analysis (LDA)",
                img: "",
                description: "Utilized LDA in Facial Recognition for dimensionality reduction and feature extraction, enhancing facial recognition accuracy."
            },
            {
                name: "Dimensionality Reduction and Feature Extraction",
                img: "",
                description: "Employed techniques for reducing data complexity and extracting meaningful features, crucial for accurate facial recognition."
            },
            {
                name: "Python",
                img: pythonLogo,
                description: "Used for scripting and automation in Facial Recognition, alongside machine learning libraries essential for model development and evaluation."
            }
        ]        
    },
    {
        image: comingsoon,
        name: "Your LifeCoach",
        description: "An interactive website designed for life coaches to manage case studies, schedule appointments, and handle client traffic efficiently. Combining TypeScript, React, Node.js, and MongoDB, it offers a comprehensive solution for client management, appointment scheduling, and resource organization.",
        skills: [
            {
                name: "TypeScript",
                img: typescriptLogo,
                description: "Utilized in Your LifeCoach for implementing application logic. TypeScript ensures code robustness and scalability."
            },
            {
                name: "React",
                img: reactLogo,
                description: "Used extensively in Your LifeCoach for building dynamic front-end interfaces. React's declarative approach simplifies UI development."
            },
            {
                name: "Node.js",
                img: nodeLogo,
                description: "Used as the JavaScript runtime in Your LifeCoach for server-side development, ensuring a unified language environment."
            },
            {
                name: "MongoDB",
                img: mongodbLogo,
                description: "Integrated MongoDB as a NoSQL database in Your LifeCoach, providing efficient data storage for client management and resource organization."
            }
        ]        
    }
];
