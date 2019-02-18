import React, { Component } from 'react';

import './App.css';

class App extends Component {
    state = {
        location: {
            lat: null,
            lon: null
        }
    }

    componentDidMount() {
        // NOTE: Consider using watchPosition to track user's position live and clearWatch in componentDidUnmount for cleanup
        window.navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                this.setState({
                    location: {
                        lat: latitude,
                        lon: longitude
                    }
                });
            },
            error => console.log(error)
        )
    }
    

    render() {
        console.log(this.state.location.lat)

        return (
            <div>
                Weather Planner
            </div>
        );
    }
}

export default App;