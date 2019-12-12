import React from 'react';
import MyPhoto from "../../assets/my_photo.png";
import data from '../data';

class About extends React.Component {
    render() {
        return (
            <div className="aboutGrid">
                <div className="aboutImage">
                    <img src={MyPhoto} alt="My Photo" />
                </div>
                <div className="aboutText">
                    <p>
                        My expertise lies in  front-end design and development. 
                        My passion to make this world sophisticated with simple 
                        design and intersection of technology, has allowed me 
                        to enjoy my work and focus around the Front-end Development 
                        and design. This goal of mine was carried throughout my 
                        undergraduate and my graduate program to  intensively 
                        study this area of computer  science. Currently, I am 
                        open to job opportunities to put my skills to test in 
                        real world, and make my impact for better growth as a 
                        developer. 
                    </p>
                </div>
                <div className="aboutStatus">
                    <div className="status font-20">
                        Status:
                    </div>
                    <p>
                        Actively Seeking for Job Opportunites as Frontend / UI / Full Stack Developer. 
                    </p>
                </div>
                <Skills />
            </div>
        );
    }
}

const Skills = () => {
    return (
        <div className="skills">
            <h3 className="skillHeader"> Skills </h3>
            {
                data.skills.map((skill) => {
                    return (
                        <Skill key={skill.id} name={skill.name} progress={skill.progress} />
                    );
                })
            }
        </div>
    );
};

const Skill = (props) => {
    let w = {
        width: props.progress + '%'
    };
    return (
        <div className="skill">
            <div className="skillText">{props.name}</div>
            <div className="progressBar">
                <div className="actualProgress" style={w}></div>
            </div>
        </div>
    );
}

export default About;