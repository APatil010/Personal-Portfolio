import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Faqs from './Faqs';

class MainContent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/faqs' component={Faqs}/>
            </Switch>
        );
    }
}

export default MainContent;