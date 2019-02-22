import axios from 'axios';

import { GET_LOCATION, GET_WEATHER } from './types';
import { DARK_SKY_API, DARK_SKY_URL, PROXY } from '../utils/apis/darksky';

// Although I really don't need this to be an async action creator, I did it anyway to make it more consistent with other action creators
export const getUserLocation = () => {
    // NOTE: Refactor code later on and place in separate helper files

    return async dispatch => {
        // Using Browser Geolocation API to get user's device current location
        await navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({ 
                    type: GET_LOCATION, 
                    payload: position.coords
                });
            },
            error => {
                // DO SOME ERROR HANDLING HERE
                console.log(error)
            }
        );
        
        
    };
};

// Action Creator for Getting Weather Data from Darksky
export const getWeatherForecast = (lat, lon) => {

    return async dispatch => {
        // ${lat},${lon}
        const response = await axios.get(`${PROXY}/${DARK_SKY_URL}/${DARK_SKY_API}/40.684984799999995,-73.9418488`);
        console.log(response.data);

        dispatch({
            type: GET_WEATHER,
            payload: response.data
        });
    };
};

// NOTES: dispatch -> change data, getState -> read/access data
