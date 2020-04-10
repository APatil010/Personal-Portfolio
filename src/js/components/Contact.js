import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faLinkedin, faFacebook, faTwitter, faInstagram, faGithub, faBitbucket, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends React.Component {
    render() {
        return (
            <div className="contactGrid">
                <div className="message">
                    <h2><strong>Want to say Hello?</strong></h2>
                    <p>Do you have any job opportunity as software developer or project idea to work on, or just talk about something interesting in tech, write me an email.</p>
                </div>

                <div className="gmail">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    <p><strong><a href="mailto:patilaarsh@gmail.com" target="_blank">patilaarsh@gmail.com</a></strong></p>
                </div>

                <div className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    <p><strong><a href="https://linkedin.com/in/aarshpatil" target="_blank">https://linkedin.com/in/aarshpatil</a></strong></p>
                </div>

                <div className="social-section">
                    <h2> I am also Social...</h2>
                    <div className="social-icons">
                    <a href="https://facebook.com/aarsh.patil" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                    <a href="https://twitter.com/apatil010" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>
                    <a href="https://instagram.com/the.hearty.vegan" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <a href="https://codepen.io/AarshPatil" target="_blank">
                        <FontAwesomeIcon icon={faCodepen} size="3x" />
                    </a>
                    <a href="https://bitbucket.org/Ashter31/" target="_blank">
                        <FontAwesomeIcon icon={faBitbucket} size="3x" />
                    </a>
                    <a href="https://github.com/apatil010" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a href="https://medium.com/techie-js" target="_blank">
                        <FontAwesomeIcon icon={faMedium} size="3x" />
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;