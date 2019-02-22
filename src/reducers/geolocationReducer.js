import { GET_LOCATION } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    // Checking each action.type that comes into the reducer and return the correct payload
    switch (action.type) {
        // Getting User Current Location
        case GET_LOCATION:
            return {
                ...state,
                location: {
                    lat: action.payload.latitude,
                    lon: action.payload.longitude
                }
            }

        default:
            return state;
    }
};