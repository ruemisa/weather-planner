import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation, getWeather } from '../../actions';

class CurrentWeather extends Component {

    componentDidMount() {
        // Grabbing user device location upon App load
        this.props.getLocation();
        // NOTE: This one is just a test
        this.props.getWeather();
    }

    render() {
        // console.log(this.props.location);
        console.log(this.props.currentTemp)
        return(
            <div>
                <div>
                    USER LOCATION
                    <p>lat: {this.props.location ? this.props.location.lat : null } </p>
                    <p>lon: {this.props.location ? this.props.location.lon : null}</p>
                    <h1>{this.props.currentTemp}</h1>
                    <h3>{this.props.summary}</h3>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        location: state.geolocation.location,
        // TODO: FIX THIS CHECK
        currentTemp: state.weather.weather ? state.weather.weather.currentTemp : null,
        summary: state.weather.weather ? state.weather.weather.summary : null
    }
};

export default connect(
    mapStateToProps, 
    { 
        getLocation,
        getWeather
    }
)(CurrentWeather);