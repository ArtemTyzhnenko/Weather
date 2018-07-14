import React from 'react';

const WeatherList = ({weather}) =>{
    const renderWeather = (cityData) =>{
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )
    };


    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {weather.map(renderWeather)}
            </tbody>
        </table>
    )
};
export default WeatherList;