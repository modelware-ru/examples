export const ping = (store: any) => (next: any) => (action: any) => {
    console.log(
        `Тип события: ${action.type}, дополнительные данные события: ${
            action.payload
        }`
    );
    return next(action);
}