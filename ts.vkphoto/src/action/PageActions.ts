export const SET_YEAR = 'SET_YEAR';

export function setYear(year: number): ISetYearAction {
    return {
        type: SET_YEAR,
        payload: year,
    };
}

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

export function getPhotos(year: number) {
    return (dispatch:any) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year,
        });

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1, 2, 3, 4, 5],
            })
        }, 1000);
    };
}