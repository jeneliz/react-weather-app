import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="city-description-list">
        <h1>{props.data.city}</h1>
        <div className="date-decscription text-capitalize">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            className="today-icon text-capitalize"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul className="current-conditions">
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Feels Like: {Math.round(props.data.feelsLike)}°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
