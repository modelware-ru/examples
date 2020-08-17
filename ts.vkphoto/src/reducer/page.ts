import {SET_YEAR, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../action/PageActions';

const initialState: TPage = {
    year: 2018,
    photos: [],
    isFetching: false,
};

export function pageReducer(state = initialState, action: IAction): TPage {
    switch (action.type) {
        case SET_YEAR:
            return {...state, year: action.payload};
        case GET_PHOTOS_REQUEST:
            return {...state, year: action.payload, isFetching: true}
        case GET_PHOTOS_SUCCESS:
            return {...state, photos: action.payload, isFetching: false}
        default:
            return state;
    }
}