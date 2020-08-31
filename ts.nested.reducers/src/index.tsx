import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './asset/style/global.scss';

import store from './store';

import App from './App/App';

import * as AppActionType from './App/actionTypes';
import * as Component1ActionType from './App/Component1/actionTypes';
import * as Component2ActionType from './App/Component1/Component2/actionTypes';
import * as Component4ActionType from './App/Component1/Component4/actionTypes';

store.dispatch({
    type: AppActionType.APP_INIT,
    payload: {value: 1000},
});

store.dispatch({
    type: Component1ActionType.COMPONENT1_INIT,
    payload: {value: 2000, component3: {value: 4000}},
});

store.dispatch({
    type: Component2ActionType.COMPONENT2_INIT,
    payload: {value: 3000},
});

store.dispatch({
    type: Component4ActionType.COMPONENT4_INIT,
    payload: {value: 5000},
});

const mountNode = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mountNode);