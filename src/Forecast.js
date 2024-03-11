import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    city: "Paris",
    date: "Saturday 15:32",
    condition: "moderate rain",
    humidity: 87,
    wind: 7.2,
    icon: "☀️",
    currentTemp: 24,
  };
  return (
    <div className="current-weather">
      <div>
        <h1>{forecastData.city}</h1>
        <p className="current-details">
          {forecastData.date}, {forecastData.condition} <br />
          Humidity: <strong>{forecastData.humidity}%</strong>, Wind:{" "}
          <strong>{forecastData.wind}km/h</strong>
        </p>
      </div>
      <div className="current-temperature">
        <span className="current-temp-icon">{forecastData.icon}</span>
        <span className="current-temp-value">{forecastData.currentTemp}</span>
        <span className="current-temp-degree">°C</span>
      </div>
    </div>
  );
}
