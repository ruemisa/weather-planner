import { GET_LOCATION } from './types';


// Although I really don't need this to be an async action creator, I did it anyway to make it more consistent with other action creators
export const getLocation = () => {
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