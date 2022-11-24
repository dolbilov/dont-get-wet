import "../index.html";
import "./index.scss";

import Coords from "../components/Coords";
import Weather from "../components/Weather";
import * as constants from "../utils/constants";
import Api from "../components/Api";
import DropdownList from "../components/DropdownList.js";
import { markupElements } from "../utils/constants";

const dropdownList = new DropdownList("dropdown", constants.cityCoords, updateForecast);
const coordsObject = new Coords(updateForecast, markupElements.currentCity);
const api = new Api();
const tempHours = new Date().getHours();

const handleSuccess = (pos) => {
  updateForecast(pos.coords, "Your city");
};

const handleError = (err) => {
  if (err) console.warn(`ERROR ${err.code}: ${err.message}`);
  updateForecast(Coords.defaultCoords, "Moscow");
};

function updateForecast(coords, cityName) {
  api
    .getWeatherData(coords)
    .then((data) => {
      data.current_city = cityName;
      const weather = new Weather(data);
      weather.showWeather(constants.markupElements);
    })
    .catch(api.handleError);
}

console.log(tempHours);
if (tempHours > 20 || tempHours < 7) {
  console.log(1);
  document.body.style.background = "linear-gradient(180deg, #11212D 6.74%, #253745 57.65%, #4A5C6A 100%)";
}

dropdownList.setEventListener();

coordsObject.getUserCoords(handleSuccess, handleError);
