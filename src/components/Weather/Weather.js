import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import WeatherList from '../WeatherList/WeatherList'


const Weather = ({actions : { fetchWeather }, weather, didInvalidate}) => {
    console.log(weather, 'weather');
    return(
        <div>
            <SearchBar
                fetchWeather = { fetchWeather }
                didInvalidate = {didInvalidate}
            />
            <WeatherList
                weather = { weather }
            />
        </div>
    )
};

export default Weather;