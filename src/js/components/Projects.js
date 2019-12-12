import React, {Fragment} from 'react';
import data from '../data';

class Projects extends React.Component {

    render() {
        return (
            <Fragment>
            <div className="projects">
                {
                    data.projects.map((proj) => {
                        return (
                            <ProjectCard 
                                key={proj.id} 
                                source={proj.src} 
                                title={proj.title}
                                subtitle={proj.subtitle} 
                                description={proj.description} />
                        );
                    })
                }
            </div>
            </Fragment>
        );
    }
}

const ProjectCard = (props) => {
    return (
        <div className="projectCard">
            <img src={props.source} alt="projectImage" />
            <div>
            <div className="title font-28"> { props.title } </div>
            <div className="subTitle font-18"> {props.subtitle} </div>
            <div className="description font-16 mono-light"> { props.description } </div>
            </div>
        </div>
    );
};

export default Projects;