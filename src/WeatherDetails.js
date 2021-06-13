import React, { useState } from "react";
import axios from "axios";
import TempConversion from "./TempConversion";
import FormattedDate from "./FormattedDate";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66e11cc33b0837aff2265fadb13ac0ad&units=metric`;
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
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Temp">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city"
            id="city-input"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input type="submit" id="search-button" value="Search" />
          <button id="current-temperature-button">Current</button>
        </form>
        <h1 id="current-location">{weatherData.city}</h1>{" "}
        <h3 id="date">
          <FormattedDate date={weatherData.date} />
        </h3>
        <img src={weatherData.icon} className="icon" alt="current-weather" />
        <h2>
          <TempConversion celsius={weatherData.temperature} />
        </h2>
        <h3 id="weather-conditions">{weatherData.description}</h3>
      </div>
    );
  } else {
    search();
    return "Loading information...";
  }
}
