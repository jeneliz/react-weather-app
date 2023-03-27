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
      <h1>Las Vegas, NV</h1>
      <div className="date-decscription">
        <ul>
          <li>Monday 10:00 AM</li>
          <li>Clear</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            className="today-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUhJREFUeNrt230NgzAQh2GkIAUJyJgMJCABCZNQKcxBHdyOpFkyEkYGV9oL75Lff2Rwz8pXe2tEpLlzGgAAAAAAAAAAYHsDg4+8Hp1m0ATNrJGNzGmbZdvOZN+lAFLRkyb+KHgvMX1H5wYgFR5OFL2VcATiMgA9uFbzzFD4Oss+2qoA9ID6k0P9yKnRVwGgBzJeWPg6Y1GAdIGSwpmKAFRS/C5CFoDCw/6v08EcIF3wpNL0WQHSrS5WDBDXt0hrgGfFxX+eE7IApCc8cZIuB0BwBBBMAZz9+l+jwApgcggwWQJEhwDRBMDp8P+cBhYAg2OAwQIgOAYIFgCzY4DZAkBcB4C7AywvcIwAAADgNsiDEI/CvAzxOsyECFNiTIoyLc7CCEtjLI6yPE6DBC0yNEnRJkejJK2yNEvTLs8fJgAAAAAAAADg1nkDlR7XfJiH1ggAAAAASUVORK5CYII="
            alt="Clear"
          />
          <span className="current-temp">18</span>
          <span className="celcus"></span>°C |
          <span className="fahrenheit">°F</span>
        </div>
        <div className="col-6">
          <ul className="current-conditions">
            <li>Precipitation: 0%</li>
            <li>Humidity: 20% </li>
            <li>Wind: 19 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
