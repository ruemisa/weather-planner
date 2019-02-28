import axios from 'axios';

import { GET_WEATHER } from './types';
import { DARK_SKY_API, DARK_SKY_URL, PROXY } from '../utils/apis/darksky';

// Action Creator for Getting Weather Data from Darksky
export const getWeather = (lat, lon) => {

    return async dispatch => {
        // 40.684984799999995,-73.9418488
        
        const response = await axios.get(`${PROXY}/${DARK_SKY_URL}/${DARK_SKY_API}/${lat},${lon}`);
        console.log(response.data);

        dispatch({
            type: GET_WEATHER,
            payload: response.data
        });
    };
};

// NOTES: dispatch -> change data, getState -> read/access data