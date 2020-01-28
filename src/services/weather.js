import http from "./httpService";
const autoCompleteEndPoint = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_ACCU_WEATHER_API_KEY}&q=`;
const dailyForecastsEndPoint = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/`;

const renderIcon = iconNumber => {
  let index = iconNumber < 10 ? "0" + iconNumber : iconNumber;
  return `https://developer.accuweather.com/sites/default/files/${index}-s.png`;
};

const getDailyForecasts = async selectedCity => {
  try {
    const { data: city } = await http.get(
      autoCompleteEndPoint + selectedCity.LocalizedName
    );
    //get the key of a selected city
    const cityKey = city[0].Key;
    // set 5 daily forecasts
    const {
      data: { DailyForecasts }
    } = await http.get(
      dailyForecastsEndPoint +
        cityKey +
        "?apikey=" +
        process.env.REACT_APP_ACCU_WEATHER_API_KEY
    );
    return DailyForecasts;
  } catch (err) {
    console.log(err);
  }
};

const toCelsius = (minTemp, maxTemp) => {
  return {
    minTemperature: Math.round((minTemp - 32) / 1.8),
    maxTemperature: Math.round((maxTemp - 32) / 1.8)
  };
};

const telAvivDefault = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  Country: {
    ID: "IL",
    LocalizedName: "Israel"
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv"
  }
};

export { renderIcon, getDailyForecasts, toCelsius };
