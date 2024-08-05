// SearchBox.jsx code 

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [err,setErr] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "YehThodiBtaaoongaYaar!!!";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                temperature: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                wind: jsonResponse.wind.speed,
                feels_like: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        };
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setErr(true);
        };
    };
    return(
        <div className='SearchBox'>
            <h1><i><u>Search for weather</u></i></h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic" 
                label="City" 
                variant="outlined" 
                value={city}
                onChange={handleChange}/>
                &nbsp;&nbsp;&nbsp;
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {err && <h3>&nbsp;&nbsp;&nbsp;No such place exists in database...</h3>}
            </form>
        </div>
    );
}
