import React, { Fragment, useState } from "react";
import { useStorage } from "../../services/localStorage";
import FavoritesList from "../../components/FavoritesList";
import LiveClock from "../../components/LiveClock";
import ToggleButton from "../../components/ToggleButton";

import "./style.css";

const noFavorites = <p>There Are No Favorites Cities Yet...</p>;
export default function Favorites() {
  const [favCities, setFavCities] = useStorage("favCities", []);
  const [unit, setUnit] = useState(prevState => true);

  const handleUnitClick = e => {
    // true => Fahrenheit
    // false => Celsius
    setUnit(prevState => !prevState);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="live-clock">
          <LiveClock format={"HH:mm:ss"} timezone={"Israel"}></LiveClock>
        </div>
        {favCities.length <= 0 && (
          <div className="empty-fav">{noFavorites}</div>
        )}
        {favCities.length > 0 && (
          <Fragment>
            <div className="toggle-btn">
              <ToggleButton
                label={unit ? "Switch To Celsius" : "Switch To Fahrenheit"}
                onUnitClick={handleUnitClick}
                value={unit}
              ></ToggleButton>
            </div>
            <div className="cities-list">
              <FavoritesList cities={favCities} unit={unit}></FavoritesList>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
