import React from 'react';
import WeatherListChart from '../WeatherListChart/WeatherList';
import GoogleMap from '../GoogleMap/GoogleMap';

const WeatherList = ({ weather }) =>{
    const renderWeather = (cityData) =>{
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap
                        lat={ lat }
                        lon={ lon }
                    />
                </td>
                <td>
                    <WeatherListChart
                        data={ temps }
                        color="red"
                        units="C"
                    />
                </td>
                <td>
                    <WeatherListChart
                        data={ pressures }
                        color="blue"
                        units="hPa"
                    />
                </td>
                <td>
                    <WeatherListChart
                        data={ humidities }
                        color="black"
                        units="%"
                    />
                </td>
            </tr>
        )
    };


    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
            </thead>
            <tbody>
                { weather.map(renderWeather) }
            </tbody>
        </table>
    )
};
export default WeatherList;