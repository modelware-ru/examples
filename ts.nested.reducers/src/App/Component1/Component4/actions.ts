import * as Component4ActionType from './actionTypes';

export const Component4Action = () => {
    return {
        type: Component4ActionType.COMPONENT4_ACTION,
    };
};

export const Component4Init = (value: number) => {
    return {
        type: Component4ActionType.COMPONENT4_INIT,
        payload: value,
    };
};