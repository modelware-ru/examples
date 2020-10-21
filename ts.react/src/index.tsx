import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './asset/style/global.scss';

// import App from './App/App';
import App1 from './App/App1';
// import Clock from './App/Clock';
// import NameForm from './App/NameForm';
import Calculator from './App/Calculator';

const mountNode = document.getElementById('app');
// ReactDOM.render(<App1 name={'Denis'}/>, mountNode);
// ReactDOM.render(<Clock/>, mountNode);
// ReactDOM.render(<NameForm/>, mountNode);
ReactDOM.render(<Calculator/>, mountNode);
