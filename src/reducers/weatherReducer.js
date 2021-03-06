import { GET_WEATHER } from '../actions/types';
import { updateObject } from '../utils/reducerUtils';

const initialState = {};



export default (state = initialState, action) => {
    // GET WEATHER based on User Location
    switch (action.type) {
        case GET_WEATHER:
            return updateObject(state, {
                weather: {
                    ...state.weather,
                    // TODO: Refactor this outside of this function
                    currentTemp: action.payload.currently.temperature,
                    summary: action.payload.currently.summary
                }
            });
        
        default:
            return state;
    }

};

// NOTE: Maybe merge geolocation reducer and this reducer into one. 

