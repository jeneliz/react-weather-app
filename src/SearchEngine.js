import React, { useState } from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
    });
  }

  function search() {
    let apiKey = `d1oa3b4ebbef08c0aata4d20f47b2482`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="search-engine">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                onChange={updateCity}
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
        <Weather data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          icon={weatherData.iconUrl}
        />
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }
}
