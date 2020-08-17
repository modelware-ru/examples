import * as Component1ActionType from './actionTypes';

export const Component1Action = () => {
    return {
        type: Component1ActionType.COMPONENT1_ACTION,
    };
};

export const Component1Init = (value: number) => {
    return {
        type: Component1ActionType.COMPONENT1_INIT,
        payload: value,
    };
};

export const Component3Action = () => {
    return {
        type: Component1ActionType.COMPONENT3_ACTION,
    };
};