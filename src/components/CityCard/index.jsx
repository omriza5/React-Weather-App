import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { renderIcon } from "../../services/weather";
import { toCelsius } from "../../services/weather";
import "./style.css";

export default function CityCard({ city, unit }) {
  const temperture = city.currentWeather.Temperature.Imperial.Value;

  const degree = !unit
    ? toCelsius(temperture, 0)
    : { fTemp: city.currentWeather.Temperature.Imperial.Value };

  return (
    <Fragment>
      <div className="city-card">
        <Link
          to={{
            pathname: "/",
            state: city
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="header">
            <div className="city-card-img">
              <img src={renderIcon(city.currentWeather.WeatherIcon)} alt="" />
            </div>
          </div>
        </Link>
        <div className="city-card-content">
          <h5>{city.LocalizedName}</h5>
          <p>
            {degree.minTemperature || degree.fTemp}({unit ? "F" : "C"})
          </p>
        </div>
      </div>
    </Fragment>
  );
}
