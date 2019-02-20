import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserLocation } from '../../actions';

class CurrentWeather extends Component {

    componentDidMount() {
        // Grabbing user device location upon App load
        this.props.getUserLocation();
    }

    render() {

        return(
            <div>
                <div>
                    USER LOCATION
                    <p>lat:</p>
                    <p>lon:</p>
                </div>
                Current Weather
            </div>
        )
    }
}


export default connect(null, { getUserLocation })(CurrentWeather);