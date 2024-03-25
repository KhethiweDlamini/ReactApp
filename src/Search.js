import React, { useState, useEffect, useCallback } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("Pretoria");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Step 1: Add loading state

  function displayWeather(response) {
    setWeather({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setIsLoading(false); // Data loaded, set loading to false
    setDisplayCity(response.data.name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather(city); // Fetch weather for the entered city
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const fetchWeather = useCallback((city) => {
    setIsLoading(true); // Data is about to be fetched, set loading to true
    let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    setDisplayCity(city);
  }, []); // Add dependencies if `fetchWeather` uses any props or state

  useEffect(() => {
    fetchWeather("Pretoria");
  }, [fetchWeather]);

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

  // Adjust rendering to include loading state
  return (
    <header>
      <div className="search-form">{form}</div>
      <h1>{displayCity}</h1>
      <div className="current-weather">
        {isLoading ? (
          <p>Loading...</p> // Show loading message
        ) : (
          <p className="current-details">
            {weather.date && <FormattedDate date={weather.date} />},{" "}
            {weather.description} <br />
            Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
            <strong>{weather.wind}km/h</strong>
          </p>
        )}
        {!isLoading && (
          <div className="current-temperature">
            <span className="current-temp-icon">
              <img src={weather.icon} alt={weather.description} />
            </span>
            <span className="current-temp-value">
              {Math.round(weather.temperature)}
            </span>
            <span className="current-temp-degree">°C</span>
          </div>
        )}
      </div>
    </header>
  );
}
