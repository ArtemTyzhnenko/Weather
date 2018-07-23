import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Weather from '../../components/Weather/Weather';
import {fetchWeather} from '../../reducers/weather/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                fetchWeather,
            }
            ,dispatch)
    };
};

const mapStateToProps = ({weather}) =>{
    return{
        weather: weather.data,
        didInvalidate: weather.didInvalidate
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);


