import * as AppActionType from './actionTypes';

const initialState: {
    value: number,
} = {
    value: 0,
}

export function AppReducer(state = initialState, action: any) {
    switch (action.type) {
        case AppActionType.APP_ACTION: {
            return {value: state.value + 1};
        }
        case AppActionType.APP_INIT: {
            return {value: action.payload.value};
        }
        default:
            return state;
    }
}