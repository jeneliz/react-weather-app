import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.celsius)}</span>
        <span>°C </span>|
        <span>
          <a className="fahrenheit" onClick={showFahrenheit} href="/">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(fahrenheit)}</span>
        <span>
          <a className="celsius" onClick={showCelsius} href="/">
            °C
          </a>{" "}
        </span>
        |<span>°F</span>
      </span>
    );
  }
}
