import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="NavigationBar">
                <div className="Navigation">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/faqs">FAQ's</Link>
                </div>
                <hr />
            </div>
        );
    }
}

export default NavigationBar;