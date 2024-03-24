import React, { useState, useEffect } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("Pretoria");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather(city); // Fetch weather for the entered city
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function fetchWeather(city) {
    let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    setDisplayCity(city);
  }

  // useEffect to fetch weather for Paris as the default when the component mounts
  useEffect(() => {
    fetchWeather("Pretoria");
  }, []);
  // The empty array as the second argument ensures this effect runs only once after the initial render

  let form = (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="search"
        placeholder="Enter a city..."
        className="search-input"
        required
        onChange={updateCity}
        value={city}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );

  return (
    <header>
      <div className="search-form">
        {form}

        <div>
          <h1>{displayCity}</h1>
          <div className="current-weather">
            <p className="current-details">
              <FormattedDate date={weather.date} />, {weather.description}{" "}
              <br />
              Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
              <strong>{weather.wind}km/h</strong>
            </p>
            <div className="current-temperature">
              <span className="current-temp-icon">
                <img src={weather.icon} alt={weather.description} />
              </span>
              <span className="current-temp-value">
                {Math.round(weather.temperature)}
              </span>
              <span className="current-temp-degree">°C</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
