import * as Component4ActionType from './actionTypes';

const initialState: {
    value: number,
} = {
    value: 100,
}

export function Component4Reducer(state = initialState, action: any) {
    switch (action.type) {
        case Component4ActionType.COMPONENT4_ACTION: {
            return {value: state.value + 1};
        }
        case Component4ActionType.COMPONENT4_INIT: {
            return {value: action.payload.value};
        }
        default:
            return state;
    }
}