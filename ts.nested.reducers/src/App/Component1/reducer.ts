import * as Component1ActionType from './actionTypes';
import {initialState as initialState3, action as action3} from './Component3/stateManager';
import {initializeInstance} from "ts-loader/dist/instances";

const initialState: {
    value: number,
    component3: any,
} = {
    value: 200,
    component3: initialState3,
}

export function Component1Reducer(state = initialState, action: any) {
    switch (action.type) {
        case Component1ActionType.COMPONENT1_ACTION: {
            return {...state, value: state.value + 1, component3: action3(state.component3)};
        }
        case Component1ActionType.COMPONENT3_ACTION: {
            return {...state, component3: action3(state.component3)};
        }
        case Component1ActionType.COMPONENT1_INIT: {
            return {
                ...state, value: action.payload.value, component3: action.payload.component3
            };
        }
        default:
            return state;
    }
}