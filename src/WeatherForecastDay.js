import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-temperatures-icon">
        {" "}
        <img
          className="WeatherForecast-icon text-capitalize"
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {maxTemperature()}
        </span>
        {" | "}
        <span className="WeatherForecast-temperatures-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
