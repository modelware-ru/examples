import * as AppActionType from './actionTypes';

export const AppAction = () => {
    return {
        type: AppActionType.APP_ACTION,
    };
};

export const AppInit = (value: number) => {
    return {
        type: AppActionType.APP_INIT,
        payload: value,
    };
};