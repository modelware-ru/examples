import {combineReducers} from 'redux';

import {AppReducer} from './App/reducer';
import {Component1Reducer} from './App/Component1/reducer';
import {Component2Reducer} from './App/Component1/Component2/reducer';
import {Component4Reducer} from './App/Component1/Component4/reducer';

export const rootReducer = combineReducers({
    appReducer: AppReducer,
    component1Reducer: combineReducers(
        {
            component1Reducer: Component1Reducer,
            component4Reducer: Component4Reducer,
        }),
    // component1Reducer: Component1Reducer,
    component2Reducer: Component2Reducer,
});

