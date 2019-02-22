import { combineReducers } from 'redux';
import geolocationReducer from './geolocationReducer';

// All separate reducers are combined here rather than writing all logic of reducers in one file
export default combineReducers({
    geolocation: geolocationReducer
});
