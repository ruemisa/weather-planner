import { combineReducers } from 'redux';
import geolocationReducer from './geolocationReducer';
import weatherReducer from './weatherReducer';

// All separate reducers are combined here rather than writing all logic of reducers in one file
export default combineReducers({
    geolocation: geolocationReducer,
    weather: weatherReducer
});
