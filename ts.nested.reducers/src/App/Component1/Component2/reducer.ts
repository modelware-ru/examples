import * as Component2ActionType from './actionTypes';

const initialState: {
    value: number,
} = {
    value: 100,
}

export function Component2Reducer(state = initialState, action: any) {
    switch (action.type) {
        case Component2ActionType.COMPONENT2_ACTION: {
            return {value: state.value + 1};
        }
        case Component2ActionType.COMPONENT2_INIT: {
            return {value: action.payload.value};
        }
        default:
            return state;
    }
}