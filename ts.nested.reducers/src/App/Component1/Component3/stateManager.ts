export const initialState: {
    value: number,
} = {
    value: 100,
}

export function action(state: any) {
    return {...state, value: state.value + 1};
}
