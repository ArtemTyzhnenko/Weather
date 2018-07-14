import * as actionTypes from './actionTypes';
import axios from 'axios'

const API_KEY = 'eaa48c09013a384ed3812944a9a5708d';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather  = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request, 'request');

    return {
        type: actionTypes.FETCH_WEATHER,
        payload: request,
    }

};




