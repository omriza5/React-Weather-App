import React, { Fragment } from "react";
import CityCard from "../CityCard";
import "./style.css";

export default function FavoritesList({ cities, unit }) {
  return (
    <Fragment>
      <div className="cities-list-container">
        {cities.map(city => (
          <CityCard key={city.Key} city={city} unit={unit}></CityCard>
        ))}
      </div>
    </Fragment>
  );
}
