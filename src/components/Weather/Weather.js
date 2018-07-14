import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import WeatherList from '../WeatherList/WeatherList'


const Weather = ({actions : {fetchWeather}, weather}) => {

    return(
        <div>
            <SearchBar
                fetchWeather={fetchWeather}
            />
            <WeatherList
                weather={weather}
            />
        </div>
    )
};

export default Weather;