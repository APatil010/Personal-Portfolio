import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './js/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root'));
