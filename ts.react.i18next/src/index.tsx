import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './asset/style/global.scss';

import './i18n/i18n';

import App from './App/App';

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);