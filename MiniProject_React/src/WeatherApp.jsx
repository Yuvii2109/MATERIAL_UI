// WeatherApp.jsx code 

import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherinfo] = useState({
        city: "Delhi",
        country: "IN",
        description: "mist",
        feels_like: 36.05,
        humidity: 89,
        temp_max: 29.05,
        temp_min: 29.05,
        temperature: 29.05,
        wind: 4.12
    });
    let updateInfo = (newInfo) => {
        setWeatherinfo(newInfo);
    };
    return(
        <div>
            <h1><b><u><i>Weather-App</i></u></b></h1>
            <br /> <br />
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}