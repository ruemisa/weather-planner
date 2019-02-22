import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserLocation } from '../../actions';

class CurrentWeather extends Component {

    componentDidMount() {
        // Grabbing user device location upon App load
        this.props.getUserLocation();
    }

    render() {
        console.log(this.props.location);
        return(
            <div>
                <div>
                    USER LOCATION
                    <p>lat: {this.props.location ? this.props.location.lat : null } </p>
                    <p>lon: {this.props.location ? this.props.location.lon : null}</p>
                </div>
                Current Weather
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        location: state.geolocation.location
    }
};

export default connect(
    mapStateToProps, 
    { getUserLocation }
)(CurrentWeather);