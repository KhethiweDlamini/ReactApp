import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [displayCity, setDisplayCity] = useState("Paris");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <header>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            className="search-input"
            required
            onChange={updateCity}
            value={city}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <div>
          <h1>{displayCity}</h1>
          <div>
            <p className="current-details">
              Current Date + Time, weather conditions <br />
              Humidity: <strong>humidity%</strong>, Wind:{" "}
              <strong>windspeedkm/h</strong>
            </p>
            <div className="current-temperature">
              <span className="current-temp-icon">☀️</span>
              <span className="current-temp-value">24</span>
              <span className="current-temp-degree">°C</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
