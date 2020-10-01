import {combineReducers} from 'redux';

import {AppReducer} from './App/reducer';

import {reducer as formReducer} from 'redux-form';
import account from './App/Example/account';

export const rootReducer = combineReducers({
    appReducer: AppReducer,
    form: formReducer,
    account,
});

