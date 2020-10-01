import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './asset/style/global.scss';

import App from './App/App';
import AuthExample from "./Example/AuthExample";

const mountNode = document.getElementById('app');
// ReactDOM.render(<App/>, mountNode);
ReactDOM.render(<AuthExample/>, mountNode);