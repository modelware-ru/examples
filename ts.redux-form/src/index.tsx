import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './asset/style/global.scss';

import store from './store';

import App from './App/App';

import * as AppActionType from './App/actionTypes';

store.dispatch({
    type: AppActionType.APP_INIT,
    payload: {value: 1000},
});

const mountNode = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mountNode);