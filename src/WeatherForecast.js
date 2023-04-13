import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast.daily[0].time}</div>
            <div className="WeatherForecast-temperatures-icon">
              {" "}
              <img
                className="WeatherForecast-icon text-capitalize"
                src={forecast.daily[0].condition.icon_url}
                alt={forecast.daily[0].condition.icon}
              />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">
                {Math.round(forecast.daily[0].temperature.maximum)}°
              </span>
              {" | "}
              <span className="WeatherForecast-temperatures-min">
                {Math.round(forecast.daily[0].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `d1oa3b4ebbef08c0aata4d20f47b2482`;
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let unit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
