import * as actionTypes from './actionTypes'

let initialState = {
  weather: []
};

const weather = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_WEATHER:
            return{
                ...state,
                weather:[
                    ...state.weather,
                    action.payload.data,
                ]
            };
        default:
            return state;
    }
};

export default weather;