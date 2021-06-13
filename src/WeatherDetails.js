import React, { useState } from "react";

export default function WeatherDetails(props) {
    const [weatherData, setWeatherData] - useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function search() {
        let apiUrl = //need to install axios and populate OpenWeather API data and link
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
}

function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        icon: // need to link to OpenWeather icons
    });
}

if(weatherData.ready) {
    return (
        <div className="Temp">
            <form id="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Search for a city" id="city-input" onChange={handleCityChange}/>
                <input type="submit" id="search-button" value="Search" />
                <button id="current-temperature-button">current</button>
            </form>
        </div>
    )
}


}