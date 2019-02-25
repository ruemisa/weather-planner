import { GET_WEATHER } from '../actions/types';

const initialState = {};


export default (state = initialState, action) => {
    // GET WEATHER based on User Location
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weather: {
                    ...state.weather,
                    currentTemp: action.payload.currently.temperature
                }
            }
        
        default:
            return state;
    }

};

// NOTE: Maybe merge geolocation reducer and this reducer into one. 

