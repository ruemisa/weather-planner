import { GET_LOCATION } from './types';

// Although I really don't need this to be an async action creator, I did it anyway to make it more consistent with other action creators
export const getUserLocation = () => {
    // NOTE: Refactor code later on and place in separate helper files

    return async dispatch => {
        // Using Browser Geolocation API to get user's device current location
        const location = await window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
            },
            error => console.log(error)
        );
        
        dispatch({ type: GET_LOCATION, payload: location })
        
    };

    
};

// NOTES: dispatch -> change data, getState -> read/access data
