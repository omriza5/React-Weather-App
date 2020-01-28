import React, { Fragment } from "react";
import DayCard from "../DayCard";
import "./style.css";

export default function DaysList({ days, unit }) {
  return (
    <Fragment>
      <div className="days-list-container">
        {days.map((day, key) => (
          <DayCard key={key + 1} day={day} unit={unit}></DayCard>
        ))}
      </div>
    </Fragment>
  );
}
