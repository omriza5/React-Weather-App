import React, { Fragment } from "react";
import { renderIcon, toCelsius } from "../../services/weather";
import { convertToDay } from "../../services/date";
import "./style.css";

export default function DayCard({ day, unit }) {
  const dayStringFormat = convertToDay(day.Date);
  const minTemperature = day.Temperature.Minimum.Value;
  const maxTemperature = day.Temperature.Maximum.Value;
  const degree = !unit
    ? toCelsius(minTemperature, maxTemperature)
    : { minTemperature, maxTemperature };

  return (
    <Fragment>
      <div className="day-card">
        <div className="card-header">
          <img src={renderIcon(day.Day.Icon)} alt="" />
          <span>{day.Day.IconPhrase}</span>
        </div>
        <div className="card-content">
          <span className="day">{dayStringFormat}</span>
          <p>
            {degree.minTemperature}-{degree.maxTemperature}{" "}
            <span>{unit ? "F" : "C"}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
