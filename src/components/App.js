import React from 'react';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import './App.css';

const App = () => {
    return(
        <div>
            <h1>Weather Planner</h1>
            <CurrentWeather />
        </div>
    )
}

export default App;