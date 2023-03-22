import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search-engine">
      <h1>Weather App</h1>
      <div className="today-icon">today icon</div>
      <div className="current-temp">
        18 <span className="celcus"></span>°C |
        <span className="fahrenheit">°F</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
