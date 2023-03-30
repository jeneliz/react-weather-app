import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.fahrenheit)}</span>
        <span> °F </span>|
        <span>
          <a className="celcius" onClick={showCelsius} href="/">
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(celcius)}</span>
        <span>
          {" "}
          <a className="fahrenheit" onClick={showFahrenheit} href="/">
            °F
          </a>{" "}
        </span>
        |<span>°C</span>
      </span>
    );
  }
}
