import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="homeGrid">
                <div className="headerText">
                    <p className="mono-light font-40">Hello...</p>
                    <p className="mono-light font-28">I am <strong>Aarsh Patil.</strong></p>
                    <p className="mono-light font-16">Full Stack Software Developer</p>
                </div>
                <div className="quoteText font-20 mono-light">
                    <blockquote>
                        <strong className="font-28">"</strong> To create something that is genuinely new, you have to start again. 
                        And i think with great intent, you disconnect from the past. <strong className="font-28">"</strong>
                        <br />
                        —Jony Ive
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default Home;