import { combineReducers } from 'redux';

export default combineReducers({
    replaceMe: () => 'replace me'
});

// NOTE: Add a dummy reducer that returns a dummy value to trick redux into thinking that we have a reducer for the store. REMEMBER to replace later