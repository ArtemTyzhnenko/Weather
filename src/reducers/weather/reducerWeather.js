import * as actionTypes from './actionTypes'

let initialState = {
    data: [],
    didInvalidate : false,
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEATHER:
            return {
                ...state,
                data: [
                    action.payload.data,
                    ...state.data,
                ],
                didInvalidate : false,
            };
        case actionTypes.FETCH_WEATHER_FAIL:
            return {
                ...state,
                didInvalidate : true,
            };
        default:
            return state;
    }
};

export default weather;