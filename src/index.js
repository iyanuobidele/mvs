// @flow 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react'
import logo from './logo.svg';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const rdom = document.getElementById('root');
if (rdom != null) {
    ReactDOM.render(<App logo={logo} />, rdom);
    registerServiceWorker();
}


