import bmcremedy from '../assets/bmc-remedy.png';
import tradetunnel from '../assets/tradetunnel.jpg';
import mcug from '../assets/mcug.png';
import hci from '../assets/hci.png'
import youtube from '../assets/youtube.jpg';
import jnachos from '../assets/jnachos.png';
import happeningaround from '../assets/happeningaround.png';
import personalwebsite from '../assets/personalwebsite.png';

const data = {
    skills: [
        {
            id: 1,
            name: "Java",
            progress: 80
        },
        {
            id: 2,
            name: "JavaScript",
            progress: 75
        },
        {
            id: 3,
            name: "HTML",
            progress: 85
        },
        {
            id: 4,
            name: "CSS/SASS",
            progress: 75
        },
        {
            id: 5,
            name: "ReactJS",
            progress: 60
        },
        {
            id: 6,
            name: "SQL",
            progress: 55
        },
        {
            id: 7,
            name: "REST API's",
            progress: 60
        },
        {
            id: 8,
            name: "Webpack/Gulp",
            progress: 70
        },
        {
            id: 9,
            name: "Git",
            progress: 85
        },
        {
            id: 10,
            name: "Prototyping",
            progress: 60
        },
        {
            id: 11,
            name: "UI Design (Sketch)",
            progress: 75
        },
    ],
    faqs: [
        {
            id: 1,
            question: "Why the field of Computer Science & Engineering?",
            answer: "My vision for this field has been to view computer science as a service industry, where all the products and technologies provide services to consumer directly or indirectly. It is a very important part of the history for humans, as this allow achieving feats that could never be possible. Understanding this as a part, I wanted to showcase my contribution to the industry in ways that are new or optimizations for the old technology, which helped me embark in this beautiful journey of 0's & 1's."
        },
        {
            id: 2,
            question: "What do you love about technology?",
            answer: "The technology has been always fascinating for me in ways, how it could connect different missions and values to different technologies. Everything built with these ideas has served purpose, which has been used to enhance someone's life. \" Not everything is for everyone, but there is always something for someone.\" "
        },
    ],
    projects: [
        {
            id: 1,
            src: bmcremedy,
            title: "BMC Remedy",
            subtitle: "(Software Developer)",
            description: "Designed REST API’s using Web services library in Java, to communicate with relational databases. Enhanced existing business logic modules, by revamping existing codebase enabling clients to customize their business cloud-based applications with newer features. Validation of API endpoints with various data, using Postman tool, to provide lower tolerances for failures. Creation of reusable components for business logic workflow's for IT Service management software."
        },
        {
            id: 2,
            src: tradetunnel,
            title: "Trade Tunnel",
            subtitle: "(Front End Developer)",
            description: "An e-commerce based web application built on stack, JavaScript + Spring + MySQL. MicroServices based backend architecture abiding the Service Oriented Architecture. REST Architecture for JavaScript and API's, to accomodate all types of other clients. Use of Bootstrap and JQuery for Responsive Design, and cookies for authentication."
        },
        {
            id: 3,
            src: personalwebsite,
            title: "Personal Website",
            subtitle: "(React Developer)",
            description: "Developed a personal portfolio using React + SASS + Webpack. Used Modular component design for better code debugging. FontAwesome Library for the icons used on the web application. Navigation designed using the React-router package. Development & Production Builds handled by automation of Webpack configurations."
        },
        {
            id: 4,
            src: mcug,
            title: "MCUG Website",
            subtitle: "(Web Developer)",
            description: "Developed informative website for workshops & events by implementing HTML, CSS & Vanilla JavaScript, for helping students to know more information and register for events. Programmed to be more responsive, using Bootstrap library to work across various devices of different screen sizes. Performed design to development phase style, by creating prototypes in Sketch and then full development of website."
        },
        {
            id: 5,
            src: hci,
            title: "HCI Research",
            subtitle: "(Researcher & Infrastructure)",
            description: "Established understanding of haptic feedback through real objects and virtual environments. Monitored real-time graphs of medical vitals of subject’s body, for precise data points during analysis. Formulated NodeJS server and python sockets between medical devices and Unity platform, using client-server mechanism."
        },
        {
            id: 6,
            src: youtube,
            title: "Youtube Data Mining",
            subtitle: "(Data Analyst)",
            description: "Qualitative, Quantitative and Sentimental Analysis on the comments posted by the users across categories(Tech, Comedy, TV Shows, News)."
        },
        {
            id: 7,
            src: jnachos,
            title: "JNachos",
            subtitle: "(Core Developer)",
            description: "Implemented various operating system level structures & algorithms for better efficiency. Formulated techniques: FIFO Scheduling policy, Multithreading, Log Structured File System, System Calls."
        },
        {
            id: 7,
            src: happeningaround,
            title: "Happening Around",
            subtitle: "(iOS Developer)",
            description: "Implemented Swift Design patterns like MVC Architecture, to improve organizational structure and easier code access. Simplified data stores on Firebase, by creating efficient data relations, to reduce redundancy and network access times. Used package manager Cocoapods, using CLI and XCode, for handling of all libraries and dependencies for development."
        },
    ]
};

export default data;