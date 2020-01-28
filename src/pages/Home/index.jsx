import React, { Fragment, useState, useEffect } from "react";
import http from "../../services/httpService";
import { toast } from "react-toastify";
import { getDailyForecasts } from "../../services/weather";
import { useStorage } from "../../services/localStorage";
import AutocompleteSearch from "../../components/AutocompleteSearch";
import CircularProgress from "@material-ui/core/CircularProgress";
import ToggleButton from "../../components/ToggleButton";
import DaysList from "../../components/DaysList";
import Favorite from "../../components/Favorite";
import "./style.css";

const autoCompleteEndPoint = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_ACCU_WEATHER_API_KEY}&q=`;
const cuurentWeatherEndpoint =
  "https://dataservice.accuweather.com/currentconditions/v1/";
const geolocationEndPoint = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_ACCU_WEATHER_API_KEY}`;

export default function Home(props) {
  const [selectedCity, setSelectedCity] = useStorage("selectedCity", {});
  const [favCities, setFavCities] = useStorage("favCities", []);
  const [unit, setUnit] = useState(prevState => true);
  const [dailyForecasts, setDailyForecasts] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("w-app_storage_changed")) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const lat = coords.latitude;
        const lng = coords.longitude;
        const { data: city } = await http.get(
          geolocationEndPoint + "&q=" + lat + "%2C" + lng
        );
        setSelectedCity(city);
      });
    }
    if (props.location.state) {
      setSelectedCity(props.location.state);
    }
  }, []);

  useEffect(() => {
    if (selectedCity.Key) {
      (async function getForecasts() {
        const dailyForecasts = await getDailyForecasts(selectedCity);
        setDailyForecasts(dailyForecasts);
      })();
    }
  }, [selectedCity]);

  const handleSearch = async (event, value) => {
    let city = event.target.value;
    const { data: cities } = await http.get(autoCompleteEndPoint + city);
    setCities(cities);
  };

  const handleSearchClick = (event, city) => {
    setSelectedCity(city);
  };

  const isFavoriteCity = () => {
    return favCities.some(city => city.Key === selectedCity.Key);
  };

  const handleFavClick = async () => {
    const newFavCities = [...favCities];

    if (isFavoriteCity()) {
      const index = newFavCities.findIndex(c => c.Key === selectedCity.Key);
      newFavCities.splice(index, 1);
      toast.warn(`${selectedCity.LocalizedName} Removed From Favorites`);
    } else {
      // get current weather object(for Favorites page use)
      const { data: currentWeather } = await http.get(
        cuurentWeatherEndpoint +
          selectedCity.Key +
          "?apikey=" +
          process.env.REACT_APP_ACCU_WEATHER_API_KEY
      );
      //push selectedCity obj including current weather to favotites array
      newFavCities.push({ ...selectedCity, currentWeather: currentWeather[0] });
      toast.success(`${selectedCity.LocalizedName} Added To Favorites`);
    }
    setFavCities(newFavCities);
  };

  const handleUnitClick = e => {
    // true => Fahrenheit
    // false => Celsius
    setUnit(prevState => !prevState);
  };

  return (
    <Fragment>
      <div className="container">
        <header className="search-area">
          <AutocompleteSearch
            data={cities}
            placeHolder="City"
            onSearch={handleSearch}
            value={selectedCity}
            onSearchClick={handleSearchClick}
          ></AutocompleteSearch>
        </header>

        <section className="city-area">
          {selectedCity && (
            <h1 className="selected-city">{selectedCity.LocalizedName}</h1>
          )}
        </section>
        <div className="favIcon">
          {selectedCity && (
            <Favorite
              onFavClick={handleFavClick}
              isFavorite={isFavoriteCity()}
            ></Favorite>
          )}
        </div>
        <div className="loading">
          {dailyForecasts === undefined && (
            <CircularProgress style={{ color: "white" }} disableShrink />
          )}
        </div>

        {selectedCity && dailyForecasts !== undefined && (
          <div className="dailyForecasts-area">
            <div className="toggle-btn">
              <ToggleButton
                label={unit ? "Switch To Celsius" : "Switch To Fahrenheit"}
                onUnitClick={handleUnitClick}
                value={unit}
              ></ToggleButton>
            </div>
            <DaysList days={dailyForecasts} unit={unit}></DaysList>
          </div>
        )}
      </div>
    </Fragment>
  );
}
