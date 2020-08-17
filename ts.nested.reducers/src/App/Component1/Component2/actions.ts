import * as Component2ActionType from './actionTypes';

export const Component2Action = () => {
    return {
        type: Component2ActionType.COMPONENT2_ACTION,
    };
};

export const Component2Init = (value: number) => {
    return {
        type: Component2ActionType.COMPONENT2_INIT,
        payload: value,
    };
};