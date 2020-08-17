import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './store/configureStore';

import './asset/style/global.css';

import App from './App/App';



const mountNode = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mountNode);