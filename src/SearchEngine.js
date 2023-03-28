import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: "Monday 10:00 AM",
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="search-engine">
        <form /*onSubmit={handleSubmit}*/>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                /* onChange={updateCity} */
                placeholder="Enter a city..."
                className="search-form w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="date-decscription text-capitalize">
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="today-icon text-capitalize"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
            <span className="current-temp">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="celcus"></span>°C |
            <span className="fahrenheit">°F</span>
          </div>
          <div className="col-6">
            <ul className="current-conditions">
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li>Feels Like: {Math.round(weatherData.feelsLike)}°</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    //let [city, setCity] = useState(" ");
    let apiKey = `d1oa3b4ebbef08c0aata4d20f47b2482`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    /* function handleSubmit(event) {
      event.preventDefault();
      alert(`Searching for ${city}`);
    }

    function updateCity(event) {
      setCity(event.target.value);
    } */

    return `Loading...`;
  }
}
